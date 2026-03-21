
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroPrivacy from "@/components/sections/HeroPrivacy";
import PrivacyPage from "@/components/sections/PrivacyPage";

import Popup from "@/components/sections/Popup";
import { PopupProvider } from "@/сontext/Popup/PopupProvider";
import ListForm from "@/components/sections/ListForm";

import { EmailProvider } from "@/сontext/Email/EmailProvider";
import { useScrollAnimations } from "@/hooks/useScrollAnimation";

export function Privacy() {
  useScrollAnimations("html");
  return (
    <EmailProvider>
      <PopupProvider>
        <div className="flex flex-col min-h-screen">
          <div className="block">
            <Header />
            <HeroPrivacy />
          </div>
          <div className="flex-1">
            <PrivacyPage />           
          </div>
          <div className="block">
            <ListForm />
            <Footer />
          </div>
        </div>
        <Popup />
      </PopupProvider>
    </EmailProvider>
  );
}