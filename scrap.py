import pandas as pd
import requests
from bs4 import BeautifulSoup
import json


url = "http://dom.garbiapp.com/kpu/wilayah/?op=wilayah&q=26007&lev=4&parent=25989"
res = requests.get(url)
soup = BeautifulSoup(res.content,'lxml')
table = soup.find_all('table')[0] 
df = pd.read_html(str(table))

print(df[0].to_json(orient='records'))
