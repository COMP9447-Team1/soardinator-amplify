import json
import boto3

s3 = boto3.client('cloudformation')
def handler(event, context):
    accountId = context.invoked_function_arn.split(":")[4]
    bucket = s3.list_objects_v2(Bucket=f'soardinator-remediation-cfns-{accountId}')
    keys = [obj['Key'] for obj in bucket['Contents']]
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(keys)
    }