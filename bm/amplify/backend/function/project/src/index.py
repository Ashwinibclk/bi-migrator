import boto3
import tableauserverclient as TSC


client = boto3.client('dynamodb')
s3 = boto3.resource('s3')


def lambda_handler(event, context):
    tableau_auth = TSC.TableauAuth(event['username'], event['password'], event['sitename'])
    server = TSC.Server(event['siteurl'],use_server_version=True)
    server.version = '3.5'
    

    request_option=TSC.RequestOptions().filter.add(TSC.Filter(TSC.RequestOptions.Field.ProjectName, TSC.RequestOptions.Operator.Equals, event['projectname']))

    with server.auth.sign_in(tableau_auth):
            all_workbooks, pagination_item = server.workbooks.get(request_option)
            all_datasources, pagination_items =  server.datasources.get(request_option)
            all_projects, pagination_items = server.projects.get(request_option)
            print("\nThere are {} workbooks for project {} on site: {}".format(pagination_item.total_available, event['projectname'], 'migrations'))
            print("\nThere are {} datasources for project {} on site: {}".format(pagination_items.total_available, event['projectname'], 'migrations'))
            print([proj.id for proj in all_workbooks])
            print([proj.id for proj in all_datasources])
            for datasource in all_datasources:
            # get the data source
                data_source = server.datasources.get_by_id(datasource.id)
            # get the connection information
                server.datasources.populate_connections(data_source)
            # print the information about the first connection item
            connection = data_source.connections[0]
            print(connection)
            for proj in all_datasources:
                for i in all_projects:
                    if(i.name==event['projectname']):

                        print(proj.id, proj.name,i.id)
            """   client.put_item(
                    TableName='tprojects-2i2srqro3bfvpogryufqfhd5hi-dev',
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
                        'pid':{
                            'S':i.id
                        },
                        'pname':{
                            'S':event['projectname']
                        }
                    }
            )"""