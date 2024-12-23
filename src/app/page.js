import LandingBanner from "@/components/homepage/LandingBanner";
import styles from "./page.module.css";
import LandingServices from "@/components/homepage/LandingServices";

export default function Home() {
  return (
    <>
      <LandingBanner />
      <LandingServices />
    </>
  );
}
