import React from 'react';

import HeroSection from '@/components/organisms/Home/HeroSection';
import FeaturedRooms from '@/components/organisms/Home/FeaturedRooms';
import ServiceSection from '@/components/organisms/Home/ServiceSection';
import GallerySection from '@/components/organisms/Home/GallerySection';
import Testimonials from '@/components/organisms/Home/Testimonials';
import FAQSection from '@/components/organisms/Home/FAQSection';

import { galleryImageData } from '@/data/HomePageData';

export default function Home() {
  return (
    <>
      <HeroSection/>
      <FeaturedRooms/>
      <ServiceSection/>
      <GallerySection images={galleryImageData}/>
      <Testimonials/>
      <FAQSection/>
    </>
  );
}