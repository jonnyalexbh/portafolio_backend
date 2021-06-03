require('dotenv').config();

module.exports = {
  api: {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 3000,
  },
  amazon: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  },
  dynamodb: {
    endpoint: process.env.NODE_API_DYNAMO_ENDPOINT,
    table: process.env.NODE_API_DYNAMO_TABLE,
  },
};