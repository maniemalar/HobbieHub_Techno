import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import DashboardView from './views/DashboardView';
import ClassesView from './views/ClassesView';
import StudentsView from './views/StudentsView';
import PaymentsView from './views/PaymentsView';
import CommunicationView from './views/CommunicationView';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView />;
      case 'classes':
        return <ClassesView />;
      case 'students':
        return <StudentsView />;
      case 'payments':
        return <PaymentsView />;
      case 'communication':
        return <CommunicationView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden relative text-slate-200">
      {/* Global Ambient Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute restore bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-tertiary/10 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 tech-grid opacity-20"></div>
      </div>

      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <TopBar />
      
      <main className="ml-[280px] pt-16 min-h-screen relative z-10 overflow-hidden">
        <div className="p-8 max-w-[1600px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Global Primary Action Floating Button */}
        {currentView === 'dashboard' && (
          <motion.div 
            initial={{ scale: 0, rotate: -45, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            className="fixed bottom-10 right-10 z-50"
          >
            <button className="w-16 h-16 bg-primary text-on-primary rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative border border-white/20 overflow-hidden">
              <span className="text-3xl font-light transform group-hover:rotate-90 transition-transform duration-500">+</span>
              <span className="absolute right-full mr-6 bg-black/80 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-[0.3em] px-5 py-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-xl pointer-events-none border border-white/10 translate-x-4 group-hover:translate-x-0">
                INIT_NEW_SESSION
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
            </button>
          </motion.div>
        )}
      </main>

      {/* Global Status Footer from Theme */}
      <footer className="fixed bottom-0 right-0 w-[calc(100%-280px)] h-8 border-t border-white/5 bg-black/60 backdrop-blur-md flex items-center px-8 justify-between z-40">
        <div className="flex gap-8 text-[8px] uppercase tracking-[0.3em] font-bold">
          <div className="flex items-center gap-2">
            <span className="text-white/20">Up-link</span>
            <span className="text-emerald-400">ACTIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/20">Data Buffer</span>
            <span className="text-primary font-mono">99.8%</span>
          </div>
        </div>
        <div className="text-[8px] uppercase tracking-[0.2em] text-white/10 font-mono">
          SECURE_ENCRYPTION: AES_256_QUANTUM
        </div>
      </footer>
    </div>
  );
}

