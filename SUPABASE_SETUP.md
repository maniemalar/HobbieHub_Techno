# Supabase Integration Setup Guide

Follow these steps to connect your hobby studio application to your own Supabase project.

## 1. Create a Supabase Project
1. Go to [supabase.com](https://supabase.com/) and create a new project.
2. Once created, go to **Project Settings** > **API**.

## 2. Configure Environment Variables
You need to provide your Supabase URL and Anon Key. In AI Studio, add these to your **Secrets** (accessible via the Settings menu):

- `VITE_SUPABASE_URL`: Your Project URL (under Project API settings)
- `VITE_SUPABASE_ANON_KEY`: Your project's `anon` `public` key.

## 3. Enable Authentication Providers
To allow all login features to work:
1. In your Supabase Dashboard, go to **Authentication** > **Providers**.
2. **Email**: Ensure it is enabled. Note: By default, users must confirm their email before logging in. You can disable "Confirm email" in the settings for testing.
3. **Anonymous**: Enable this to support the Guest login feature.
4. Save changes.

## 4. Database Setup (Optional)
This app currently uses local mock data for the UI. To sync it with Supabase:
- Create tables (e.g., `students`, `classes`, `payments`) in the Supabase **SQL Editor**.
- Update the views in `src/views/` to fetch data using the `supabase` client from `src/lib/supabase.ts`.

Example fetch:
```ts
const { data, error } = await supabase.from('students').select('*');
```

## Summary of Files Added
- `src/lib/supabase.ts`: Supabase client initialization.
- `src/context/AuthContext.tsx`: Authentication state management (Provider/Hook).
- `src/views/LoginView.tsx`: Initial entry screen for Guest login.
- `.env.example`: Updated with Supabase placeholders.
