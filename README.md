# Expense Tracker Web Application

A full-stack **Expense Tracker** web application that helps users manage their income, expenses, and financial activities efficiently. The system supports authentication, data visualization, file export, email notifications, and more.

## 🚀 Live Demo: https://elegant-fenglisu-191de3.netlify.app/

Account for testing: 
- Email Address: admin@gmail
- Password: admin123456

---

## ✨ Highlights

- 🔐 JWT Authentication (Spring Security)
- 📊 Real-time Financial Dashboard (Charts)
- 📁 Export Transactions (Excel / PDF)
- 📧 Email Notification & Daily Reminder
- ☁️ Cloud Image Upload (Cloudinary)
- 🔎 Advanced Filtering & Search

---

## 🧠 What I Built (Key Contributions)

- Designed **RESTful APIs** with Spring Boot (Controller → Service → Repository)
- Implemented **JWT Authentication & Authorization**
- Built reusable **Axios Interceptor** for token handling & error control
- Developed **modular React architecture** (components, hooks, context)
- Integrated **data visualization (Recharts)** for financial analytics
- Handled **file export (Excel, PDF) & email service**
- Deployed full system using **Netlify + Render**
---

## 🛠️ Tech Stack

### Frontend
- Tailwind CSS
- React (Vite)
- Axios
- React Router DOM
- Recharts
- React Hot Toast
- Emoji Picker

### Backend
- Spring MVC
- Spring Data JPA
- Spring Boot
- Spring Security (JWT)
- Java Mail Sender

### Database
- MySQL

### Deployment
- Netlify (Frontend)
- Render (Backend)
- Cloudinary (Images)

---

## 📊 System Architecture

Frontend (React)
↓ Axios API Calls
Backend (Spring Boot REST API)
↓
Service Layer (Business Logic)
↓
Repository (JPA)
↓
MySQL Database

---

## 🔄 Core Features

### 🔐 Authentication
- Register / Login
- Email verification
- JWT-based authorization

### 💸 Transactions
- CRUD Income & Expense
- Category management

### 📊 Dashboard
- Income vs Expense charts
- Recent transactions

### 🔍 Filter
- Filter by date, type
- Search transactions

### 📤 Export & Email
- Export Excel / PDF
- Send report via email

---

## 📁 Project Structure

### Frontend
src/
├── assets/
├── components/
├── context/
├── pages/
├── util/

### Backend

controller/
service/
repository/
entity/
dto/
security/
config/

---

## 🔄 API Overview
| Method | Endpoint   | Description    |
| ------ | ---------- | -------------- |
| POST   | /register  | Register user  |
| POST   | /login     | Login user     |
| GET    | /category  | Get categories |
| POST   | /income    | Add income     |
| POST   | /expense   | Add expense    |
| GET    | /dashboard | Dashboard data |
| POST   | /filter    | Filter data    |

---

## 📸 Screenshots

@dvanvu02
