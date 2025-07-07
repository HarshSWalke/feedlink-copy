import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import React, { createContext, useContext, useState, ReactNode, FC } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Supported languages
export const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
];

// Translation dictionary (expand as needed)
const translations: Record<string, Record<string, string>> = {
  en: {
    siteName: "FeedLink",
    siteTagline: "Bridging Hunger with Kindness",
    siteDescription: "Connecting restaurants with people in need through leftover food sharing. Every meal matters, every person counts.",
    findFood: "Find Food Near Me",
    findFoodDesc: "Locate nearby restaurants offering free leftover food",
    findFoodBtn: "Find Food",
    registerRestaurant: "Register Your Restaurant",
    registerRestaurantDesc: "Share your leftover food with those who need it most",
    registerRestaurantBtn: "Register Now",
    howItWorks: "How It Works",
    findLocation: "Find Location",
    findLocationDesc: "Allow location or select from map",
    seeAvailableFood: "See Available Food",
    seeAvailableFoodDesc: "Browse nearby restaurant offerings",
    checkTiming: "Check Timing",
    checkTimingDesc: "View pickup windows and availability",
    getYourMeal: "Get Your Meal",
    getYourMealDesc: "Visit restaurant and collect food",
    // Add more keys as needed
  },
  hi: {
    siteName: "फीडलिंक",
    siteTagline: "दया से भूख को जोड़ना",
    siteDescription: "रेस्टोरेंट्स को ज़रूरतमंदों से जोड़ना, बचे हुए खाने के माध्यम से। हर भोजन मायने रखता है, हर व्यक्ति महत्वपूर्ण है।",
    findFood: "मेरे पास भोजन खोजें",
    findFoodDesc: "आस-पास के रेस्टोरेंट्स में मुफ्त बचा हुआ भोजन खोजें",
    findFoodBtn: "भोजन खोजें",
    registerRestaurant: "अपना रेस्टोरेंट पंजीकृत करें",
    registerRestaurantDesc: "अपना बचा हुआ भोजन ज़रूरतमंदों के साथ साझा करें",
    registerRestaurantBtn: "अभी पंजीकृत करें",
    howItWorks: "यह कैसे काम करता है",
    findLocation: "स्थान खोजें",
    findLocationDesc: "स्थान की अनुमति दें या मानचित्र से चुनें",
    seeAvailableFood: "उपलब्ध भोजन देखें",
    seeAvailableFoodDesc: "आस-पास के रेस्टोरेंट्स के ऑफर देखें",
    checkTiming: "समय जांचें",
    checkTimingDesc: "पिकअप विंडो और उपलब्धता देखें",
    getYourMeal: "अपना भोजन प्राप्त करें",
    getYourMealDesc: "रेस्टोरेंट जाएं और भोजन प्राप्त करें",
    // Add more keys as needed
  },
  mr: {
    siteName: "फीडलिंक",
    siteTagline: "दयाळूपणाने भूक मिटवा",
    siteDescription: "उरलेले अन्न शेअर करून रेस्टॉरंट्सना गरजू लोकांशी जोडणे. प्रत्येक जेवण महत्त्वाचे, प्रत्येक व्यक्ती महत्त्वाची.",
    findFood: "माझ्याजवळील अन्न शोधा",
    findFoodDesc: "जवळच्या रेस्टॉरंट्समध्ये मोफत उरलेले अन्न शोधा",
    findFoodBtn: "अन्न शोधा",
    registerRestaurant: "तुमचे रेस्टॉरंट नोंदणी करा",
    registerRestaurantDesc: "तुमचे उरलेले अन्न गरजू लोकांसोबत शेअर करा",
    registerRestaurantBtn: "आता नोंदणी करा",
    howItWorks: "हे कसे कार्य करते",
    findLocation: "स्थान शोधा",
    findLocationDesc: "स्थानाची परवानगी द्या किंवा नकाशावरून निवडा",
    seeAvailableFood: "उपलब्ध अन्न पहा",
    seeAvailableFoodDesc: "जवळच्या रेस्टॉरंट्सचे ऑफर पहा",
    checkTiming: "वेळ तपासा",
    checkTimingDesc: "पिकअप विंडो आणि उपलब्धता पहा",
    getYourMeal: "तुमचे जेवण मिळवा",
    getYourMealDesc: "रेस्टॉरंटला भेट द्या आणि अन्न मिळवा",
    // Add more keys as needed
  },
};

// i18n Context
interface I18nContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const t = (key: string) => translations[language]?.[key] || translations['en'][key] || key;
  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};
