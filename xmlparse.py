from collections import namedtuple
import xml.etree.ElementTree as ET

# get worksheet name
tree = ET.parse("d11-3.twb")
axis=[]
XML_worksheets = tree.findall('worksheets')
print(XML_worksheets)
XML_val = XML_worksheets[0].iter('worksheet')
for item in XML_val:
    name = item.get('name')
    print(name)

    
# get datasource name

"""XML_datasources = tree.findall('datasources')
XML_val = XML_datasources[0].iter('datasource')
for item in XML_val:
    name = item.get('name')
    print(name)"""

#get title
for i in tree.findall('worksheets'):
    for j in i.findall('worksheet'):
        for a in j.findall('layout-options'):
            for b in a.findall('title'):
                for c in b.findall('formatted-text'):
                    d=c.find('run').text
                    print(d)
                

                
# get chart type
for i in tree.findall('worksheets'):
    for j in i.findall('worksheet'):
        for a in j.findall('table'):
            for b in a.findall('panes'):
                for c in b.findall('pane'):
                    for d in c.findall('mark'):
                        name = d.get('class')
                        print(name)    


# get x and y axis
for i in tree.findall('worksheets'):
    for j in i.findall('worksheet'):
        for a in j.findall('table'):
            for b in a.findall('view'):
                for d in b.findall('datasource-dependencies'):
                    for e in d.findall('column'):
                        name = e.get('name')
                        axis.append(name)
                        print(name)
                    print(axis[0][1:-1])
                    print(axis[1][1:-1])
                        
                        

# get aggregation
for i in tree.findall('worksheets'):
    for j in i.findall('worksheet'):
        for a in j.findall('table'):
            for b in a.findall('view'):
                for d in b.findall('datasource-dependencies'):
                    for e in d.findall('column'):
                        name = e.get('aggregation')
                        column = e.get('name')
                        print(name, column)

for i in tree.findall('worksheets'):
    for j in i.findall('worksheet'):
        for a in j.findall('table'):
            for b in a.findall('view'):
                for d in b.findall('datasource-dependencies'):
                    for e in d.findall('column-instance'):
                        name = e.get('derivation')
                        print(name)

for i in tree.findall('worksheets'):
    for j in i.findall('worksheet'):
        for a in j.findall('table'):
            for b in a.findall('view'):
                for d in b.findall('datasource-dependencies'):
                    for e in d.findall('column-instance'):
                        name = e.get('aggregation-param')
                        print(name)

# get calculated fields
    for j in tree.findall('datasources'):
        for a in j.findall('datasource'):
            for b in a.findall('connection'):
                for c in b.findall('calculations'):
                    for d in c[0].iter('calculation'):
                        name = d.get('formula')
                        print("hello")
                        print(name)

for i in tree.findall('worksheets'):
    for j in i.findall('worksheet'):
        for a in j.findall('table'):
            for b in a.findall('view'):
                for d in b.findall('filter'):
                   name = d.get('class')
                   name2 = d.get('column')
                   name3 = d.get('included-values')
                   print(name)
                   a=[]
                   a=name2.split(".[")
                   print(name2.split(".["))
                   b=[]
                   b=a[1].split(":")
                   c=""
                   c=b[0]
                   d=b[1]
                   print(a[1])
                   print(name3)
                   print(b)
                   print(c)
                   print(d)
                   

