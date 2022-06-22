from collections import namedtuple
import xml.etree.ElementTree as ET

# get worksheet name
tree = ET.parse("New_workbook.twb")
XML_worksheets = tree.findall('worksheets')
print(XML_worksheets)
XML_val = XML_worksheets[0].iter('worksheet')
for item in XML_val:
    name = item.get('name')
    print(name)

# get datasource name

XML_datasources = tree.findall('datasources')
XML_val = XML_datasources[0].iter('datasource')
for item in XML_val:
    name = item.get('name')
    print(name)

# get x and y axis
for i in tree.findall('worksheets'):
    for j in i.findall('worksheet'):
        for a in j.findall('table'):
            for b in a.findall('view'):
                for d in b.findall('datasource-dependencies'):
                    for e in d.findall('column'):
                        name = e.get('name')
                        print(name)
