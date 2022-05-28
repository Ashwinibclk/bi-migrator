from subprocess import call
import boto3
import csv
import json

dynamodb_client = boto3.client('dynamodb')
client_qs = boto3.client('quicksight')
s3 = boto3.resource("s3")


def lambda_handler(event, context):
    s3.Bucket('bim-project').download_file(event['pname']+".csv", '/tmp/'+event['pname']+".csv")
    file = open('/tmp/'+event['pname']+".csv")
    csvreader = csv.reader(file)
    Name = next(csvreader)
    print(Name)
    inpcol=[]
    for i in Name:
         inpcol.append(
                        {
                        'Name':i,
                        'Type':'STRING'
                                        
                        })
    print(inpcol)
    dictionary = {"entries": [
        {"url": "s3://bim-project/"+event['pname']+".csv", "mandatory":"true"}, ]}
    json_object = json.dumps(dictionary, indent=4)
    f = open('/tmp/'+event['pname']+'.manifest', "w+")
    f.write(json_object)
    f.close()
    s3.Bucket('bim-project').upload_file(f.name, event['pname']+'.manifest')

    response = dynamodb_client.get_item(
        TableName='tdatasources-2i2srqro3bfvpogryufqfhd5hi-dev',
        Key={
            'id': {'S': event['dsid']},
            # 'filepath': {'S': 'World Indicators.hyper'},
            # 'name': {'S': 'World Indicators'}
        }
    )
    print(response['Item']['id']['S'])
    responses = dynamodb_client.get_item(
        TableName='tprojects-2i2srqro3bfvpogryufqfhd5hi-dev',
        Key={
            'id': {'S': event['id']},
            # 'name': {'S': 'default'}
        }
    )
    print(responses['Item']['id']['S'])
    client_qs.create_folder(
        AwsAccountId=event['awsaccountId'],
        FolderId=response['Item']['id']['S'],
        Name=event['projectname'],
        Permissions=[
            {
                'Principal':  'arn:aws:quicksight:'+event['region']+':'+event['awsaccountId']+':user/default/'+event['username'],
                'Actions': ["quicksight:CreateFolder",
                            "quicksight:DescribeFolder",
                            "quicksight:UpdateFolder",
                            "quicksight:DeleteFolder",
                            "quicksight:CreateFolderMembership",
                            "quicksight:DeleteFolderMembership",
                            "quicksight:DescribeFolderPermissions",
                            "quicksight:UpdateFolderPermissions"]
            },
        ],
    )
    client_qs.create_data_source(
        AwsAccountId=event['awsaccountId'],
        DataSourceId=response['Item']['id']['S'],
        Name=event['projectname'],
        Type='S3',
        DataSourceParameters={
            'S3Parameters': {
                'ManifestFileLocation': {
                    'Bucket': 'bim-project',
                    'Key': event['pname']+'.manifest'
                }
            },
        },
        Permissions=[
            {
                'Principal':  'arn:aws:quicksight:'+event['region']+":"+event['awsaccountId']+':user/default/'+event['username'],
                'Actions': [
                    "quicksight:UpdateDataSourcePermissions",
                    "quicksight:DescribeDataSource",
                    "quicksight:DescribeDataSourcePermissions",
                    "quicksight:PassDataSource",
                    "quicksight:UpdateDataSource",
                    "quicksight:DeleteDataSource",

                ]
            },
        ],
    )

    client_qs.create_data_set(
        AwsAccountId=event['awsaccountId'],
        DataSetId="dataset" + response['Item']['id']['S'],
        Name=response['Item']['name']['S'],
        PhysicalTableMap={
            'qs-test-data-1': {
                'S3Source': {
                    'DataSourceArn': 'arn:aws:quicksight:'+event['region']+":"+event['awsaccountId']+':datasource/' +
                                     response['Item']['id']['S'],
                    'InputColumns': inpcol
                    
                        
                     
                }
            }
        },
        ImportMode='SPICE',
        Permissions=[
            {
                'Principal':  'arn:aws:quicksight:'+event['region']+":"+event['awsaccountId']+':user/default/'+event['username'],
                'Actions': [
                    "quicksight:DescribeDataSet", "quicksight:DescribeDataSetPermissions", "quicksight:PassDataSet",
                    "quicksight:DescribeIngestion", "quicksight:ListIngestions", "quicksight:UpdateDataSet",
                    "quicksight:DeleteDataSet", "quicksight:CreateIngestion", "quicksight:CancelIngestion",
                    "quicksight:UpdateDataSetPermissions"

                ]
            },
        ],
        DataSetUsageConfiguration={
            'DisableUseAsDirectQuerySource': False,
            'DisableUseAsImportedSource': False
        }
    )
    client_qs.create_template(
        AwsAccountId=event['awsaccountId'],
        TemplateId="template" + responses['Item']['id']['S'],
        Name="template" + responses['Item']['name']['S'],
        Permissions=[
            {
                'Principal':  'arn:aws:quicksight:'+event['region']+":"+event['awsaccountId']+':user/default/'+event['username'],
                'Actions': [
                    "quicksight:CreateTemplate",
                    "quicksight:DescribeTemplate",
                    "quicksight:ListTemplates",
                    "quicksight:DescribeTemplatePermissions",
                    "quicksight:DeleteTemplate",
                    "quicksight:UpdateTemplate",
                ]
            },
        ],
        SourceEntity={
            'SourceAnalysis': {
                'Arn': 'arn:aws:quicksight:'+event['region']+':'+event['awsaccountId']+":analysis/analysisboto3",
                'DataSetReferences': [
                    {
                        'DataSetPlaceholder': 'test',
                        'DataSetArn': 'arn:aws:quicksight:'+event['region']+':'+event['awsaccountId']+':dataset/datasetboto-2'

                    },
                ]
            },
        },
        VersionDescription='0'
    )
    client_qs.create_analysis(
        AwsAccountId=event['awsaccountId'],
        AnalysisId="analysis" + response['Item']['id']['S'],
        Name=event['pname'],
        Permissions=[
            {
                'Principal':  'arn:aws:quicksight:'+event['region']+":"+event['awsaccountId']+':user/default/'+event['username'],
                'Actions': [
                    "quicksight:RestoreAnalysis",
                    "quicksight:UpdateAnalysisPermissions",
                    "quicksight:DeleteAnalysis",
                    "quicksight:DescribeAnalysisPermissions",
                    "quicksight:QueryAnalysis",
                    "quicksight:DescribeAnalysis",
                    "quicksight:UpdateAnalysis"
                ]
            },
        ],
        SourceEntity={
            'SourceTemplate': {
                'DataSetReferences': [
                    {
                        'DataSetPlaceholder': 'test',
                        'DataSetArn': 'arn:aws:quicksight:'+event['region']+':'+event['awsaccountId']+':dataset/' + "dataset" +
                                      response['Item']['id']['S']
                    },
                ],
                'Arn': 'arn:aws:quicksight:'+event['region']+':'+event['awsaccountId']+':template/templatebotot3'
            }
        },
    )

    client_qs.create_dashboard(
        AwsAccountId=event['awsaccountId'],
        DashboardId="dashboard" + response['Item']['id']['S'],
        Name=event['projectname']+'dashboard',
        Permissions=[
            {
                'Principal':  'arn:aws:quicksight:'+event['region']+":"+event['awsaccountId']+':user/default/'+event['username'],
                'Actions': [
                    "quicksight:DescribeDashboard",
                    "quicksight:ListDashboardVersions",
                    "quicksight:UpdateDashboardPermissions",
                    "quicksight:QueryDashboard",
                    "quicksight:UpdateDashboard",
                    "quicksight:DeleteDashboard",
                    "quicksight:DescribeDashboardPermissions",
                    "quicksight:UpdateDashboardPublishedVersion"
                ]
            },
        ],
        SourceEntity={
            'SourceTemplate': {
                'DataSetReferences': [
                    {
                        'DataSetPlaceholder': 'test',
                        'DataSetArn': 'arn:aws:quicksight:'+event['region']+':'+event['awsaccountId']+':dataset/' + "dataset" +
                                      response['Item']['id']['S']
                    },
                ],
                'Arn': 'arn:aws:quicksight:'+event['region']+':'+event['awsaccountId']+':template/' + "template" + responses['Item']['id']['S']
            }
        },
        VersionDescription='0',
    )
    durl = client_qs.get_dashboard_embed_url(
        AwsAccountId=event['awsaccountId'],
        DashboardId="dashboard" + response['Item']['id']['S'],
        IdentityType='QUICKSIGHT',
        UserArn='arn:aws:quicksight:' +
        event['region']+':'+event['awsaccountId'] +
        ':user/default/'+event['username'],
        UndoRedoDisabled=True | False,
        ResetDisabled=True | False
    )
    call('rm -rf /tmp/*', shell=True)

    response = {
        'statusCode': 200,
        'body': durl['EmbedUrl'],
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }

    return response
