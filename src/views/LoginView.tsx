import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, LogIn, ShieldAlert, Mail, Lock, UserPlus, Fingerprint, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { isSupabaseConfigured } from '../lib/supabase';

type AuthMode = 'login' | 'register' | 'guest';

export default function LoginView() {
  const { signInAsGuest, signIn, signUp } = useAuth();
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSupabaseConfigured) {
      setError('Supabase is not configured. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your env/secrets.');
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      if (mode === 'login') {
        await signIn(email, password);
      } else if (mode === 'register') {
        await signUp(email, password, name);
        setError('Verification email sent! Please check your inbox.');
      }
    } catch (err: any) {
      setError(err.message || 'Operation failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    if (!isSupabaseConfigured) {
      setError('Supabase is not configured. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your env/secrets.');
      return;
    }
    try {
      setIsLoading(true);
      setError(null);
      await signInAsGuest();
    } catch (err: any) {
      setError(err.message || 'Failed to initialize session');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50/50">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white p-12 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100"
      >
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="w-12 h-12 bg-gray-950 rounded-xl flex items-center justify-center mb-6">
            <Fingerprint className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900 mb-1">
            {mode === 'login' && 'Sign in to Studio'}
            {mode === 'register' && 'Create an account'}
            {mode === 'guest' && 'Guest access'}
          </h1>
          <p className="text-sm text-gray-500">
            {mode === 'login' && 'Enter your credentials to access your dashboard.'}
            {mode === 'register' && 'Create an account to start managing your studio.'}
            {mode === 'guest' && 'Entering preview mode with limited access...'}
          </p>
        </div>

        {isSupabaseConfigured ? (
          <div className="space-y-6">
            {error && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`p-4 border rounded-xl flex items-center gap-3 ${
                  error.includes('Verification') 
                  ? 'bg-green-50 border-green-100 text-green-700' 
                  : 'bg-red-50 border-red-100 text-red-700'
                }`}
              >
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <p className="text-xs font-medium leading-relaxed">{error}</p>
              </motion.div>
            )}
            {mode !== 'guest' ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === 'register' && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-700 ml-1">Full Name</label>
                    <input 
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="minimal-input"
                      placeholder="John Doe"
                    />
                  </div>
                )}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700 ml-1">Email address</label>
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="minimal-input"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-700 ml-1">Password</label>
                  <input 
                    type="password"
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="minimal-input"
                    placeholder="••••••••"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full minimal-button py-3 mt-2"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
                  ) : (
                    mode === 'login' ? 'Sign in' : 'Create account'
                  )}
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-center">
                  <p className="text-sm text-gray-500 mb-6 font-light">
                    Temporary session initiated. Data will be persisted for 24 hours.
                  </p>
                  <button 
                    onClick={handleGuestLogin}
                    disabled={isLoading}
                    className="w-full bg-gray-900 text-white rounded-lg py-3 text-sm font-medium hover:bg-gray-800 transition-all shadow-sm"
                  >
                     {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
                    ) : (
                      'Confirm Guest Access'
                    )}
                  </button>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-3 text-center mt-8">
              {mode !== 'login' && (
                <button 
                  onClick={() => { setMode('login'); setError(null); }}
                  className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Already have an account? Sign in
                </button>
              )}
              {mode !== 'register' && (
                <button 
                  onClick={() => { setMode('register'); setError(null); }}
                  className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Need an account? Sign up
                </button>
              )}
              {mode !== 'guest' && (
                <button 
                  onClick={() => { setMode('guest'); setError(null); }}
                  className="text-xs text-gray-400 font-medium hover:text-gray-900 transition-colors py-2"
                >
                  Continue as guest
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="p-6 bg-amber-50 border border-amber-100 rounded-xl flex flex-col gap-3">
              <div className="flex items-center gap-2 text-amber-700">
                <Settings className="w-5 h-5" />
                <span className="text-sm font-semibold">Configuration Required</span>
              </div>
              <p className="text-xs text-amber-700/80 leading-relaxed font-medium">
                Connectivity to Supabase is missing or invalid. Please ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are correctly set in your environment.
              </p>
              <div className="mt-2 text-[10px] font-mono bg-white/50 p-2 rounded border border-amber-200 text-amber-800">
                Check: Settings → Secrets & Env
              </div>
            </div>
            
            <p className="text-center text-xs text-gray-400 px-4">
              The application requires a backend connection to handle authentication and data persistence.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
