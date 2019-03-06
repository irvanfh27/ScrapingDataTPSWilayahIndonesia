from bs4 import BeautifulSoup
import requests
import pandas as pd
import json
import csv

calls_df, = pd.read_html("http://dom.garbiapp.com/kpu/wilayah/?op=wilayah&q=26013&lev=4&parent=25989")

calls_df.to_csv("calls.csv", index=False)
