
import boto3
import csv

dynamodb_client = boto3.client('dynamodb')
client_qs = boto3.client('quicksight')



def lambda_handler(event, context):
    client=boto3.client('iam',aws_access_key_id=event['access'],
    aws_secret_access_key=event['secret'])

# Get a policy
    managed_user_policies = client.list_attached_user_policies(UserName=event['username'])

    response = {
        'statusCode': 200,
        'body':managed_user_policies ,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }

    return response