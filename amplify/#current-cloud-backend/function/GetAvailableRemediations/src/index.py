import json
import boto3

s3 = boto3.client('s3')
cfn = boto3.client('cloudformation')
def handler(event, context):
    accountId = context.invoked_function_arn.split(":")[4]
    bucket = s3.list_objects_v2(Bucket=f'soardinator-remediation-cfns-{accountId}')
    print('bucket', bucket)
    statuses = {}
    if 'Contents' in bucket:
        keys = [obj['Key'][:-5] for obj in bucket['Contents']]
        print('keys', keys)
        for key in keys:
            statuses[key] = "inactive"
        stacks = cfn.list_stacks()
        print('stacks', stacks)
        for stack in stacks["StackSummaries"]:
            name = stack["StackName"]
            print('stack', stack)
            if name in statuses:
                statuses[name] = stack["StackStatus"]
        
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps([{"id" : name, "status" : status} for name, status in statuses.items()])
    }