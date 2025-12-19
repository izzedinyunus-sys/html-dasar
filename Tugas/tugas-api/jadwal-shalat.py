import requests

target_url = "https://api.aladhan.com/v1/timingsByCity/09-12-2025?city=Jakarta&country=Indonesia&method=20"
print(f"Target url: {target_url}")
# HTTP GET (tarik data)
response = requests.get(target_url)   
# Konversi ke JSON
data_json = response.json()    
# print("response data:", data_json)
jadwal = data_json['data']['timings']
shubuh = jadwal['Fajr']
dzuhur = jadwal['Dhuhr']
ashar = jadwal['Asr']
print(f"- Shubuh: {shubuh}")
print(f"- Dzuhur: {dzuhur}")
print(f"- Ashar: {ashar}")

