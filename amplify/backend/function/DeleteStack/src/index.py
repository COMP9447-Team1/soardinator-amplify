import json
import boto3
import os
client = boto3.client('cloudformation')

def handler(event, context):
    data = json.loads(event["body"])
    stackName = data["id"]
    print(stackName)    
    response = client.delete_stack(
        StackName=stackName,
    )
    
    return {
        'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps('Deleting remediation stack')
    }