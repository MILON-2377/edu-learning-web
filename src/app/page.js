"use client";

import useUserDataLoader from "@/components/DataLoaderApi/UserDataLoaderApi/useUserDataLoader";
import auth from "../Firebase.Config/firebase.config";
import BenefitsSection from '@/components/HomePage/BenefitsSection';
import BlogPostsSection from '@/components/HomePage/BlogPostsSection';
import CTASecton from '@/components/HomePage/CtASection';
import FeatureSection from '@/components/HomePage/KeyFeatures';
import SocialProofSection from '@/components/HomePage/SocialProofSection';
import SuccessStoriesSection from '@/components/HomePage/SuccessStoriesSection';
import TestimonialsSection from '@/components/HomePage/TestimonialsSection';
import { userData } from '@/redux/features/Auth/authSlicer';
import { onAuthStateChanged } from 'firebase/auth';
import Head from 'next/head';
import { useEffect, useState,} from 'react';
import { current } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import Custom500 from "@/Pages/CustomError/Custom500";
import LoadinSpinner from "@/Pages/CustomLoading/LoadinSpinner";



export default function Home() {
  
  const disPatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        const currentUser = {
          Name: user?.displayName,
          email: user?.email,
        }
        disPatch(userData(currentUser));
      }
    });

    return () => unSubscribe();
  },[]);

  const authData = useSelector((state) => state?.authReducer?.authData);
  const {data, refetch, error, isLoading} = useUserDataLoader(authData?.email);

  useEffect(() => {
    if(authData?.email){
      refetch();
    }
    console.log(data);
  },[authData, data])

  if(error) return <Custom500></Custom500>;
  if(isLoading) return <LoadinSpinner></LoadinSpinner>

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
