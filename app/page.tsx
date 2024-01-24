"use client";

import { motion } from 'framer-motion';
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews"
import Section from "@/components/Section";
import { useState } from 'react';

export default function Home() {
  const [bannerHeight, setBannerHeight] = useState('100px');
  return (
    <main className={`overflow-x-hidden pt-[${bannerHeight}]`}>
    <Banner setBannerHeight={setBannerHeight} />
      <Navbar />
      <Header />
      <Reviews />
      <Section />
      <Footer />
    </main>
  );
}