# Shodan

Cyber Security 101 path — Search Skills room — Shodan 章節筆記

## 簡介

- Shodan 是「搜尋連上網路的裝置」的搜尋引擎
- 一般搜尋引擎（Google）爬的是網頁內容；Shodan 爬的是裝置回應的 banner
- Banner = 裝置服務回傳的 metadata，包含伺服器軟體、版本、作業系統等資訊
- 常見目標：web servers、routers、webcams、IoT 裝置、ICS/SCADA 工控系統

## 核心概念：Banner

- Shodan 透過掃描各 port，記錄服務的回應（banner）
- Banner 內容範例：`Apache httpd 2.4.49`、`Server: nginx/1.18.0`
- 用這些資訊可以找出特定版本、特定設定的裝置

## 常用搜尋 filter

| Filter | 說明 | 範例 |
|---|---|---|
| `hostname:` | 依主機名稱搜尋 | `hostname:example.com` |
| `org:` | 依組織搜尋 | `org:"Amazon"` |
| `country:` / `country_code:` | 依國家搜尋 | `country:TW` |
| `city:` | 依城市搜尋 | `city:"Taipei"` |
| `port:` | 依 port 搜尋 | `port:22` |
| `net:` | 依 CIDR 網段搜尋 | `net:192.168.1.0/24` |
| `product:` | 依軟體產品搜尋 | `product:nginx` |
| `os:` | 依作業系統搜尋 | `os:"Windows Server 2012"` |
| `version:` | 依版本搜尋 | `product:Apache version:2.4.49` |
| `after:` / `before:` | 依時間過濾 | `after:01/01/2024` |

## 組合範例

- 找台灣的 Apache 伺服器：`country:TW product:Apache`
- 找特定網段的 SSH：`net:10.0.0.0/8 port:22`
- 找預設密碼可能沒改的網路攝影機：`webcam` 或 `product:"webcam"`

## 實務重點

- 註冊帳號才能用完整搜尋功能；免費帳號 result 數量有限制
- 搜尋結果頁可以看到：IP、port、organization、ISP、地理位置、banner 詳細內容
- 用途：attack surface reconnaissance（了解目標暴露在網路上的服務）
- 防守方用途：找出自己組織意外暴露的設備

## 參考

- Room: https://tryhackme.com/room/shodan
- https://www.shodan.io/
