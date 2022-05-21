import boto3
import csv

dynamodb_client = boto3.client('dynamodb')
client_qs = boto3.client('quicksight')
s3 = boto3.client("s3")


def lambda_handler(event, context):
    response = dynamodb_client.get_item(
        TableName='tdatasources-2i2srqro3bfvpogryufqfhd5hi-dev',
        Key={
            'id': {'S': event['dsid']},
            #'filepath': {'S': 'World Indicators.hyper'},
            # 'name': {'S': 'World Indicators'}
        }
    )
    print(response['Item']['id']['S'])
    responses = dynamodb_client.get_item(
        TableName='tprojects-2i2srqro3bfvpogryufqfhd5hi-dev',
        Key={
            'id': {'S': event['id']},
            #'name': {'S': 'default'}
        }
    )
    print(responses['Item']['id']['S'])
    client_qs.create_data_source(
        AwsAccountId=event['awsaccountId'],
        DataSourceId=response['Item']['id']['S'],
        Name=event['projectname'],
        Type='S3',
        DataSourceParameters={
            'S3Parameters': {
                'ManifestFileLocation': {
                    'Bucket': event['bucket'],
                    'Key': event['key']
                }
            },
        },
        Permissions=[
            {
                'Principal': event['userarn'],
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
                    'InputColumns': [
                        {
                            'Name': 'ID',
                            'Type': 'STRING'
                        },
                        {
                            'Name': 'Country',
                            'Type': 'STRING'
                        },
                        {
                            'Name': 'State',
                            'Type': 'STRING'
                        },
                        {
                            'Name': 'City',
                            'Type': 'STRING'
                        },
                        {
                            'Name': 'Amount',
                            'Type': 'STRING'
                        },
                    ]
                }
            }
        },
        ImportMode='SPICE',
        Permissions=[
            {
                'Principal': event['userarn'],
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
                'Principal': event['userarn'],
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
        Name=event['workbookname'],
        Permissions=[
            {
                'Principal': event['userarn'],
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
                'Principal': event['userarn'],
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
    UserArn=event['userarn'],
    UndoRedoDisabled=True|False,
    ResetDisabled=True|False
)

    response = {
        'statusCode': 200,
        'body': durl['EmbedUrl'],
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }

    return response