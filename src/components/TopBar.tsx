import React from 'react';
import { Search, Bell, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function TopBar() {
  const { user, signOut } = useAuth();
  const isGuest = user?.is_anonymous;

  return (
    <header className="fixed top-0 right-0 w-[calc(100%-280px)] h-16 bg-black/40 backdrop-blur-2xl border-b border-white/5 flex justify-between items-center px-8 z-40">
      <div className="flex items-center bg-white/5 px-4 py-2 rounded-lg w-96 border border-white/10 group focus-within:border-primary/50 transition-all">
        <Search className="w-5 h-5 text-white/40 group-focus-within:text-primary mr-2" />
        <input 
          className="bg-transparent border-none focus:ring-0 text-xs font-medium w-full p-0 placeholder:text-white/20 text-white" 
          placeholder="SEARCH SYSTEM DATABASE..." 
          type="text"
        />
      </div>
      
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-6">
          <button className="text-white/40 hover:text-primary transition-all cursor-pointer group relative">
            <Bell className="w-6 h-6 group-hover:scale-110" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-primary shadow-[0_0_8px_#22d3ee] rounded-full border-2 border-background"></span>
          </button>
          <div className="flex flex-col items-end border-r border-white/10 pr-6">
            <span className="text-[9px] uppercase text-white/30 font-bold tracking-tighter">System Status</span>
            <span className="text-xs font-mono text-emerald-400">OPTIMAL</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 pl-8">
          <div className="text-right hidden lg:block">
            <p className="text-[10px] font-bold text-white tracking-widest uppercase">
              {isGuest ? 'GUEST_OPERATOR' : (user?.email?.split('@')[0].toUpperCase() || 'SARAH CHEN')}
            </p>
            <p className="text-[9px] text-primary font-mono uppercase">
              {isGuest ? 'TEMP_ACCESS_V4' : 'Director Alpha-1'}
            </p>
          </div>
          <div className="relative group flex items-center gap-4">
            <div className="relative">
              <img 
                alt="Profile" 
                className="w-10 h-10 rounded-lg border border-white/20 object-cover group-hover:border-primary/50 transition-all" 
                src={isGuest ? "https://github.com/identicons/guest.png" : "https://lh3.googleusercontent.com/aida-public/AB6AXuBmnkawb6BdgjhcdneezAmdlZvRl_4ppQlDCwzKFJo7dM2Cju02YIjCobt9Jyz30aU5epLs_vP1ZNcG1X0s_c3y4mc0-6NcL_fT3pLhaM399enuDc4KF6p0jk81MpaeSnhtKW3v-BTAe_9r81MlT1My5cyILnx8o4jTKXjtNGosukwfH3wDA-SNTKV6N60ODKdFk54NoMGsoc5fQZOulcbS1kPymco5pu9JDjyEWRbekG105jJ-BxKJ5atYnrixs2H_1reDnpvopvXi"} 
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-background animate-pulse"></div>
            </div>
            
            <button 
              onClick={() => signOut()}
              className="p-2 border border-white/10 rounded-lg text-white/40 hover:text-rose-500 hover:border-rose-500/50 hover:bg-rose-500/5 transition-all group"
              title="Terminate Session"
            >
              <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
