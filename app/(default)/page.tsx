export const metadata = {
  title: "Ternion Loop - Building Innovative Solutions",
  description: "Passionate innovators dedicated to building solutions that make a difference.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Products from "@/components/products";
import Features from "@/components/features";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Products />
      <Features />
      <Team />
      <Cta />
    </>
  );
}
