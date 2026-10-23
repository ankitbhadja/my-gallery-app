import { userList } from "../constant";
import jwt from "jsonwebtoken";

const AWS = require("aws-sdk");

export async function handler(event) {
  const { username, password } = JSON.parse(event.body);

  const hasUser = userList.find((it) => it.name === username);
  const configuredPassword = hasUser
    ? process.env[hasUser.passwordEnvVar]
    : undefined;
  const isVerified =
    Boolean(configuredPassword) && configuredPassword === password;

  if (!username || !password || !isVerified) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Invalid username or password" }),
    };
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "4h",
  });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow from any origin
      "Access-Control-Allow-Credentials": true, // Allow credentials (like cookies, authorization headers)
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, DELETE",
      "Access-Control-Allow-Headers":
        "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,Origin",
    },
    body: JSON.stringify({ token }),
  };
}
