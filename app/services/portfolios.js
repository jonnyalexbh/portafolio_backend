const AWS = require('aws-sdk');
const config = require('../../config');

const awsConfig = {
  ...new AWS.Config({
    endpoint: config.dynamodb.endpoint,
    accessKeyId: config.amazon.accessKeyId,
    secretAccessKey: config.amazon.secretAccessKey,
    region: config.amazon.region,
  }),
};

const db = new AWS.DynamoDB.DocumentClient(awsConfig);
const tableName = config.dynamodb.table;

exports.getPortfolio = (id) => {
  const params = {
    TableName: tableName,
    Key: {
      id,
    },
  };

  return db
    .get(params)
    .promise()
    .then((item) => item)
    .catch((error) => {
      console.log(error.message);
    });
};
