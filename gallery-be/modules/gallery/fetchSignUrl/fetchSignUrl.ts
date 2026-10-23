const AWS = require("aws-sdk");
import { getSignedUrl } from "aws-cloudfront-sign";
import jwt from "jsonwebtoken";
import { userList } from "../constant";

const s3 = new AWS.S3();

const BUCKET_NAME = process.env.BUCKET_NAME;
const CLOUD_FRONT_URL = process.env.CLOUD_FRONT_URL;
const CLOUDFRONT_KEY_PAIR_ID: string = process.env.CLOUDFRONT_KEY_PAIR_ID || "";
const CLOUDFRONT_PRIVATE_KEY: string = process.env.CLOUDFRONT_PRIVATE_KEY || "";

export async function handler(event) {
  try {
    const { path, after = "" } = event.queryStringParameters || {};

    const token = event.headers?.Authorization || event.headers?.authorization;

    if (!token) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Token is required" }),
      };
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.username) {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: "Invalid token" }),
      };
    }

    const user = userList.find((it) => it.name === decoded.username);

    if (!user?.permission.s3.includes(path)) {
      return {
        statusCode: 403,
        body: JSON.stringify({ message: "Unauthorized" }),
      };
    }

    const privateKey = Buffer.from(CLOUDFRONT_PRIVATE_KEY, "base64").toString(
      "utf-8"
    );

    const listParams = {
      Bucket: BUCKET_NAME,
      Prefix: `${path}/`,
      MaxKeys: 50,
    } as any;

    if (after) {
      listParams.StartAfter = after;
    }

    const s3Objects = await s3.listObjectsV2(listParams).promise();

    const expiretime = Number((new Date().getTime() + 60000 * 60 * 2) / 1000);

    const sortedObjects = s3Objects.Contents.sort(
      (a, b) =>
        new Date(a.LastModified).getTime() - new Date(b.LastModified).getTime()
    );

    const images = sortedObjects.map((item) => {
      return {
        key: item.Key,
        url: getSignedUrl(`${CLOUD_FRONT_URL}/${item.Key}`, {
          keypairId: CLOUDFRONT_KEY_PAIR_ID,
          privateKeyString: privateKey,
          // expireTime: expiretime,
        }),
      };
    });

    return {
      statusCode: 200, // HTTP status code
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow from any origin
        "Access-Control-Allow-Credentials": true, // Allow credentials (like cookies, authorization headers)
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, DELETE",
        "Access-Control-Allow-Headers":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,Origin",
      },
      body: JSON.stringify({
        message: "Success",
        data: images,
      }),
    };
  } catch (error) {
    console.error("Error getting images:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error getting images", error }),
    };
  }
}
