
import json
import boto3
import csv

dynamodb_client = boto3.client('dynamodb')
client_qs = boto3.client('quicksight')



def lambda_handler(event, context):
    client=boto3.client('iam',aws_access_key_id=event['access'],
    aws_secret_access_key=event['secret'])

    client.attach_user_policy(
    PolicyArn='arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess',
    UserName=event['username'],
)

    client.attach_user_policy(
    PolicyArn='arn:aws:iam::aws:policy/AWSLambda_FullAccess',
    UserName=event['username'],
)

    client.attach_user_policy(
    PolicyArn='arn:aws:iam::aws:policy/IAMFullAccess',
    UserName=event['username'],
)

    client.attach_user_policy(
    PolicyArn='arn:aws:iam::aws:policy/AmazonS3FullAccess',
    UserName=event['username'],
)

       # Create a policy
    my_managed_policy = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": "quicksight:*",
            "Resource": "*"
        }
    ]
}
    a= client.create_policy(
        PolicyName='aq',
        PolicyDocument=json.dumps(my_managed_policy)
    )
    print(a)

    client.attach_user_policy(
    PolicyArn='arn:aws:iam::'+event['awsaccountId']+':policy/aq',
    UserName=event['username'],
)

   

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