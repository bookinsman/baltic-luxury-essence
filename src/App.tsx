import React, { Suspense, useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AgeVerification from './components/AgeVerification';
import LoadingBubbles from './components/ui/loading-bubbles';
import { HelmetProvider } from 'react-helmet-async';

// Lazy-load page components
const Index = React.lazy(() => import('./pages/Index'));
const GrappaPage = React.lazy(() => import('./pages/Grappa'));
const LiqueursPage = React.lazy(() => import('./pages/Likeriai'));
const AsortimentasPage = React.lazy(() => import('./pages/Asortimentas'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

export const LanguageContext = React.createContext<{ language: string; setLanguage: (lang: string) => void; }>({
  language: 'lt',
  setLanguage: () => {},
});

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [language, setLanguage] = useState('lt');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingBubbles />;
  }
  
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <AgeVerification />
            <Router>
              <Suspense fallback={<LoadingBubbles />}>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Index />} />
                    <Route path="grappa" element={<GrappaPage />} />
                    <Route path="likeriai" element={<LiqueursPage />} />
                    <Route path="asortimentas" element={<AsortimentasPage />} />
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </Suspense>
            </Router>
          </TooltipProvider>
        </LanguageContext.Provider>
      </QueryClientProvider>
    </HelmetProvider>
  )
};

export default App;
