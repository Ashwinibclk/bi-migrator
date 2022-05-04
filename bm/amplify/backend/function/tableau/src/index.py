import boto3
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
    tableau_auth = TSC.TableauAuth(event['username'], event['password'], event['sitename'])
    server = TSC.Server(event['siteurl'], use_server_version=True)
    # signin tableau and get project id
    with server.auth.sign_in(tableau_auth):
        # get all projects on site
        all_project_items, pagination_item = server.projects.get()
        projects=[proj.name for proj in all_project_items]
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
                    'description': {
                        'S': proj.description
                    }
                }
            )
    with server.auth.sign_in(tableau_auth):
        all_datasources, pagination_item = server.datasources.get()
        print([datasource.id for datasource in all_datasources])
        datasources=[proj.name for proj in all_datasources]
        for datasource in all_datasources:
            # get the data source
            data_source = server.datasources.get_by_id(datasource.id)
            # get the connection information
            server.datasources.populate_connections(data_source)
            # print the information about the first connection item
            connection = data_source.connections[0]
            print(connection)
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
        print([workbook.id for workbook in all_workbooks])
        workbooks=[proj.name for proj in all_workbooks]
        resp = server.metadata.query(query)
        print(server.metadata)
        workbook = resp['data']['workbooks']
        print(len(workbook))
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

    response = {
        'statusCode': 200,
        'body': projects,
        'body1': datasources,
        'body2': workbooks,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }

    return response