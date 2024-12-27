import LandingBanner from "@/components/homepage/LandingBanner";
import LandingServices from "@/components/homepage/LandingServices";
import LandingAbout from "@/components/homepage/LandingAbout";
import LandingTestimonial from "@/components/homepage/LandingTestimonial";
import LandingFAQ from "@/components/homepage/LandingFAQ";

export default function Home() {
  return (
    <>
      <LandingBanner />
      <LandingAbout/>
      <LandingServices />
      <LandingTestimonial/>
      <LandingFAQ/>
    </>
  );
}
