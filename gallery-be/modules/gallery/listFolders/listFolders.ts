const AWS = require("aws-sdk");
import { getSignedUrl } from "aws-cloudfront-sign";
import jwt from "jsonwebtoken";
import { userList } from "../constant";

export async function handler(event) {
  try {
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
        data: user?.permission.folders,
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
