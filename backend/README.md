# Back end for a Serverless REST API example

This part of the project riffs off of my original [ServerlessTodos](https://github.com/nerdguru/serverlessTodos), which in turn riffs off of the [Serverless Framework Todo example](https://github.com/serverless/examples/tree/master/aws-node-rest-api-with-dynamodb), which demonstrates how to to create, list, get, update and delete Todos. DynamoDB is used to store the data.  The [frontend] contains a UI that interrogates this back end.

## Setup
First, [follow the setup instructions for the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/), then:
```bash
npm install
```
will load additional dependencies this project requires.

## Modes of Execution
First, look at [local execution](local.md) for how to run tests in your local environment.  Then, look at [CodePipeline execution](codePipeline.md) for how to run tests as part of a CI/CD pipeline using AWS CodePipeline.


