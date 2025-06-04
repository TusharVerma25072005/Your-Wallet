# YourWallet - Digital Wallet Platform

A modern digital wallet platform built with **Next.js 14**, **Turborepo**, and **TypeScript**. This monorepo contains applications for users, merchants, and bank webhook processing with real-time transaction updates.

## 🏗️ Architecture Overview

This project uses a **turborepo** structure with the following applications and shared packages:


## ✨ Features

### 👤 User App (`apps/user-app`)
- **💰 Add Money**: Add funds from multiple bank accounts (Axis, HDFC, SBI, ICICI, etc.)
- **💸 Send Money**: Transfer funds to merchants with real-time updates
- **📊 Balance Management**: View current balance with live updates
- **📋 Transaction History**: Detailed transaction records with pagination
- **🔐 Authentication**: Secure login/signup with NextAuth.js
- **⚡ Real-time Updates**: Server-Sent Events for live balance and transaction updates

### 🏪 Merchant App (`apps/merchant-app`)
- **📈 Dashboard**: Daily earnings analytics with interactive charts
- **💰 Balance Overview**: Current balance and earnings statistics
- **📊 Transaction Management**: View transactions with customer details
- **💳 Withdrawal System**: Withdraw earnings to connected bank accounts
- **👥 Customer Search**: Search and filter customer transactions
- **🔄 Live Updates**: Real-time transaction notifications via SSE

### 🔗 Bank Webhook (`apps/bank-webhook`)
- **⚡ Transaction Processing**: Handle bank transaction confirmations
- **📊 Database Integration**: Direct Prisma integration for transaction updates

## 🛠️ Technology Stack

### Frontend & Framework
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for responsive styling
- **React 18** with Server Components

### State Management & Real-time
- **Jotai** for atomic state management
- **Server-Sent Events (SSE)** for real-time updates
- **NextAuth.js** for authentication

### Backend & Database
- **Prisma ORM** with PostgreSQL
- **Express.js** for webhook server
- **JWT** for secure token management

### Development Tools
- **Turborepo** for monorepo management
- **ESLint** for code quality
- **TypeScript** for development experience

## 📋 Prerequisites

Before getting started, ensure you have:

- **Node.js** 18+ installed
- **PostgreSQL** database running
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/yourusername/yourwallet.git
cd yourwallet
npm install
