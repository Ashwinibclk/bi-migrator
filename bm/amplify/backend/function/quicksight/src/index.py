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
        Name=response['Item']['name']['S'],
        Type='S3',
        DataSourceParameters={
            'S3Parameters': {
                'ManifestFileLocation': {
                    'Bucket': 'bim-project',
                    'Key': 'bimprojectfolder/CityData.manifest'
                }
            },
        },
        Permissions=[
            {
                'Principal': 'arn:aws:quicksight:us-east-1:519510601754:user/default/ashwini',
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
                    'DataSourceArn': 'arn:aws:quicksight:us-east-1:519510601754:datasource/' +
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
                'Principal': 'arn:aws:quicksight:us-east-1:519510601754:user/default/ashwini',
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
                'Principal': 'arn:aws:quicksight:us-east-1:519510601754:user/default/ashwini',
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
                'Arn': "arn:aws:quicksight:us-east-1:519510601754:analysis/analysisboto3",
                'DataSetReferences': [
                    {
                        'DataSetPlaceholder': 'test',
                        'DataSetArn': 'arn:aws:quicksight:us-east-1:519510601754:dataset/datasetboto-2'

                    },
                ]
            },
        },
        VersionDescription='0'
    )
    client_qs.create_analysis(
        AwsAccountId=event['awsaccountId'],
        AnalysisId="analysis" + response['Item']['id']['S'],
        Name='analysis' + response['Item']['name']['S'],
        Permissions=[
            {
                'Principal': 'arn:aws:quicksight:us-east-1:519510601754:user/default/ashwini',
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
                        'DataSetArn': 'arn:aws:quicksight:us-east-1:519510601754:dataset/' + "dataset" +
                                      response['Item']['id']['S']
                    },
                ],
                'Arn': 'arn:aws:quicksight:us-east-1:519510601754:template/templatebotot3'
            }
        },
    )

    client_qs.create_dashboard(
        AwsAccountId=event['awsaccountId'],
        DashboardId="dashboard" + response['Item']['id']['S'],
        Name="dashboard" + response['Item']['name']['S'],
        Permissions=[
            {
                'Principal': 'arn:aws:quicksight:us-east-1:519510601754:user/default/ashwini',
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
                        'DataSetArn': 'arn:aws:quicksight:us-east-1:519510601754:dataset/' + "dataset" +
                                      response['Item']['id']['S']
                    },
                ],
                'Arn': 'arn:aws:quicksight:us-east-1:519510601754:template/' + "template" + responses['Item']['id']['S']
            }
        },
        VersionDescription='0',
    )

    response = {
        'statusCode': 200,
        'body': "auth successfully",
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }

    return response