import React from "react";
import FreeQuote from "@/components/FreeQuote";
import Hero from "@/components/hero/others/Hero";

export default function QuotePage() {
  return (
    <div>
      <Hero title="Free Quote" currentPage="Quotes" />
      <FreeQuote />
    </div>
  );
}
