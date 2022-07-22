import boto3
import tableauserverclient as TSC


client = boto3.client('dynamodb')
s3 = boto3.resource('s3')


def lambda_handler(event, context):
    tableau_auth = TSC.TableauAuth(event['username'], event['password'], event['sitename'])
    server = TSC.Server(event['siteurl'],use_server_version=True)
    server.version = '3.5'

    with server.auth.sign_in(tableau_auth):
            
        response = {
        'statusCode': 200,
        'body': "auth successfull",
       'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }

    return response