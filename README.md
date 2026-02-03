# TaxNova

A modern tax management platform built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for beautiful, responsive design
- **Axios** with interceptors for API calls
- **Clean Architecture** - Well-structured, maintainable codebase
- **Authentication** - Token-based auth with automatic refresh
- **Error Handling** - Centralized error management

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create environment file:

```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your API configuration:

```env
NEXT_PUBLIC_API_BASE_URL=https://your-api-url.com
```

## 🏃 Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
taxnova/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   └── TaxRecordsExample.tsx
├── lib/
│   └── api/              # API layer (Clean Architecture)
│       ├── config/       # Axios configuration
│       ├── services/     # API services
│       ├── types/        # TypeScript types
│       └── index.ts      # Central exports
├── public/               # Static files
└── API_DOCUMENTATION.md  # Detailed API docs
```

## 🏗️ API Architecture

This project follows **Clean Code Architecture** principles:

### Key Components:

1. **Axios Configuration** (`lib/api/config/axios.config.ts`)
   - Request/Response interceptors
   - Automatic token injection
   - Token refresh on 401 errors
   - Centralized error handling

2. **Base Service** (`lib/api/services/base.service.ts`)
   - Abstract class with common HTTP methods
   - GET, POST, PUT, PATCH, DELETE
   - Error transformation

3. **Domain Services** (e.g., `lib/api/services/tax.service.ts`)
   - Extend BaseApiService
   - Domain-specific API operations
   - Type-safe methods

### Usage Example:

```typescript
import { taxService } from '@/lib/api';

// Fetch tax records
const records = await taxService.getTaxRecords(1, 10);

// Create a record
const newRecord = await taxService.createTaxRecord({
  taxpayerId: '12345',
  taxYear: 2024,
  amount: 5000,
});
```

For detailed API documentation, see [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)

## 🔐 Authentication

The API client automatically handles authentication:

```typescript
// Set tokens (usually after login)
localStorage.setItem('authToken', 'your-access-token');
localStorage.setItem('refreshToken', 'your-refresh-token');

// Tokens are automatically:
// - Injected into request headers
// - Refreshed on 401 errors
// - Cleared on auth failure
```

## 🧪 Building for Production

```bash
npm run build
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding a New Service

1. Create a new service file in `lib/api/services/`
2. Extend `BaseApiService`
3. Define domain types
4. Implement methods
5. Export from `lib/api/index.ts`

Example:

```typescript
// lib/api/services/user.service.ts
import { BaseApiService } from './base.service';

export class UserService extends BaseApiService {
  constructor() {
    super('/api/users');
  }

  async getUsers() {
    return this.get<User[]>('');
  }
}

export const userService = new UserService();
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Axios Documentation](https://axios-http.com/docs/intro)

## 🚀 Deploy

Deploy easily on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
