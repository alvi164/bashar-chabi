export type Language = 'bn' | 'en';

export interface Translations {
  // Brand
  brandName: string;
  brandTagline: string;
  brandHook: string;
  brandDescription: string;

  // Navigation
  navHome: string;
  navProperties: string;
  navServices: string;
  navSafety: string;
  navAbout: string;
  navLogin: string;
  navRegister: string;
  navDashboard: string;
  navLogout: string;
  navInstallApp: string;

  // Buttons
  btnFindHome: string;
  btnListProperty: string;
  btnBookService: string;
  btnSearch: string;
  btnFilter: string;
  btnReset: string;
  btnClear: string;
  btnViewDetails: string;
  btnRequestVisit: string;
  btnSaveFavourite: string;
  btnShare: string;
  btnReport: string;
  btnSubmit: string;
  btnCancel: string;
  btnBack: string;

  // Roles
  roleTenant: string;
  roleLandlord: string;
  roleProvider: string;
  roleAdmin: string;

  // Property Details
  propertyRent: string;
  propertyDeposit: string;
  propertyServiceCharge: string;
  propertyBedrooms: string;
  propertyBathrooms: string;
  propertySize: string;
  propertyFurnishing: string;
  propertyEligibility: string;
  propertyAvailableFrom: string;
  propertyLastConfirmed: string;
  propertyUtilities: string;

  // Safety Warning
  safetyNoticeHeadline: string;
  safetyNoticeBody: string;
  safetyLearnMore: string;

  // Services
  serviceMovingTitle: string;
  serviceMovingDesc: string;
  serviceCleaningTitle: string;
  serviceCleaningDesc: string;
  servicePlumbingTitle: string;
  servicePlumbingDesc: string;
  serviceElectricalTitle: string;
  serviceElectricalDesc: string;
  serviceAcTitle: string;
  serviceAcDesc: string;
  serviceApplianceTitle: string;
  serviceApplianceDesc: string;

  // Phase 1 Notice
  phase1Badge: string;
  phase1Notice: string;
  phase1FirebaseConnectingSoon: string;

  // Footer & Common
  allRightsReserved: string;
  privacyPolicy: string;
  termsAndConditions: string;
  dhakaCoverage: string;
  offlineBanner: string;
}
