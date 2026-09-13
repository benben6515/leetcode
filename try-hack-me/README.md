# TryHackMe 學習筆記

[TryHackMe](https://tryhackme.com/) 是線上資安學習平台，透過互動式 Room 學習網路安全。筆記依官方 [Hacktivities Roadmap](https://tryhackme.com/hacktivities/) 分類。

## 平台架構

- **Room（房間）**：基本學習單位，教學內容 + 實作問答
- **Module / Section**：path 中依主題分組的 room 集合
- **Path（學習路徑）**：完整課程，如 Cyber Security 101、SOC Level 1
- **AttackBox**：瀏覽器內建攻擊機，不用自己架環境

## 官方 Roadmap 分類

```
Roadmap
├── Pre Security                        (easy)
├── Cyber Security 101                  (easy)
└── Career Tracks
    ├── Security Analyst（藍隊）
    │   ├── SOC Level 1                 (easy)
    │   ├── SOC Level 2                 (intermediate)
    │   ├── Advanced Endpoint Investigations (hard)
    │   ├── Defending Azure             (intermediate)
    │   └── Windows Incident Response & Forensics (hard)
    ├── Penetration Tester（紅隊）
    │   ├── Jr Penetration Tester       (intermediate)
    │   ├── Web Application Pentesting  (intermediate)
    │   ├── Web Application Red Teaming (hard)
    │   └── Red Teaming                 (hard)
    ├── Security Engineer
    │   ├── Security Engineer           (easy)
    │   ├── DevSecOps                   (intermediate)
    │   └── Defending AWS               (easy)
    └── AI
        └── AI Security                 (intermediate)
```

Path 之外的內容：Hacktivities 還有 **Walkthroughs**、**Networks**、**AI Upskilling** 等分頁。

## 目錄結構

```
try-hack-me/
├── README.md
└── <path-name>/
    └── <NN-module-name>/
        └── <room-name>/
            └── 章節筆記 *.md
```

## 進度

### Cyber Security 101（14 modules / 56 rooms / 45h 48m，[path outline](https://tryhackme.com/path/outline/cybersecurity101)）

| # | Module | Rooms | 狀態 |
|---|---|---|---|
| 1 | Start Your Cyber Security Journey | Offensive Security Intro / Defensive Security Intro / **Search Skills** ✅ | ⏳ |
| 2 | Linux Fundamentals | Linux Fundamentals Part 1 / 2 / 3 | |
| 3 | Windows And AD Fundamentals | Windows Fundamentals 1 / 2 / 3 / Active Directory Basics | |
| 4 | Command Line | Windows Command Line / Windows PowerShell / Linux Shells | |
| 5 | Networking | Networking Concepts / Networking Essentials / Networking Core Protocols / Networking Secure Protocols / Wireshark: The Basics / Tcpdump: The Basics / Nmap: The Basics | |
| 6 | Cryptography | Cryptography Basics / Public Key Cryptography Basics / Hashing Basics / John the Ripper: The Basics | |
| 7 | Exploitation Basics | Moniker Link (CVE-2024-21413) / Metasploit: Introduction / Metasploit: Exploitation / Metasploit: Meterpreter / Blue | |
| 8 | Web Hacking | Web Application Basics / JavaScript Essentials / SQL Fundamentals / Burp Suite: The Basics | |
| 9 | Offensive Security Tooling | Hydra / Gobuster: The Basics / Shells Overview / SQLMap: The Basics | |
| 10 | Defensive Security | Defensive Security Intro / SOC Fundamentals / Digital Forensics Fundamentals / Incident Response Fundamentals / Logs Fundamentals | |
| 11 | Security Solutions | Introduction to SIEM / Firewall Fundamentals / IDS Fundamentals / Vulnerability Scanner Overview | |
| 12 | Defensive Security Tooling | CyberChef: The Basics / CAPA: The Basics / REMnux: Getting Started / FlareVM: Arsenal of Tools | |
| 13 | Build Your Cyber Security Career | Security Principles / Careers in Cyber / Training Impact on Teams | |
| 14 | OWASP Top 10 (2025) | OWASP Top 10 2025: IAAA Failures / Application Design Flaws / Insecure Data Handling | |

### 已完成筆記

| Module | Room | 筆記 |
|---|---|---|
| 1. Start Your Cyber Security Journey | Search Skills | [search-skills/](cybersecurity-101/01-start-your-cyber-security-journey/search-skills/)（Shodan / VirusTotal / Vulnerability Databases，2026-09） |

## 免費一手資源

一手來源 = 工具原作者 / 官方組織發佈的文件與課程，非第三方轉教學。對應 Cyber Security 101 模組：

### Linux / Command Line（Module 2、4）

- [MIT The Missing Semester](https://missing.csail.mit.edu/) — shell、tooling、git（MIT 官方課程，免費）
- [The Linux Command Line](http://linuxcommand.org/tlcl.php) — William Shotts 親自提供全書免費 PDF
- [man7.org](https://man7.org/linux/man-pages/) — Linux man pages 上游
- [OverTheWire: Bandit](https://overthewire.org/wargames/bandit/) — 用 SSH wargame 練 command line（免費）

### Windows / AD（Module 3）

- [Microsoft Learn: Windows 官方文件](https://learn.microsoft.com/windows/) / [PowerShell](https://learn.microsoft.com/powershell/) / [Active Directory](https://learn.microsoft.com/windows-server/identity/ad-ds/active-directory-domain-services)

### Networking（Module 5）

- [Nmap Network Scanning Book](https://nmap.org/book/) — 作者 Fyodor 全書免費線上（nmap 一手來源）
- [Wireshark 官方文件](https://www.wireshark.org/docs/) + [SharkFest 講義](https://sharkfestus.wireshark.org/) 
- [tcpdump man page](https://www.tcpdump.org/manpages/tcpdump.1.html)

### Cryptography（Module 6）

- [CryptoHack](https://cryptohack.org/) — 免費 crypto challenges（Python 實作導向）
- [cryptopals](https://cryptopals.com/) — 經典 crypto 破解題組
- [John the Ripper 官方 wiki](https://www.openwall.com/john/doc/)

### Exploitation（Module 7）

- [Rapid7 Metasploit 官方文件](https://docs.rapid7.com/metasploit/)
- [MSRC 安全公告](https://msrc.microsoft.com/update-guide/) — Blue room 的 MS17-010 一手來源

### Web Hacking / OWASP（Module 8、14）⭐

- [PortSwigger Web Security Academy](https://portswigger.net/web-security) — **Burp Suite 原廠免費教材 + 線上 labs**，質量等同付費課程，Web 方向必推
- [OWASP Top 10:2025](https://owasp.org/Top10/2025/) 官方站
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/) — 官方故意漏洞練習站

### Offensive Tooling（Module 9）

- [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings) / [HackTricks](https://book.hacktricks.xyz/) / [GTFOBins](https://gtfobins.github.io/) — 社群公認 cheat sheet（權威參考源）
- [sqlmap](https://github.com/sqlmapproject/sqlmap/wiki) / [Gobuster](https://github.com/OJ/gobuster) / [THC-Hydra](https://github.com/vanhauser-thc/thc-hydra) 官方 GitHub

### Defensive（Module 10–12）

- [MITRE ATT&CK](https://attack.mitre.org/) — 攻擊戰術與技術官方知識庫
- [NIST SP 800-61 Incident Response](https://csrc.nist.gov/pubs/sp/800/61/r3/final) — IR 官方標準
- [Splunk 免費訓練](https://www.splunk.com/en_us/training/free-courses/splunk-certifications.html) — 原廠免費課程與認證（SIEM 模組）
- [CyberChef](https://github.com/gchq/CyberChef)（GCHQ 官方）— 直接用 [線上版](https://gchq.github.io/CyberChef/)
- [CAPA](https://github.com/mandiant/capa) / [FlareVM](https://github.com/mandiant/flare-vm)（Mandiant 官方 GitHub）
- [REMnux 官方文件](https://remnux.org/docs/) — 作者 Lenny Zeltser 維護

### 實戰平台（免費）

- [picoCTF](https://picoctf.org/)（CMU 官方，免費）
- [VulnHub](https://www.vulnhub.com/) — 免費漏洞 VM 下載離線打
- [Hack The Box](https://www.hackthebox.com/) — 免費機器（每週輪替）+ Academy 免費模組
- [CyberDefenders](https://cyberdefenders.org/) / [LetsDefend](https://letsdefend.io/) / [Blue Team Labs Online](https://blueteamlabs.online/) — 藍隊免費 labs

## 參考

- https://tryhackme.com/
- https://tryhackme.com/hacktivities
