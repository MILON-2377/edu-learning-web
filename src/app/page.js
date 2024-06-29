"use client";

import useUserDataLoader from "@/components/DataLoaderApi/UserDataLoaderApi/useUserDataLoader";
import auth from "../Firebase.Config/firebase.config";
import BenefitsSection from "@/components/HomePage/BenefitsSection";
import BlogPostsSection from "@/components/HomePage/BlogPostsSection";
import CTASecton from "@/components/HomePage/CtASection";
import FeatureSection from "@/components/HomePage/KeyFeatures";
import SocialProofSection from "@/components/HomePage/SocialProofSection";
import SuccessStoriesSection from "@/components/HomePage/SuccessStoriesSection";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";

import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>EduConnect</title>
        <meta name="description" content="Elevate Your Learning Experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FeatureSection />
        <BenefitsSection />
        <TestimonialsSection />
        <SuccessStoriesSection />
        <BlogPostsSection />
        <SocialProofSection />
        <CTASecton />
      </main>
    </div>
  );
}
