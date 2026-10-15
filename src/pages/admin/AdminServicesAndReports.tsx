import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../localization/LanguageContext.tsx';

export const AdminProvidersPage: React.FC = () => {
  const { language } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6">
      <Link
        to="/admin"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F4C3A] hover:underline"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span>{language === 'bn' ? 'এডমিন ওভারভিউ' : 'Admin Overview'}</span>
      </Link>
      <h1 className="text-2xl font-bold text-[#192420]">
        {language === 'bn' ? 'সার্ভিস প্রোভাইডার ভেরিফিকেশন কিউ' : 'Provider Verification Queue'}
      </h1>
      <div className="bg-white rounded-3xl border border-[#E8E6DF] p-8 text-center text-xs text-[#738079]">
        {language === 'bn'
          ? 'কোনো অপেক্ষমাণ প্রোভাইডার নেই। ফেজ ২ এ আবেদন জমা হলে এখানে অনুমোদনের জন্য প্রদর্শিত হবে।'
          : 'No provider applications pending review.'}
      </div>
    </div>
  );
};

export const AdminServicesPage: React.FC = () => {
  const { language } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6">
      <Link
        to="/admin"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F4C3A] hover:underline"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span>{language === 'bn' ? 'এডমিন ওভারভিউ' : 'Admin Overview'}</span>
      </Link>
      <h1 className="text-2xl font-bold text-[#192420]">
        {language === 'bn' ? 'গৃহস্থালি সেবা ব্যবস্থাপনা ও অর্পণ' : 'Service Request Management & Assignment'}
      </h1>
      <div className="bg-white rounded-3xl border border-[#E8E6DF] p-8 text-center text-xs text-[#738079]">
        {language === 'bn'
          ? 'কোনো খোলা সেবার অনুরোধ নেই। গ্রাহক সেবা অনুরোধ পাঠালে তা ম্যানুয়ালি উপযুক্ত প্রোভাইডারকে অর্পণ করা হবে।'
          : 'No open service requests in queue.'}
      </div>
    </div>
  );
};

export const AdminReportsPage: React.FC = () => {
  const { language } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6">
      <Link
        to="/admin"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F4C3A] hover:underline"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span>{language === 'bn' ? 'এডমিন ওভারভিউ' : 'Admin Overview'}</span>
      </Link>
      <h1 className="text-2xl font-bold text-[#192420]">
        {language === 'bn' ? 'ব্যবহারকারী ও লিস্টিং অভিযোগ কিউ' : 'User Reports Queue'}
      </h1>
      <div className="bg-white rounded-3xl border border-[#E8E6DF] p-8 text-center text-xs text-[#738079]">
        {language === 'bn'
          ? 'কোনো অমীমাংসিত অভিযোগ নেই।'
          : 'No open user reports.'}
      </div>
    </div>
  );
};
