# VirusTotal

Cyber Security 101 path — Search Skills room — VirusTotal 章節筆記

## 簡介

- VirusTotal 是「分析檔案與 URL 是否含惡意內容」的線上服務（Google 子公司）
- 上傳檔案 / 貼上 URL / hash，會用數十套防毒引擎（70+）掃描
- 結果格式：`45/70` 表示 70 個引擎中 45 個判定為惡意

## 可以查詢的三種對象

1. **檔案**：上傳檔案或查 hash（MD5 / SHA-1 / SHA-256）
2. **URL**：檢查網址是否為 phishing / malware 分發站
3. **IP / Domain**：查看解析歷史、關聯的惡意活動、通訊的檔案

## 核心概念

- **Hash 查詢**：優先用 hash 搜尋，不用上傳檔案本身（檔案可能敏感，上傳會共享給所有人）
- **Detection ratio**：不是 0/70 才安全，少數引擎誤報常見；廣泛被偵測（如 40+/70）幾乎確定惡意
- **Community**：使用者留言、投票補充情報（引擎沒抓到但社群有發現）
- **Relations / Behavior**：付費版可看檔案執行行為、網路連線、關聯樣本

## 實務重點

- **不要亂上傳機密檔案**：上傳的檔案會進 VT 資料庫，任何人可查
- 先查 hash 確認是否已被分析過，再決定要不要上傳
- 常見情境：
  - 收到可疑附件 → 查 hash / 上傳分析
  - 可疑連結 → 掃 URL
  - incident response → 查 IP/domain 信譽、找關聯樣本

## 參考

- Room: https://tryhackme.com/room/virustotal
- https://www.virustotal.com/
