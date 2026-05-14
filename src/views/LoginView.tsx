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
        await signUp(email, password);
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
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-[#020202]">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-indigo-500/5 blur-[180px] rounded-full animate-pulse delay-700"></div>
        <div className="absolute inset-0 tech-grid opacity-30"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg immersive-card p-12 rounded-3xl shadow-2xl relative z-10 border-t-2 border-primary bg-black/60 backdrop-blur-xl"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 bg-primary/10 border border-primary/30 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
            {mode === 'login' && <Fingerprint className="w-10 h-10 text-primary" />}
            {mode === 'register' && <UserPlus className="w-10 h-10 text-primary" />}
            {mode === 'guest' && <User className="w-10 h-10 text-primary" />}
          </div>
          <h1 className="text-4xl font-light text-white tracking-[0.4em] uppercase mb-3">
            {mode === 'login' && 'Nexus_Entry'}
            {mode === 'register' && 'User_Genesis'}
            {mode === 'guest' && 'Temp_Link'}
          </h1>
          <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.5em]">
            {mode === 'login' && 'AUTHENTICATION // LAYER_01'}
            {mode === 'register' && 'IDENTITY_ENLISTMENT'}
            {mode === 'guest' && 'RESTRICTED_ACCESS_PORT'}
          </p>
        </div>

        {!isSupabaseConfigured && (
          <div className="mb-8 p-5 bg-amber-500/10 border border-amber-500/30 rounded-xl flex flex-col gap-3">
            <div className="flex items-center gap-3 text-amber-500">
              <Settings className="w-5 h-5 animate-spin-slow" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Configuration Required</span>
            </div>
            <p className="text-[9px] text-amber-500/80 uppercase tracking-widest leading-relaxed">
              Connectivity to Supabase is missing. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your project secrets.
            </p>
          </div>
        )}

        {error && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`mb-8 p-5 border rounded-xl flex items-center gap-4 ${
              error.includes('Verification') 
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
              : 'bg-rose-500/10 border-rose-500/30 text-rose-500'
            }`}
          >
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed">{error}</p>
          </motion.div>
        )}

        <div className="space-y-8">
          {mode !== 'guest' ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[9px] font-mono text-white/20 uppercase tracking-widest ml-1">NETWORK_IDENTITY (EMAIL)</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white text-sm focus:border-primary/50 focus:bg-primary/[0.02] outline-none transition-all placeholder:text-white/10 uppercase font-light tracking-wider"
                    placeholder="ENTER_EMAIL"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-mono text-white/20 uppercase tracking-widest ml-1">ENCRYPTION_KEY (PASSWORD)</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="password"
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white text-sm focus:border-primary/50 focus:bg-primary/[0.02] outline-none transition-all placeholder:text-white/10 font-light"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full py-5 bg-primary text-on-primary rounded-xl font-bold text-[11px] uppercase tracking-[0.4em] hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)] flex items-center justify-center gap-4"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin"></div>
                ) : (
                  <>
                    {mode === 'login' ? <LogIn className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
                    {mode === 'login' ? 'INITIALIZE_AUTH' : 'CREATE_IDENTITY'}
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="bg-white/[0.02] border border-dashed border-white/10 rounded-2xl p-8 text-center">
                <p className="text-[11px] text-white/40 uppercase tracking-widest leading-relaxed mb-6 font-light">
                  Temporary terminal access only. Activity will be discarded after 24 hours.
                </p>
                <button 
                  onClick={handleGuestLogin}
                  disabled={isLoading}
                  className="w-full py-5 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-[11px] uppercase tracking-[0.4em] hover:bg-white/10 transition-all flex items-center justify-center gap-4"
                >
                   {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <User className="w-5 h-5" />
                      CONNECT_ANON
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4 text-center mt-10">
            {mode !== 'login' && (
              <button 
                onClick={() => { setMode('login'); setError(null); }}
                className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] hover:text-primary transition-colors py-2 border border-transparent hover:border-primary/20 rounded-lg"
              >
                [ RETURN_TO_LOGIN ]
              </button>
            )}
            {mode !== 'register' && (
              <button 
                onClick={() => { setMode('register'); setError(null); }}
                className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] hover:text-primary transition-colors py-2 border border-transparent hover:border-primary/20 rounded-lg"
              >
                [ REGISTER_NEW_NODE ]
              </button>
            )}
            {mode !== 'guest' && (
              <button 
                onClick={() => { setMode('guest'); setError(null); }}
                className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] hover:text-primary transition-colors py-2 border border-transparent hover:border-primary/20 rounded-lg"
              >
                [ USE_GUEST_BYPASS ]
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
