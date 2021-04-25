import json
import boto3
import os
client = boto3.client('cloudformation')

def handler(event, context):
    data = json.loads(event['body'])
    accountId = context.invoked_function_arn.split(":")[4]
    commandType = data['id']
    capabilities = ['CAPABILITY_IAM']
    stackName = commandType
    print(commandType)
    templateUrl = f"https://soardinator-remediation-cfns-{accountId}.s3.amazonaws.com/{commandType}.yaml"
    print(templateUrl)
    print(event)
    print(context)

    response = client.create_stack(
        StackName=stackName,
        TemplateURL=templateUrl,
        Capabilities=capabilities,
    )

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps('Creating remediation stack')
    }