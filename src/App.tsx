import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import DashboardView from './views/DashboardView';
import ClassesView from './views/ClassesView';
import StudentsView from './views/StudentsView';
import PaymentsView from './views/PaymentsView';
import CommunicationView from './views/CommunicationView';
import LoginView from './views/LoginView';
import { AuthProvider, useAuth } from './context/AuthContext';
import { motion, AnimatePresence } from 'motion/react';

function AppContent() {
  const { user, loading } = useAuth();
  const [currentView, setCurrentView] = useState('dashboard');

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gray-100 border-t-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return <LoginView />;
  }

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
    <div className="min-h-screen bg-gray-50/30 font-sans overflow-x-hidden relative text-gray-900">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <TopBar />
      
      <main className="ml-[260px] pt-16 min-h-screen relative z-10">
        <div className="p-8 max-w-[1600px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <footer className="fixed bottom-0 right-0 w-[calc(100%-260px)] h-8 border-t border-gray-100 bg-white/80 backdrop-blur-md flex items-center px-8 justify-between z-40">
        <div className="flex gap-6 text-[10px] font-medium text-gray-400">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span>System Operational</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>Server Response:</span>
            <span className="text-gray-600 font-mono">12ms</span>
          </div>
        </div>
        <div className="text-[10px] text-gray-300 font-medium">
          &copy; 2024 Studio Hub Management
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

