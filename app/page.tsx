"use client";

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews"
import Section from "@/components/Section";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function Home() {
  const [bannerHeight, setBannerHeight] = useState('100px');
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const animation = inView ? "show" : "hidden"; //
  return (
    <main className={`overflow-x-hidden pt-[${bannerHeight}]`}>
    <motion.div ref={ref} variants={variants} initial="hidden" animate={animation}>
      <Banner setBannerHeight={setBannerHeight} />
    </motion.div>
    <Navbar />
    <Header />
    <Reviews />
    <Section />
    <Footer />
  </main>
  );
}