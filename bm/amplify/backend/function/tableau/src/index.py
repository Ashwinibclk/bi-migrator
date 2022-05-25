import glob
import os
import shutil
import zipfile
import boto3
from datetime import datetime,  timezone
import time
import tableauserverclient as TSC


client = boto3.client('dynamodb')
s3 = boto3.resource('s3')


def lambda_handler(event, context):
    query = """
      {
  workbooks {
    id
    name
    projectName
    views {
      id
      name
    }
    }
  }
        """

    tableau_auth = TSC.TableauAuth(
        event['username'], event['password'], event['sitename'])
    server = TSC.Server(event['siteurl'], use_server_version=True)
    # signin tableau and get project id
    with server.auth.sign_in(tableau_auth):
        # get all projects on site
        projects = []
        all_project_items, pagination_item = server.projects.get()
        # print(list(all_project_items))
        p = [proj.name for proj in all_project_items]
        for i in all_project_items:
            projects.append([i.id, i.name])
        for proj in all_project_items:
            client.put_item(
                TableName='tprojects-2i2srqro3bfvpogryufqfhd5hi-dev',
                Item={
                    'id': {
                        'S': proj.id
                    },
                    'name': {
                        'S': proj.name
                    },

                }
            )
    with server.auth.sign_in(tableau_auth):
        datasources = []
        all_datasources, pagination_item = server.datasources.get()
        # print(all_datasources)
        d = [d.name for d in all_datasources]
        for i in all_datasources:
            datasources.append([i.id, i.name])
       # print([datasource.id for datasource in all_datasources])

        for datasource in all_datasources:
            # get the data source
            data_source = server.datasources.get_by_id(datasource.id)
            # get the connection information
            server.datasources.populate_connections(data_source)
            # print the information about the first connection item
            connection = data_source.connections[0]
            # print(connection)
            client.put_item(
                TableName='tdatasources-2i2srqro3bfvpogryufqfhd5hi-dev',
                Item={
                    'id': {
                        'S': datasource.id
                    },
                    'filepath': {
                        'S': datasource.name + '.' + connection.connection_type
                    },
                    'name': {
                        'S': datasource.name
                    },
                }
            )

    with server.auth.sign_in(tableau_auth):
        all_workbooks, pagination_item = server.workbooks.get()
        # print(all_workbooks)
        w = [w.name for w in all_workbooks]
       # print([workbook.id for workbook in all_workbooks])
        workbooks = []
        for i in all_workbooks:
            workbooks.append([i.id, i.name])
        resp = server.metadata.query(query)
        # print(server.metadata)
        workbook = resp['data']['workbooks']
        # print(len(workbook))
        for i in range(len(workbook)):
            client.put_item(
                TableName='tworkbooks-2i2srqro3bfvpogryufqfhd5hi-dev',
                Item={
                    'Name': {
                        'S': workbook[i]['name']
                    },
                    'id': {
                        'S': workbook[i]['id']
                    },
                    'projectname': {
                        'S': workbook[i]['projectName']
                    }
                }
            )
        for i in all_project_items:
            # print(i.name)
            request_option = TSC.RequestOptions().filter.add(TSC.Filter(
                TSC.RequestOptions.Field.ProjectName, TSC.RequestOptions.Operator.Equals, i.name))

            with server.auth.sign_in(tableau_auth):
                all_workbooks, pagination_item = server.workbooks.get(
                    request_option)
                all_datasources, pagination_items = server.datasources.get(
                    request_option)
                # all_projects, pagination_items = server.projects.get(request_option)
                # print("\nThere are {} workbooks for project {} on site: {}".format(
                # pagination_item.total_available, i.name, 'migrations'))
            # print("\nThere are {} datasources for project {} on site: {}".format(
                # pagination_items.total_available, i.name, 'migrations'))
                # print([proj.id for proj in all_workbooks])
                # print([proj.id for proj in all_datasources])
                for datasource in all_datasources:
                    # get the data source
                    data_source = server.datasources.get_by_id(datasource.id)
                    
                # get the connection information
                    server.datasources.populate_connections(data_source)
                # print the information about the first connection item
                connection = data_source.connections[0]
            # print(connection)
                for proj in all_datasources:
                    
                    s3 = boto3.resource('s3')
                    file_path = server.datasources.download(datasource.id,"/tmp/")
                    
                    print(format(file_path))

                    base = os.path.basename(file_path)
                    os.path.splitext(base)
                    file = os.path.splitext(base)[0]+".zip"

                    src_path = format(file_path)
                    dst_path = r"/tmp/"+file
                    shutil.copy(src_path, dst_path)
                    print('Copied')
                    with zipfile.ZipFile("/tmp/"+file, "r") as zip_ref:
                        zip_ref.extractall("/tmp/")

                    os.chdir('/tmp//Data/')
                    result = glob.glob('*/**.csv')
                    print(result)

                    
                    s3.Bucket('bim-project').upload_file(result[0], i.name+'.csv')
                    # print(proj.id, proj.name, i.id, i.name, event['username'])
        client.put_item(

                        TableName='tptds-2i2srqro3bfvpogryufqfhd5hi-dev',
                        Item={
                            'dsid': {
                                'S': proj.id
                            },
                            'name': {
                                'S': proj.name
                            },
                            'filepath': {
                                'S': proj.name + '.' + connection.connection_type
                            },
                            'username': {
                                'S': event['username']
                            },
                            'id': {
                                'S': i.id
                            },
                            'pname': {
                                'S': i.name
                            },
                            '__typename': {
                                'S': "tptds"
                            },
                            '_version': {
                                'N': "1"
                            },
                            'createdAt': {
                                'S': str(datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"))
                            },
                            'updatedAt': {
                                'S': str(datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"))
                            },
                            '_lastChangedAt': {
                                'N': str(int(time.time()))
                            }

                        }

                    )
        for j in all_workbooks:
                    # print(j.id, j.name, i.id, i.name, event['username'])
                    client.put_item(

                        TableName='twtp-2i2srqro3bfvpogryufqfhd5hi-dev',
                        Item={
                            'id': {
                                'S': j.id
                            },
                            'workbookname': {
                                'S':j.name
                            },
                            'username':{
                                'S':event['username']
                            },
                        
                            'pid': {
                                'S': i.id
                            },
                            'pname': {
                                'S': i.name
                            },
                            '__typename': {
                                'S': "twtp"
                            },
                            '_version': {
                                'N': "1"
                            },
                            'createdAt': {
                                'S': str(datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"))
                            },
                            'updatedAt': {
                                'S': str(datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"))
                            },
                            '_lastChangedAt': {
                                'N': str(int(time.time()))
                            }
                        })
            

    response = {
        'statusCode': 200,
        'body': p,
        'body1': d,
        'body2': w,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }

    return response
