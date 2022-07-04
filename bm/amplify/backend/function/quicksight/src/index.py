from re import X
from subprocess import call
import boto3
import csv
import json
from collections import namedtuple
import xml.etree.ElementTree as ET

dynamodb_client = boto3.client('dynamodb')
client_qs = boto3.client('quicksight')
s3 = boto3.resource("s3")
quickSight = boto3.client('qsfldr', region_name="us-east-1")


def lambda_handler(event, context):
    s3.Bucket(
        'bim-project').download_file(event['pname']+".csv", '/tmp/'+event['pname']+".csv")
    file = open('/tmp/'+event['pname']+".csv")
    csvreader = csv.reader(file)
    Name = next(csvreader)
    print(Name)
    inpcol = []
    for i in Name:
        inpcol.append(
            {
                'Name': i,
                'Type': 'STRING'

            })
    print(inpcol)
    dictionary = {"entries": [
        {"url": "s3://bim-project/"+event['pname']+".csv", "mandatory":"true"}, ]}
    json_object = json.dumps(dictionary, indent=4)
    f = open('/tmp/'+event['pname']+'.manifest', "w+")
    f.write(json_object)
    f.close()
    s3.Bucket('bim-project').upload_file(f.name, event['pname']+'.manifest')
    s3.Bucket(
        'bim-project').download_file(event['pname']+".twb", '/tmp/'+event['pname']+".twb")
    tree = ET.parse('/tmp/'+event['pname']+'.twb')
    for i in tree.findall('worksheets'):
        for j in i.findall('worksheet'):
            for a in j.findall('table'):
                for b in a.findall('panes'):
                    for c in b.findall('pane'):
                        for d in c.findall('mark'):
                            chart = d.get('class')
                            print(chart)

    XML_worksheets = tree.findall('worksheets')
    print(XML_worksheets)
    XML_val = XML_worksheets[0].iter('worksheet')
    for item in XML_val:
        sname = item.get('name')
        print(sname)

# get x and y axis
    for i in tree.findall('worksheets'):
        for j in i.findall('worksheet'):
            for a in j.findall('table'):
                for b in a.findall('view'):
                    for d in b.findall('datasource-dependencies'):
                        for e in d.findall('column'):
                            axis = e.get('name')
                            print(axis)


# get calculated fields
    """for j in tree.findall('datasources'):
        for a in j.findall('datasource'):
            for b in a.findall('connection'):
                for c in b.findall('calculations'):
                    for d in c[0].iter('calculation'):
                        calculatedfields = d.get('formula')
                        print(calculatedfields)

        dynamodb_client.put_item(
                TableName='xmlinput-2i2srqro3bfvpogryufqfhd5hi-dev',
                Item={
                    'id': {
                        'S':id
                    },
                    'sheetname': {
                        'S': sname
                    },
                    'xaxis': {
                        'S': axis
                    },
                    'yaxis': {
                        'S': axis
                    },
                    'formula': {
                        'S': calculatedfields
                    },
                    'numerical': {
                        'S': calculatedfields
                    },
                    'dimensional': {
                        'S': calculatedfields
                    },
                    'charttype': {
                        'S': chart
                    }


                }
            )
"""
    response = quickSight.create_analysis(
        AwsAccountId=event['awsaccountId'],
        AnalysisId=event['analysisid'],
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
            "Definition":{



        "DataSetIdentifierDeclarations":[
            {
                "Identifier": "tabpro2",
                "DataSetArn": "arn:aws:quicksight:us-east-1:519510601754:dataset/cf5dc8fb-2022-4810-9e51-ddeeaddf855e"
            }
        ],
        "Sheets":[
            {
                "SheetId": "46cc5963-fbfb-4619-b27c-839ec7cfdf22",
                "Title": "tableausheet",
                "Name": "Sheet**1",
                "Visuals": [
                    {
                        "BarChartVisual": {
                            "VisualId": "75c186b9-7be4-4607-9901-4ef09e5f2502",
                            "Title": {
                                "Visibility": "VISIBLE",
                                "FormatText": {
                                    "PlainText": "Assets as code (preview feature) exposes analysis definition in JSON format via describe-analysis-definition method. "
                                }
                            },
                            "Subtitle": {
                                "Visibility": "VISIBLE",
                                "FormatText": {
                                    "PlainText": "This opens up several possibilities - Storing in external code repository, development of migration tools, backup & recovery, automated dashboard creation etc. 1) Launch analysis view. 2) Launch code editor from right sidebar. 3) Explore analysis definition. 4)Change orientation (ln 117) to VERTICAL and upload. 5)Change Bars Arrangement (ln 118) to CLUSTERED and upload. 6)Try duplicating a visual (and its layout; ids need to be unique).Note - All visual types and features not supported yet."
                                }
                            },
                            "ChartConfiguration": {
                                "FieldWells": {
                                    "BarChartAggregatedFieldWells": {
                                        "Category": [
                                            {
                                                "CategoricalDimensionField": {
                                                    "FieldId": "a1b2b743-7b8d-4366-8611-274639d87a61.ColumnId-14.1.1647725256871",
                                                    "Column": {
                                                        "DataSetIdentifier": "tabpro2",
                                                        "ColumnName": "Year"
                                                    }
                                                }
                                            }
                                        ],
                                        "Values": [
                                            {
                                                "NumericalMeasureField": {
                                                    "FieldId": "a1b2b743-7b8d-4366-8611-274639d87a61.ColumnId-16.2.1647725256871",
                                                    "Column": {
                                                        "DataSetIdentifier": "tabpro2",
                                                        "ColumnName": "Value"
                                                    },
                                                    "AggregationFunction": {
                                                        "SimpleNumericalAggregation": "SUM"
                                                    }
                                                }
                                            }
                                        ]


                                    }
                                }
                            }
                        }




                    }




                ]
            }
        ],
        "DefaultConfiguration":{
            "DefaultLayoutConfiguration": {
                "Grid": {
                    "ResizeOption": "FIXED",
                    "OptimizedViewPortWidth": 1600
                }
            }


        }
        }
        }
    )
    return response

    """  client_qs.put_item(
                TableName='tworkbooks-2i2srqro3bfvpogryufqfhd5hi-dev',
                Item={

                }
            )
"""
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

    # run_command('/opt/aws s3 sync s3://BUCKETNAME /tmp')
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
                'Arn': 'arn:aws:quicksight:'+event['region']+':'+event['awsaccountId']+':template/template'+responses['Item']['id']['S']
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
                'Arn': 'arn:aws:quicksight:'+event['region']+':'+event['awsaccountId']+':template/template'+responses['Item']['id']['S'],
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
