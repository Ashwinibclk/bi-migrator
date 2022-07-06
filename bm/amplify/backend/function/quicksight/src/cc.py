import csv
import pandas as pd



file = open("annual-enterprise-survey-2020-financial-year-provisional-csv.csv")
df = pd.read_csv("annual-enterprise-survey-2020-financial-year-provisional-csv.csv", nrows=2)
csvreader = csv.reader(file)
Name = next(csvreader)
print(Name)
inpcol = []
for i in Name:
    print(df[i].dtype)
    if(df[i].dtype=="object") :
            inpcol.append(
            {
                'Name': i,
                'Type': 'STRING'

            })
    if(df[i].dtype=="int64"):
            inpcol.append(
            {
                'Name': i,
                'Type': 'INTEGER'

            })
print(inpcol)