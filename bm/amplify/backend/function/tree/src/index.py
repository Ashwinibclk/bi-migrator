import boto3
import tableauserverclient as TSC
import os
#import pandas as pd
import csv
 
 
client = boto3.client('dynamodb')
s3 = boto3.resource('s3')
 
 
def lambda_handler(event, context):
   tableau_auth = TSC.TableauAuth(event['username'], event['password'], event['sitename'])
   server = TSC.Server(event['siteurl'], use_server_version=True)
   with server.auth.sign_in(tableau_auth):
       all_projects,  pagination_item = server.projects.get()
       print(all_projects)
      
       request_option = TSC.RequestOptions()
       request_option.filter.add(TSC.Filter(TSC.RequestOptions.Field.ProjectName, TSC.RequestOptions.Operator.Equals, event['projectname']))
       all_workbooks, pagination_item = server.workbooks.get(request_option)
       workbooks=[i.name for i in all_workbooks]
       print(workbooks)
 
 
          
 
   response = {
       'statusCode': 200,
       'body': workbooks,
       'headers': {
           "Access-Control-Allow-Headers": "*",
           "Access-Control-Allow-Origin": "*",
           "Access-Control-Allow-Methods": "POST,GET",
           "Access-Control-Request-Headers": "*",
           "Content-Type": "application/json"
       },
   }
 
   return response