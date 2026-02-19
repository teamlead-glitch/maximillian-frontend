"use client";


import { useEffect, useRef, useState, use  } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Blogfull from "@/components/blogs/Blogfull";
import Relatedblogs from "@/components/blogs/Relatedblogs";
import Faq from "@/components/home/Faq";
import VideoSection from "@/components/home/VideoSection"; // ✅ Keep this 
import { NewsItem } from "@/types/news";



export default function BlogsDetailsClient({ details }: { details:NewsItem }) { // ✅ renamed component




  

  return (
    <> 
     <Blogfull news={details}/>   
     {details.id && <Relatedblogs id={details.id}/> } 
     <Faq  />
      <VideoSection /> 
    </>
  );
}
