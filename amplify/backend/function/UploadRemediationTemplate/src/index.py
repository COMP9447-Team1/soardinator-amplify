import json
import boto3
s3 = boto3.client('s3')

def handler(event, context):
    print('received event:')
    print(event)

    accountId = context.invoked_function_arn.split(":")[4]
    data = event['body']
    s3.put_object(Body=data['template'], Bucket=f"soardinator-remediation-cfns-{accountId}", Key=data["name"])
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps('Uploaded template')
    }