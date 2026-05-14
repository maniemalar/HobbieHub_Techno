import React from 'react';
import { Search, Bell, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function TopBar() {
  const { user, signOut } = useAuth();
  const isGuest = user?.is_anonymous;

  return (
    <header className="fixed top-0 right-0 w-[calc(100%-260px)] h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 flex justify-between items-center px-8 z-40">
      <div className="flex items-center bg-gray-50 px-4 py-1.5 rounded-lg w-80 border border-transparent focus-within:border-gray-200 focus-within:bg-white transition-all">
        <Search className="w-4 h-4 text-gray-400 mr-2" />
        <input 
          className="bg-transparent border-none focus:ring-0 text-sm w-full p-0 placeholder:text-gray-400 text-gray-900" 
          placeholder="Search..." 
          type="text"
        />
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-gray-900 transition-all cursor-pointer relative p-2 rounded-lg hover:bg-gray-50">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
          </button>
        </div>
        
        <div className="h-4 w-px bg-gray-200"></div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden lg:block">
            <p className="text-xs font-semibold text-gray-900">
              {isGuest ? 'Guest User' : (user?.email?.split('@')[0] || 'User')}
            </p>
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tight">
              {isGuest ? 'Limited Access' : 'Administrator'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img 
              alt="Profile" 
              className="w-9 h-9 rounded-lg object-cover grayscale" 
              src={isGuest ? "https://github.com/identicons/guest.png" : "https://lh3.googleusercontent.com/aida-public/AB6AXuBmnkawb6BdgjhcdneezAmdlZvRl_4ppQlDCwzKFJo7dM2Cju02YIjCobt9Jyz30aU5epLs_vP1ZNcG1X0s_c3y4mc0-6NcL_fT3pLhaM399enuDc4KF6p0jk81MpaeSnhtKW3v-BTAe_9r81MlT1My5cyILnx8o4jTKXjtNGosukwfH3wDA-SNTKV6N60ODKdFk54NoMGsoc5fQZOulcbS1kPymco5pu9JDjyEWRbekG105jJ-BxKJ5atYnrixs2H_1reDnpvopvXi"} 
            />
            
            <button 
              onClick={() => signOut()}
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
              title="Sign out"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
