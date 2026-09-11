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

## 參考

- https://tryhackme.com/
- https://tryhackme.com/hacktivities
