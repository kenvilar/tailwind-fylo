"use client";
import { useEffect } from "react";
import Header from "@/app/components/Header";

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
    </>
  );
}
