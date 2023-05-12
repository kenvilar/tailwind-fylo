"use client";
import { useEffect } from "react";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import Productive from "@/app/components/Productive";
import Testimonials from "@/app/components/Testimonials";
import EarlyAccess from "@/app/components/EarlyAccess";
import Footer from "@/app/components/Footer";

export default function Home() {
  useEffect(() => {
    darkModeSwitcher();
  }, []);

  const darkModeSwitcher = () => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <Header />

      <Hero />

      <Features />

      <Productive />

      <Testimonials />

      <EarlyAccess />

      <Footer />
    </>
  );
}
