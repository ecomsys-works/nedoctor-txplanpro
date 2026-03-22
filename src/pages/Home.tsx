import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import BenefitsAccordion from "@/components/sections/BenefitsAaccordion";
import Developed from "@/components/sections/Developed";
import Double from "@/components/sections/Double";
import FeatureGrid from "@/components/sections/FeatureGrid";
import GettingStarted from "@/components/sections/GettingStarted";
import Hero from "@/components/sections/Hero";
import ListForm from "@/components/sections/ListForm";
import SayYes from "@/components/sections/SayYes";
import Pricing from "@/components/sections/Pricing";
import Reviews from "@/components/sections/Reviews";
import Partners from "@/components/sections/Partners";
import WorkflowDetails from "@/components/sections/WorkflowDetails";
import WorkflowSteps from "@/components/sections/WorkflowSteps";

import Popup from "@/components/sections/Popup";
import { PopupProvider } from "@/сontext/Popup/PopupProvider";

import { EmailProvider } from "@/сontext/Email/EmailProvider";

import { useScrollAnimations } from "@/hooks/useScrollAnimation";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export function Home() {
  useScrollAnimations("html");
  useScrollToTop();
  return (
    <EmailProvider>
      <PopupProvider>
        <Header />
        <Hero />
        <Partners />
        <FeatureGrid />
        <WorkflowSteps />
        <WorkflowDetails />
        <BenefitsAccordion />
        <Double />
        <GettingStarted />
        <Developed />
        <Reviews />
        <Pricing />
        <SayYes />
        <ListForm />
        <Footer />
        <Popup />
      </PopupProvider>
    </EmailProvider>
  );
}