import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navigation/Navbar.tsx';
import { Footer } from '../components/navigation/Footer.tsx';
import { MobileBottomBar } from '../components/navigation/MobileBottomBar.tsx';
import { OfflineBanner } from '../components/common/OfflineBanner.tsx';
import { useTranslation } from '../localization/LanguageContext.tsx';

export const RootLayout: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#192420]">
      {/* Quiet Phase 1 Architectural Status Notice */}
      <div className="bg-[#E8F2EE] border-b border-[#D4E6DF] py-1.5 px-4 text-center text-xs text-[#0F4C3A]">
        <span className="font-semibold">{t.phase1Badge}:</span>{' '}
        <span className="text-[#4A5550]">{t.phase1Notice}</span>
      </div>

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Mobile Fixed Bottom Navigation */}
      <MobileBottomBar />

      {/* Offline Status */}
      <OfflineBanner />
    </div>
  );
};
