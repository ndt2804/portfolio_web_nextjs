"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function EditorPortfolio() {
  const { scrollY } = useScroll();
  
  // Parallax constraints for Hero Background
  const heroBgY = useTransform(scrollY, [0, 1000], ["0%", "25%"]);
  const heroTextOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroTextY = useTransform(scrollY, [0, 500], ["0%", "-30%"]);

  // Staggered Entrance Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  return (
    <div className="bg-[#0e0e0e] text-[#ffffff] font-['Inter'] selection:bg-[#ff8f73] selection:text-[#5e1000] min-h-screen pb-0">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-between pb-8 pt-24 overflow-hidden bg-[#0e0e0e]">
        
        {/* We lock the wild image into a massive 16:9 cinematic container so it scales up huge across the laptop, keeping the text safely inside its visual bounds without needing fake CSS borders */}
        <div className="relative w-full max-w-7xl px-4 flex-grow flex items-center justify-center m-auto">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9] flex items-center justify-center">
            <motion.div style={{ y: heroBgY }} className="absolute inset-0 z-0 flex items-center justify-center">
               <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>
               {/* 100% pure object-contain inside the massive responsive box guarantees NO subtle bezel or camera dot is EVER cropped, while maintaining HUGE size */}
               <Image 
                 fill 
                 priority 
                 sizes="(max-width: 1536px) 100vw, 1536px"
                 className="object-contain" 
                 alt="Fast-cut cinematic video editing montage background" 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8zvmntutnJCs_b2R4DIlr2am9bw7wYUK-2agHDchKmTlcDNf34KtebNFu71Nugdek0kSRyWcum1bFZG2vUAfP-l7dbLOyScfsoox1pWJqg82bd-2SCss8kuhp7tLSCaAOQQpG4ECpJsFtdaw35js6QKMp1Hy1Jweqa9TbNMpBAykfbQfdyPQU0zEAQlqj9XPQ3RqRPda-7DBacvuyDT6LKWcUdf3p1i85_k7TTXVX39ZJSwYFpcybubVwoYb7uHohF8e7DBKk46E"
               />
            </motion.div>
            
            <motion.div style={{ opacity: heroTextOpacity, y: heroTextY }} className="relative z-20 text-center px-4 lg:px-12 w-full max-w-5xl">
              <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-4 md:mb-6 uppercase italic">
                I TURN VIDEOS <br/> <span className="text-[#ff8f73] italic">INTO SALES</span>
              </h1>
              <p className="font-body text-base md:text-2xl text-[#adaaaa] max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed drop-shadow-md">
                I help brands scale with high-converting video ads for TikTok, Reels, and YouTube.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <button className="kinetic-gradient text-[#5e1000] px-10 py-5 font-headline font-black text-xl uppercase tracking-tighter rounded-md shadow-[0_0_20px_rgba(255,143,115,0.3)] hover:scale-105 active:scale-95 transition-all w-full md:w-auto">
                  LET&apos;S WORK TOGETHER
                </button>
                <button className="glass-panel border border-[#484847]/15 text-white px-10 py-5 font-headline font-black text-xl uppercase tracking-tighter rounded-md hover:bg-white/10 transition-all w-full md:w-auto">
                  VIEW SHOWREEL
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator securely kept separated far underneath */}
        <div className="relative z-10 flex flex-col items-center gap-4 mt-8 opacity-50 shrink-0">
          <span className="font-label text-[10px] tracking-[0.3em] uppercase">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-[#ff8f73]"></div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="bg-[#131313] py-20 border-y border-[#484847]/5 overflow-hidden">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-screen-2xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-1">
            <div className="font-headline text-4xl md:text-6xl font-black text-[#ff8f73] tracking-tighter italic">100M+</div>
            <div className="font-label text-xs tracking-widest text-[#adaaaa] uppercase">Total Views</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="space-y-1">
            <div className="font-headline text-4xl md:text-6xl font-black text-white tracking-tighter italic">500+</div>
            <div className="font-label text-xs tracking-widest text-[#adaaaa] uppercase">Videos Delivered</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="space-y-1">
            <div className="font-headline text-4xl md:text-6xl font-black text-[#ff8f73] tracking-tighter italic">3X</div>
            <div className="font-label text-xs tracking-widest text-[#adaaaa] uppercase">ROAS Growth</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 opacity-40">
            <span className="material-symbols-outlined text-3xl">brand_family</span>
            <span className="material-symbols-outlined text-3xl">video_library</span>
            <span className="material-symbols-outlined text-3xl">trending_up</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Showreel Section */}
      <section className="py-32 bg-[#0e0e0e]" id="work">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-screen-xl mx-auto px-6"
        >
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="font-label text-[#ff8f73] text-sm tracking-[0.2em] uppercase font-bold mb-4 block">Selected Works</span>
              <h2 className="font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">The Showreel</h2>
            </div>
            <div className="hidden md:block h-[2px] flex-1 bg-[#484847]/15 mx-12 mb-4"></div>
            <div className="font-label text-[#adaaaa] text-sm uppercase font-bold mb-4 tracking-widest">2024 VOL_01</div>
          </div>
          <div className="relative group cursor-pointer overflow-hidden rounded-lg aspect-video shadow-2xl">
            <Image 
              fill 
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
              alt="Modern 2024 video editing showreel thumbnail" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFfUo4aaCILcJ5tfekPZzFbEnH9q85K_dB17Z1Dop4iIkaiJ7aK_68-9asjU5nQvzLGH3yo37H-pJZmKfpBl1EThbU0Pc-d-ckuZ-DW1iOzBHk2U19PneQqQLyKd3NpFuNaPjsQNHJmHV61kTutdIkxu77FasidFhv6DsZBwicT97N3uQzQXv6JjD_zXSJj9ruxDR_NoNgoNOLQjHYMv1-48vDqvqtt6wskWRaiCbkepLlItwRrSVpAOR9_xCJyn2cz6OV0eje7Zg"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full kinetic-gradient flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-5xl text-[#5e1000]" style={{fontVariationSettings: "'FILL' 1"}}>play_arrow</span>
              </div>
            </div>
            <div className="absolute bottom-8 left-8">
              <div className="glass-panel px-4 py-2 border border-white/10 inline-block rounded-md mb-2">
                <span className="font-label text-[10px] tracking-widest uppercase text-white/80">4K ULTRA HD / 60 FPS</span>
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase tracking-tighter">Impact Cinematic Cuts</h3>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Bento Grid */}
      <section id="projects" className="py-32 bg-[#131313] overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-12 gap-4"
          >
            <motion.div variants={fadeInUp} className="md:col-span-8 group relative aspect-video md:aspect-auto md:h-[500px] rounded-lg overflow-hidden bg-[#262626]">
              <Image fill sizes="(max-width: 1536px) 66vw, 1024px" className="object-cover group-hover:scale-105 transition-all duration-500" alt="eCommerce advertising video thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABHTAzIVrEpEPQ49egwCj_Pb0hvLyd2NKvYcljS08soSvQOuD_T7cBGgt8JpBcxqlqTy6aGHz6MSNQwXJSVh__elRRCuw7SOiIby-i92tmOqr8rZ-lrRiTRaNFfMwV_4asZgAH01qmlj0B9IjYn5iON6UVOCs2UKH1GGFB4TcUkzwDrXI8eSuLF3oz4-k_33m76GoXlKsHP06FHw9BVWmUycE1bG50MXMJjkIXiQ0romgtbXPdNag7Nz2Xj-mgPo6ZfUSOtQVBSEw"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#ff7856]/20 text-[#ff8f73] text-[10px] font-bold uppercase tracking-widest rounded-full border border-[#ff8f73]/30">eCommerce Ad</span>
                </div>
                <h4 className="font-headline text-3xl font-black uppercase tracking-tighter mb-1 italic">Vanguard Tech Drop</h4>
                <p className="font-label text-[#adaaaa] text-sm font-bold tracking-widest uppercase">5.2M Views • 12% Conversion</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="md:col-span-4 group relative aspect-square md:h-[500px] rounded-lg overflow-hidden bg-[#262626]">
              <Image fill sizes="(max-width: 1536px) 33vw, 512px" className="object-cover group-hover:scale-105 transition-all duration-500" alt="Viral social media reel video thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaxpTmuCG9piRje07SmIGNDATiV7g0BTmAq6yPk0PYWwcDw1GeKOkW1Z04uqLP4ut8nqgXtELzCZgvHAA2HD7CWsm1r9xIuHZ8ZVVRbgWmwQc57kQ_0WA2b9Xwz036gzelgCV-PSrYHVGKm8fwbqjH0WEFETNVLkZF6N1mrLgzdgmAPzLIotObqbdo21V6siIdIeP-eWjVJkVzr-vHm9RvZDVOMYR60k2hX4ploi4ADNi1JwH0gfU1NNdU0wkXB1CSKkgL-_jaSHM"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/20">Viral Reel</span>
                </div>
                <h4 className="font-headline text-2xl font-black uppercase tracking-tighter mb-1 italic">Street Culture V1</h4>
                <p className="font-label text-[#adaaaa] text-xs font-bold tracking-widest uppercase">1.8M Views</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="md:col-span-4 group relative aspect-square rounded-lg overflow-hidden bg-[#262626]">
              <Image fill sizes="(max-width: 1536px) 33vw, 512px" className="object-cover group-hover:scale-105 transition-all duration-500" alt="Online course launch video thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgcj8_WAP2jnBuFqUnCQPOeT9PE3F53Tt4o6FCo9eHFl9LZ5b4jRTgEoq8v9ncjjhOdehZgB60r5VQkAyL8IDTLL4cpfWxA_BfI-d4BJbk3SlWYjSjNSNW3-US_JfNYEexL5TW__-AtryxrQft5zF8kfGIdDhnZBuhiymEy3YTSxxiKrdBbMeZRntS2uGwzzbEzsuF3HCziWuvVryOdJ8ievu2cdmKV8eDCWvcRZy000bECeSpxdqX61IydMfD-QQApe1g857xOCY"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/20">Course Launch</span>
                </div>
                <h4 className="font-headline text-2xl font-black uppercase tracking-tighter mb-1 italic">Mastery 360</h4>
                <p className="font-label text-[#adaaaa] text-xs font-bold tracking-widest uppercase">$450K Revenue</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="md:col-span-8 group relative aspect-video rounded-lg overflow-hidden bg-[#262626]">
              <Image fill sizes="(max-width: 1536px) 66vw, 1024px" className="object-cover group-hover:scale-105 transition-all duration-500" alt="High-end product showcase video thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmBZ5va0fZFGMHtAzl6jnmmE5x6abL1yPwCZk_LSjRU0NKyES2S8nOc2wEu8mhP1f4wouZ1S8zDDrpHy92d52hIoCcadNd7BhapvgFOTjJ7U9HAC0fXkMAKsp4Q91M72yub7xiZTj6bln2l5dRloQm390ZPpLTYmzifYAJ0GMjxR27WSmDlk91SYefF_YrkAN7WtmhXF0lJJgU9pEV3kgVVAzFlKW7HPuxCuKZI2R1ZDehwzR6qhXXIbAuNOUf9jKvUf76hvJOhL0"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/20">Product Film</span>
                </div>
                <h4 className="font-headline text-3xl font-black uppercase tracking-tighter mb-1 italic">Apex Gear 2024</h4>
                <p className="font-label text-[#adaaaa] text-sm font-bold tracking-widest uppercase">Brand Aesthetic Focus</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 bg-[#0e0e0e]" id="services">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-screen-xl mx-auto px-6"
        >
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 italic">High Velocity Services</h2>
            <p className="text-[#adaaaa] text-lg max-w-xl mx-auto">Focused on metrics. Built for speed. Engineered for conversion.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="bg-[#1a1919] p-10 rounded-lg border border-[#484847]/10 hover:border-[#ff8f73]/50 transition-colors group">
              <div className="w-12 h-12 rounded-md bg-[#ff7856]/20 flex items-center justify-center mb-8 text-[#ff8f73] group-hover:bg-[#ff8f73] group-hover:text-[#5e1000] transition-all">
                <span className="material-symbols-outlined text-3xl">ad_units</span>
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase tracking-tighter mb-4 italic">Ad Creative</h3>
              <p className="text-[#adaaaa] leading-relaxed mb-6">Direct-response video ads designed to stop the scroll and drive immediate ROAS on Meta and TikTok.</p>
              <ul className="space-y-3 font-label text-[11px] tracking-widest text-[#ffffff] uppercase font-bold">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#ff8f73]"></span> Scripting & Concept</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#ff8f73]"></span> Hook Optimization</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#ff8f73]"></span> A/B Testing Variants</li>
              </ul>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-[#1a1919] p-10 rounded-lg border border-[#484847]/10 hover:border-[#ff8f73]/50 transition-colors group">
              <div className="w-12 h-12 rounded-md bg-[#ff7856]/20 flex items-center justify-center mb-8 text-[#ff8f73] group-hover:bg-[#ff8f73] group-hover:text-[#5e1000] transition-all">
                <span className="material-symbols-outlined text-3xl">auto_awesome</span>
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase tracking-tighter mb-4 italic">Organic Growth</h3>
              <p className="text-[#adaaaa] leading-relaxed mb-6">Retention-first editing for long-form YouTube and short-form Reels to build a loyal community.</p>
              <ul className="space-y-3 font-label text-[11px] tracking-widest text-[#ffffff] uppercase font-bold">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#ff8f73]"></span> High-Pace Storytelling</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#ff8f73]"></span> Engagement Graphics</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#ff8f73]"></span> Thumbnail Design</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-[#1a1919] p-10 rounded-lg border border-[#484847]/10 hover:border-[#ff8f73]/50 transition-colors group">
              <div className="w-12 h-12 rounded-md bg-[#ff7856]/20 flex items-center justify-center mb-8 text-[#ff8f73] group-hover:bg-[#ff8f73] group-hover:text-[#5e1000] transition-all">
                <span className="material-symbols-outlined text-3xl">movie_filter</span>
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase tracking-tighter mb-4 italic">Post-Production</h3>
              <p className="text-[#adaaaa] leading-relaxed mb-6">Full-scale editing, color grading, and sound design for premium brand films and documentaries.</p>
              <ul className="space-y-3 font-label text-[11px] tracking-widest text-[#ffffff] uppercase font-bold">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#ff8f73]"></span> DaVinci Color Grade</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#ff8f73]"></span> ASMR Sound Design</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#ff8f73]"></span> 4K Delivery</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#131313] border-y border-[#484847]/10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-screen-xl mx-auto px-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <span className="font-label text-[#ff8f73] text-sm tracking-[0.2em] uppercase font-bold mb-4 block">Proven Results</span>
              <h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 italic">What Clients Say</h2>
              <div className="flex flex-wrap gap-8 opacity-40">
                <Image width={150} height={40} className="h-8 md:h-12 w-auto filter grayscale invert" alt="Client 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5-bswlitoOVz1gJlNpDkbFjf8W6my8D_pBefMZuibS1Q1yWmCkBRn6AywU7Pj6OIuM4NYJIRIHZXD02Pv6lCu2HfISIxfRgoach1rPyskDa5nYppyCQcCESpHXXnxu6Wst2H8DSE9_d0aCLWO5RlAWJyOurY4mD1qf11Bvijbw-Q4oosOb6Mc7PvPWkzJ1tuD57obL0POaf5f60EnjcNP1gp1SaDhU-iDDT7Xg-JyxmgiIZJhLaiwMqK9XRqQNKApD_cBnLXbL0g"/>
                <Image width={150} height={40} className="h-8 md:h-12 w-auto filter grayscale invert" alt="Client 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhnt8KUk2BGl3wC-H509IquHo0ATeiO7acfhlQSMh5HhEgcMMjfIMfN3EnXJxUeFfbJNkbwAQ94C7p1yjrOL_5szuCNHWzQKBqCeI5zvLHHfHsEJV_thGW5g1F-01sydXrhwH8_1r1uw3LOp4RhOT1PiEgN0pjL18TrfUNInsPWLI_Q1085eBBGDwsva1uUbOOjprC2baBIqYTFUdqzSc_2RHnvh2JMMbVIArfvCyTpQUxDJjxMq3LIk14h0BeKDcaqrqetIpJ_as"/>
                <Image width={150} height={40} className="h-8 md:h-12 w-auto filter grayscale invert" alt="Client 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQNK3tbE6piZqpzGF3VlYzuEfwpK9dlSZp_OzI6g0b9yp5aFBimJV43IrqkVoPrYch_xPGMdIdWu-vAPR14vvH_mEsJpbzmDA6f2x-7uyokMZhANMhBn12vatqi725hWF8SXlS5GuIKcmxFZTlWRPK2W4bzb7iZUCDue6sDIPXKirNhjySsldmoYKzXMc_GQoCtiPSxLgFYFnI1qjs_gukY6_NXZWoVJg4RL9wyVf5bMMo0y7Cl9s21C3rYXtAzkM-Ze2d8NQZwjM"/>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-[#262626] p-8 rounded-lg relative">
                <span className="material-symbols-outlined text-6xl text-[#ff8f73]/10 absolute top-4 right-4">format_quote</span>
                <p className="font-body text-xl italic mb-6 leading-relaxed">&quot;The conversion rates on our ads tripled within two weeks of using Kinetic Frame. The energy and pacing are exactly what modern brands need to stand out.&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image fill sizes="48px" className="object-cover" alt="Client headshot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBB-3OtkZ-BOoZyZjvYPKqtrBVx91sIinswvSbrFe55fxrT9IGfvCTW_AuSo57WLaST1fEDihfEclzJ-CsKsII5Gs8cGgyatjN3FCbJF00ioOmgPbYI4Y-OA00nZOP3r1TSUFD7a6ErDjU8T2bBQ6eQesJUZywMH8AHeXoUxV7ZwA_VaPkbbiO5XyBKkyv3yuOVm6EV09I4KoBSIvedL3GJRdq5-c-dFg5IYs-pYHB-JsFrmsMX3OqxT5YWDh8Gxt9tyymZkad6cE"/>
                  </div>
                  <div>
                    <div className="font-headline font-bold uppercase tracking-tighter">Marcus Thorne</div>
                    <div className="font-label text-[10px] tracking-widest text-[#adaaaa] uppercase">CEO, VELOCITY GEAR</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 kinetic-gradient opacity-10 blur-[120px]"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-screen-xl mx-auto px-6 text-center relative z-10"
        >
          <h2 className="font-headline text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-10 italic">Ready to <br/> <span className="text-[#ff8f73]">Scale Up?</span></h2>
          <button className="bg-white text-black px-12 py-6 font-headline font-black text-2xl uppercase tracking-tighter rounded-md hover:scale-105 active:scale-95 transition-all shadow-2xl">
            START YOUR PROJECT
          </button>
        </motion.div>
      </section>

      {/* Footer is handled globally, but we can override it or keep it simple */}
      <footer className="bg-[#131313] w-full border-t border-[#484847]/15">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 w-full max-w-screen-2xl mx-auto">
          <div className="mb-8 md:mb-0 text-left">
            <div className="text-lg font-bold text-[#ff8f73] font-headline uppercase tracking-tighter mb-2">KINETIC FRAME</div>
            <div className="font-['Inter'] text-xs tracking-widest uppercase text-[#adaaaa]">© {new Date().getFullYear()} KINETIC FRAME. ALL RIGHTS RESERVED.</div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-8 font-['Inter'] text-xs tracking-widest uppercase text-[#adaaaa]">
              <a className="text-[#ff8f73] hover:text-white transition-opacity duration-200" href="#">Terms</a>
              <a className="hover:text-white transition-opacity duration-200" href="#">Privacy</a>
              <a className="hover:text-white transition-opacity duration-200" href="#">Contact</a>
            </div>
            <div className="flex gap-4">
              <a className="text-[#adaaaa] hover:text-white transition-all" href="#"><span className="material-symbols-outlined text-xl">videocam</span></a>
              <a className="text-[#adaaaa] hover:text-white transition-all" href="#"><span className="material-symbols-outlined text-xl">share</span></a>
              <a className="text-[#adaaaa] hover:text-white transition-all" href="#"><span className="material-symbols-outlined text-xl">play_circle</span></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
