# YourWallet - Digital Wallet Platform

A modern full-stack digital wallet platform built with **Next.js 15**, **Turborepo**, and **TypeScript**. This monorepo enables seamless financial transactions between users and merchants with real-time updates and comprehensive analytics.

## 🏗️ Architecture Overview

This project uses a **Turborepo** monorepo structure optimized for scalability and developer experience:

```
YourWallet/
├── apps/
│   ├── user-app/          # Customer-facing wallet application
│   ├── merchant-app/      # Business dashboard and payment processing
│   └── bank-webhook/      # Bank transaction webhook handler
├── packages/
│   ├── db/               # Prisma database schema and client
│   ├── store/            # Jotai atoms for state management
│   ├── ui/               # Shared React components library
│   ├── tailwind-config/  # Shared Tailwind CSS configuration
│   ├── typescript-config/# Shared TypeScript configurations
│   └── eslint-config/    # Shared ESLint rules and configurations
```


## ✨ Features

### 👤 User App (`apps/user-app`)
- **💰 Add Money**: Seamlessly add funds from multiple bank providers (Axis, HDFC, SBI, ICICI)
- **💸 Send Money**: Transfer funds to merchants with instant notifications
- **📊 Balance Management**: Real-time balance tracking with transaction history
- **📋 Transaction History**: Detailed transaction records with search and filtering
- **🔐 Authentication**: Secure JWT-based authentication with NextAuth.js
- **⚡ Real-time Updates**: Server-Sent Events for live balance and transaction updates
- **📱 Responsive Design**: Mobile-first design with Tailwind CSS

### 🏪 Merchant App (`apps/merchant-app`)
- **📈 Analytics Dashboard**: Interactive charts showing daily earnings and transaction trends
- **💰 Balance Overview**: Real-time balance tracking with withdrawal capabilities
- **📊 Transaction Management**: Comprehensive transaction history with customer details
- **💳 Withdrawal System**: Secure fund withdrawal to connected bank accounts
- **👥 Customer Insights**: Search and analyze customer transaction patterns
- **🔄 Live Notifications**: Real-time transaction alerts via Server-Sent Events
- **📋 Multi-step Workflows**: Guided withdrawal process with status tracking

### 🔗 Bank Webhook (`apps/bank-webhook`)
- **⚡ Transaction Processing**: Automated bank transaction confirmation handling
- **📊 Database Integration**: Direct Prisma integration for seamless data updates
- **🔒 Security**: Webhook signature verification and secure endpoints

## 🛠️ Technology Stack

### Frontend & Framework
- **Next.js 15** with App Router and Turbopack
- **React 19** with Server Components and Concurrent Features
- **TypeScript 5.8** for end-to-end type safety
- **Tailwind CSS 3.4** for utility-first styling

### State Management & Real-time
- **Jotai 2.12** for atomic state management
- **Server-Sent Events (SSE)** for real-time bidirectional communication
- **NextAuth.js 4.24** for authentication and session management

### Backend & Database
- **Prisma ORM** with PostgreSQL for type-safe database operations
- **JWT** for secure token-based authentication
- **RESTful APIs** with Next.js API routes

### Development Tools
- **Turborepo 2.5** for efficient monorepo management
- **ESLint 9** with custom configurations for code quality
- **Prettier** for consistent code formatting
- **TypeScript** for enhanced developer experience

## 📋 Prerequisites

Before getting started, ensure you have:

- **Node.js** 18+ installed
- **PostgreSQL** database running
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Quick Start

### 1. Clone & Install
git clone https://github.com/yourusername/yourwallet.git
cd YourWallet
npm install

### 2. Environment Setup
Create environment files for each application:

**Root `.env`:**
DATABASE_URL="postgresql://username:password@localhost:5432/yourwallet"

**User App `.env.local`:**

NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=your-nextauth-secret
JWT_SECRET=your-jwt-secret
DATABASE_URL="postgresql://username:password@localhost:5432/yourwallet"

**Merchant App `.env.local`:**
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret
JWT_SECRET=your-jwt-secret
DATABASE_URL="postgresql://username:password@localhost:5432/yourwallet"


### 4. Start Development Servers
# Start all applications in development mode
npm run dev

# Or start individual applications:
cd apps/user-app && npm run dev      # User app on :3001
cd apps/merchant-app && npm run dev  # Merchant app on :3000
cd apps/bank-webhook && npm run dev  # Webhook server on :3002

## 📱 Application URLs

- **User App**: [http://localhost:3001](http://localhost:3001)
- **Merchant App**: [http://localhost:3000](http://localhost:3000)
- **Bank Webhook**: [http://localhost:3002](http://localhost:3002)

## 🗂️ Project Structure

### Applications

#### User App (`apps/user-app`)
```
user-app/
├── app/
│   ├── (main)/           # Protected routes
│   ├── auth/             # Authentication pages
│   ├── api/              # API routes including SSE
│   ├── components/       # React components
│   └── globals.css       # Global styles
├── lib/                  # Utility functions
│   ├── addMoney.ts       # Add money functionality
│   ├── transfer.ts       # Money transfer logic
│   ├── authOptions.ts    # NextAuth configuration
│   └── signUp.ts         # User registration
└── next.config.js        # Next.js configuration
```

#### Merchant App (`apps/merchant-app`)
```
merchant-app/
├── app/
│   ├── (main)/           # Protected merchant routes
│   │   ├── account/      # Account management
│   │   ├── transactions/ # Transaction history
│   │   └── withdraw/     # Withdrawal interface
│   ├── auth/             # Authentication pages
│   ├── api/              # API routes including SSE
│   ├── components/       # React components
│   │   ├── balanceCard.tsx
│   │   ├── dashboardChart.tsx
│   │   ├── withdrawSteps.tsx
│   │   └── sseClient.tsx
│   └── globals.css       # Global styles
├── lib/                  # Business logic utilities
│   ├── withdraw.ts       # Withdrawal functionality
│   ├── authOptions.ts    # NextAuth configuration
│   └── authentication.ts# Auth helpers
└── next.config.ts        # Next.js configuration
```

#### Bank Webhook (`apps/bank-webhook`)
```
bank-webhook/
├── src/
│   └── server.ts         # Express server for webhooks
├── package.json
└── tsconfig.json
```

### Shared Packages

#### Database (`packages/db`)
- **Prisma Schema**: User, Merchant, Transaction models with relationships
- **Database Client**: Configured Prisma client for all apps
- **Migrations**: Database schema versioning and evolution

#### Store (`packages/store`)
- **Jotai Atoms**: Global state management with atomic updates
- **Balance Atom**: Real-time balance state across applications
- **Transaction Atoms**: Live transaction updates and history

#### UI (`packages/ui`)
- **Components**: Reusable React components
- **Buttons**: Multiple styled button variants
- **Cards**: Transaction and balance display components
- **Layout**: Header, navigation, and layout components

#### Tailwind Config (`packages/tailwind-config`)
- **Shared Configuration**: Consistent styling across all apps
- **Global Styles**: Base styles and utility classes
- **PostCSS Configuration**: Tailwind CSS v3/v4 compatibility

## 🔧 Available Scripts

### Root Level
npm run dev          # Start all apps in development
npm run build        # Build all apps for production

### Individual Apps
# User App
cd apps/user-app
npm run dev          # Development server on :3001
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint check

# Merchant App
cd apps/merchant-app
npm run dev          # Development server on :3000
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint check

## 🎯 Key Features Deep Dive

### Real-time Updates with Server-Sent Events
Both applications feature custom SSE implementations:

- **Live Balance Updates**: Instant balance changes across all sessions
- **Transaction Notifications**: Real-time transaction alerts with user/merchant details
- **Cross-app Communication**: User transactions notify merchant instantly
- **Connection Management**: Automatic reconnection with exponential backoff
- **JWT Authentication**: Secure SSE connections with token verification

### Authentication System
Secure authentication using NextAuth.js:

- **JWT Tokens**: Stateless authentication with custom claims and access tokens
- **Protected Routes**: Middleware-based route protection for sensitive areas
- **Session Management**: Persistent sessions with refresh tokens
- **Role-based Access**: Separate user and merchant authentication flows


### Database Architecture
Efficient relational database design with Prisma:

- **User Management**: Secure user profiles with encrypted passwords and balance tracking
- **Merchant System**: Business account management with balance and transaction history
- **Transaction Flow**: Comprehensive transaction records with status tracking and relationships
- **Referential Integrity**: Foreign key relationships ensuring data consistency
- **Type Safety**: Full TypeScript integration with Prisma generated types

### Withdrawal System
Multi-step withdrawal process for merchants:

- **Step-by-step UI**: Guided withdrawal process with progress indicators
- **Bank Integration**: Support for multiple bank account types
- **Security Checks**: Verification steps before fund transfer
- **Status Tracking**: Real-time withdrawal status updates
- **Transaction History**: Complete audit trail of all withdrawals




### Environment Variables for Production
Ensure the following environment variables are set in your deployment platform:

**Required for all apps:**
- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_SECRET`: Secure random string (minimum 32 characters)
- `JWT_SECRET`: Secure random string for JWT signing

**App-specific:**
- `NEXTAUTH_URL`: Production URL for each application
- `WEBHOOK_SECRET`: Secret for bank webhook verification (bank-webhook only)



## 🔒 Security Considerations

- **JWT Security**: Secure token generation with configurable expiration
- **CORS Configuration**: Proper CORS setup for cross-origin requests
- **Environment Variables**: Sensitive data stored in environment variables
- **Input Validation**: Server-side validation for all user inputs
- **SQL Injection Prevention**: Prisma ORM provides built-in protection
- **Authentication Middleware**: Route-level authentication checks
## 📊 Performance Optimizations

- **Next.js App Router**: Leveraging React Server Components for optimal performance
- **Turbopack**: Fast development builds with Turbopack
- **Code Splitting**: Automatic code splitting for optimal bundle sizes
- **Image Optimization**: Next.js Image component for optimized images
- **SSE Efficiency**: Optimized Server-Sent Events with connection pooling
- **Database Indexing**: Proper database indexes for query optimization
- **Caching**: Strategic caching for frequently accessed data

## 🚀 Future Roadmap

- [ ] **Mobile Applications**: React Native apps for iOS and Android
- [ ] **Advanced Analytics**: Machine learning-powered insights
- [ ] **Multi-currency Support**: International payment processing
- [ ] **API Gateway**: Public API for third-party integrations
- [ ] **Blockchain Integration**: Cryptocurrency transaction support
- [ ] **Advanced Security**: Two-factor authentication and biometric verification
- [ ] **Notification System**: Push notifications and email alerts
- [ ] **Admin Dashboard**: Super admin panel for system management


