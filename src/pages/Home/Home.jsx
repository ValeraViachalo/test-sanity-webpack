import React, { useRef, useState } from "react";
import Hero from "./Hero/Hero";
import Universe from "./Universe/Universe";

export default function Home() {
  return (
  <main className="home">
    <Hero />
    <Universe />
  </main>
  );
}
