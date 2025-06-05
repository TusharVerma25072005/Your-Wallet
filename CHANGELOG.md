# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Complete monorepo structure with Turborepo
- User application for wallet functionality
- Merchant application for business operations
- Bank webhook server for transaction processing
- Real-time updates using Server-Sent Events
- Comprehensive README.md documentation
- Contributing guidelines and license

## [1.0.0] - 2025-06-04

### Added
- **User App Features**:
  - User authentication with NextAuth.js
  - Add money functionality with multiple bank providers
  - Send money to merchants
  - Real-time balance tracking
  - Transaction history with pagination
  - Responsive design with Tailwind CSS

- **Merchant App Features**:
  - Merchant authentication and dashboard
  - Analytics with interactive charts
  - Transaction management and customer insights
  - Multi-step withdrawal system
  - Real-time transaction notifications
  - Balance management with withdrawal capabilities

- **Bank Webhook**:
  - Express.js server for bank transaction confirmations
  - Direct Prisma database integration
  - Secure webhook signature verification

- **Shared Packages**:
  - `@repo/db`: Prisma database schema and client
  - `@repo/store`: Jotai atoms for state management
  - `@repo/ui`: Reusable React components
  - `@repo/tailwind-config`: Shared Tailwind configuration
  - `@repo/typescript-config`: TypeScript configurations
  - `@repo/eslint-config`: ESLint rules and configurations

- **Technology Stack**:
  - Next.js 15 with App Router and Turbopack
  - React 19 with Server Components
  - TypeScript 5.8 for type safety
  - Tailwind CSS 3.4 for styling
  - Prisma ORM with PostgreSQL
  - Jotai for state management
  - NextAuth.js for authentication
  - JWT for secure token management

- **Development Tools**:
  - Turborepo for monorepo management
  - ESLint for code quality
  - Prettier for code formatting
  - TypeScript for development experience

### Fixed
- **Tailwind CSS Issues**:
  - Updated PostCSS config for Tailwind v4 compatibility
  - Fixed CSS import syntax in globals.css
  - Enhanced tailwind configs with proper content paths

- **SSE Implementation**:
  - Fixed import paths from `@repo/sse/sse` to `@repo/sse`
  - Enhanced error handling and connection management
  - Fixed JWT token verification in SSE routes
  - Added proper database joins for user/merchant information

- **Configuration Issues**:
  - Resolved "Exit prior to config file resolving" error
  - Fixed environment variable access patterns
  - Removed unsafe `!` operators in configuration files

- **Hydration Errors**:
  - Added proper mounting checks in SSE client components
  - Implemented client-side only rendering for browser APIs
  - Enhanced error handling and debugging

### Changed
- Migrated from Recoil to Jotai for state management
- Updated to Next.js 15 with latest features
- Enhanced UI components with modern design patterns
- Improved authentication flow with JWT tokens
- Optimized database queries with proper indexing

### Security
- Implemented secure JWT token management
- Added bcrypt password hashing
- Configured CORS for secure cross-origin requests
- Added input validation for all user inputs
- Implemented SQL injection prevention with Prisma

## [0.1.0] - 2025-05-01

### Added
- Initial project setup with basic structure
- Basic user and merchant models
- Initial authentication implementation
- Basic transaction functionality

---

## Release Notes

### Version 1.0.0 - Major Release
This is the first major release of YourWallet, featuring a complete digital wallet platform with:

- **Full-stack Application**: Complete user and merchant applications
- **Real-time Features**: Server-Sent Events for live updates
- **Modern Tech Stack**: Latest versions of Next.js, React, and TypeScript
- **Production Ready**: Comprehensive error handling, security measures, and documentation
- **Developer Experience**: Full TypeScript support, ESLint configuration, and development tools

### Breaking Changes
None - This is the initial major release.

### Migration Guide
As this is the first major release, no migration is required.

### Known Issues
- None at this time

### Upcoming Features
See the Future Roadmap section in README.md for planned features.

---

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

## Support
For support and questions, please see the Support section in [README.md](README.md).
