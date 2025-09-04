# gallery-app

## Server Specification
Cloud Provider: AWS EC2 / Render / DigitalOcean \
Instance: t3.micro (1 vCPU, 1GB RAM) (พอสำหรับ demo) \
OS: Ubuntu 22.04 LTS \
Storage: 10GB SSD \
Network: เปิดแค่พอร์ต 80 (HTTP) และ 443 (HTTPS) 

## software stack
Reverse Proxy:	Nginx	รับ traffic, serve frontend static files, forward API \
Backend: API	Node.js (Express)	ให้ REST API (ดึงรูป + hashtags) \
Frontend:	React (Vite build)	SPA ที่รันใน browser \
Database: (ถ้ามี)	SQLite / MongoDB (Optional)	เก็บข้อมูลรูป + hashtags \
Container:	Docker	บรรจุ frontend + backend ทำให้ deploy ง่าย 

## Deployment flow
Develop Locally 
- Push code ไป GitHub

CI/CD Pipeline (GitHub Actions) 
- Build React → Generate static files 
- Build Docker image → Push ไป Docker Hub
  
Production Server 
- Pull Docker image → run ด้วย docker-compose 
- Nginx serve frontend + reverse proxy ไป backend 

## Architecture diagram
<img src="https://sdmntpraustraliaeast.oaiusercontent.com/files/00000000-66e0-61fa-aa38-73c669b5a1a5/raw?se=2025-09-04T09%3A32%3A22Z&sp=r&sv=2024-08-04&sr=b&scid=e4a2373c-033d-5ab9-93a6-6c9c7048108e&skoid=b7fc319f-b93c-4fac-ba5f-14fdc3f9209f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-03T23%3A55%3A22Z&ske=2025-09-04T23%3A55%3A22Z&sks=b&skv=2024-08-04&sig=hqP1qP9VhjVwnsVq5armLmESfw77/hVJUz9VPCKdm7w%3D" width="400" />
