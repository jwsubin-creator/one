/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Droplets, 
  Home, 
  Hammer, 
  ShieldCheck, 
  ArrowRight,
  Clock,
  Award,
  Wrench
} from 'lucide-react';

export default function App() {
  const phoneNumber = "053-641-2001";
  const rawPhoneNumber = "0536412001";
  const address = "대구 달서구 송현로20 KCC인테리어";

  // 1. 슬라이드 상태 및 데이터
  const [currentSlide, setCurrentSlide] = useState(0);
  const caseImages = [
    "https://lh3.googleusercontent.com/d/1USGUqpdoxt9FaelWrqV9UPanSHRiNnjr",
    "https://lh3.googleusercontent.com/d/1gD4R2sar6awwOO-zVpxg7h_69nrXhRDk",
    "https://lh3.googleusercontent.com/d/17ZiTMFRgoWL0VGaRcLU83VcBbqfkp14R",
    "https://lh3.googleusercontent.com/d/1_RcfWCnsejzgCEC5o-wz7Tk6utzmY0YN",
    "https://lh3.googleusercontent.com/d/1qF3FItgaeEsDy18IGylu-yyMxLWbIZVP",
    "https://lh3.googleusercontent.com/d/1_s5Y_P8tR-XFHOIhQbwkHYYgFI_gGMlX"
  ];

  // 포트폴리오 갤러리 이미지 데이터
  const portfolioImages = [
    { src: "https://lh3.googleusercontent.com/d/1GhLjNvP6Il7tnURwxmhQh5aCp-8ylx_N", title: "누수원인 제거" },
    { src: "https://lh3.googleusercontent.com/d/1W4sCwi7IEB1ZEQm5qPhbc8Z3IWO9cVSL", title: "전기 점검" },
    { src: "https://lh3.googleusercontent.com/d/1GzL51fsEtc1rmtg3RJrYB09s2V8sHaF9", title: "보양 작업" },
    { src: "https://lh3.googleusercontent.com/d/1aWRXlDhOZtUssMW0_vOJsRz6noujU_I2", title: "누수원인 제거" },
    { src: "https://lh3.googleusercontent.com/d/1hx4iY8sywGEMLDbz_qhfzta2tpRZDRoY", title: "누수 도배" },
    { src: "https://lh3.googleusercontent.com/d/1vr2JupyzHSHVzu58gpPbjDIspszZiGhZ", title: "공간 보양" },
    { src: "https://lh3.googleusercontent.com/d/1udryR4H0bgVbPJsIhb17QP959i67jgGt", title: "누수 도배" },
    { src: "https://lh3.googleusercontent.com/d/1zJQ4TYmF3Yt4PfUSoy1uoGEXdL9aXCva", title: "공사 완료" },
    { src: "https://lh3.googleusercontent.com/d/1kM1HhM2eeOeis7LtZR-kXJ_t6FEkLER-", title: "욕실천장 교체" },
    { src: "https://lh3.googleusercontent.com/d/1gyKD3IJM2-NUuGOaWof1eGStD3XmCk-Y", title: "피톤치드 소독" },
    { src: "https://lh3.googleusercontent.com/d/13iqq5OAUuvTUV3zcheFLfK66UuAXAy9x", title: "석고 교체" },
    { src: "https://lh3.googleusercontent.com/d/1ib5EL_61S_bl39N-XwG45-tLBUCTENYK", title: "열탐지 검사" },  
    { src: "https://lh3.googleusercontent.com/d/1mGdOP1UH7IDKBvORCMkFcg99TsdOR7cC", title: "방수 공사" }
  ];

  const services = [
    {
      title: "정밀 누수 탐지",
      description: "첨단 장비를 활용하여 눈에 보이지 않는 미세한 누수 지점까지 정확하게 찾아냅니다.",
      icon: <Droplets className="w-8 h-8" />,
      image: "https://lh3.googleusercontent.com/d/1r_khAKos-Q24acnx8T3BWYV748dCOEIa"
    },
    {
      title: "피해 복구 공사",
      description: "누수로 인한 벽지, 손상을 완벽하게 복구하여 이전보다 더 깨끗하게 만들어드립니다.",
      icon: <Hammer className="w-8 h-8" />,
      image: "https://lh3.googleusercontent.com/d/1udryR4H0bgVbPJsIhb17QP959i67jgGt"
    },
    {
      title: "어려운 보험처리",
      description: "전문 사무팀이 어려운 보험처리를 한번에 해결해드립니다.",
      icon: <Home className="w-8 h-8" />,
      image: "https://lh3.googleusercontent.com/d/1xNYA4AbrqVjVkV6fTCdtbECTKD4Ze7jC"
    },
    {
      title: "전문적인 보상조율",
      description: "누수전문 손해사정인 자문팀이 전문적으로 보상조율을 도와드립니다.",
      icon: <ShieldCheck className="w-8 h-8" />,
      image: "https://lh3.googleusercontent.com/d/1qF3FItgaeEsDy18IGylu-yyMxLWbIZVP"
    }
  ];

  const steps = [
    { step: "01", title: "세대간 조율 OK", desc: "다양한 경험과 노하우로 상황별 대처방법을 제안드립니다." },
    { step: "02", title: "복잡한 서류 OK", desc: "자부담 걱정없이,복잡한 서류처리를 도와드립니다." },
    { step: "03", title: "확실한 공사 OK", desc: "검증된 자재와 전문 인력으로 신속하고 정확하게 시공합니다." },
    { step: "04", title: "품질 보증 OK", desc: "공사 완료 후 철저한 점검과 보증을 약속합니다." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % caseImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [caseImages.length]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#333] font-[Pretendard]">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-blue-900 text-xl font-black leading-none">한번에누수</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-blue-600 transition-colors">주요서비스</a>
            <a href="#portfolio" className="hover:text-blue-600 transition-colors">공사사례</a>
            <a href="#process" className="hover:text-blue-600 transition-colors">진행절차</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">오시는길</a>
          </div>
          <a href={`tel:${rawPhoneNumber}`} className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-md active:scale-95">
            <Phone size={18} />
            <span className="hidden sm:inline">{phoneNumber}</span>
            <span className="sm:hidden">전화연결</span>
          </a>
        </div>
      </nav>

      <main>
        {/* 히어로 섹션 */}
        <section className="relative min-h-[650px] md:min-h-[85vh] flex items-center py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={caseImages[currentSlide]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-white/40 bg-gradient-to-r from-white/95 via-white/40 to-transparent z-[1]" />
          </div>

          <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl break-keep">
              <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                누수 탐지, 보상조율,<br />
                피해 복구, 어려운 보험서류까지<br />
                <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">한번에 처리해드립니다.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-10 font-medium break-keep">
                누수 손해사정인 자문팀 보유,<br /> 
                <span className="text-blue-700 font-bold">제대로 된 누수전문업체</span>를 만나보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${rawPhoneNumber}`} className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:bg-blue-700 transition-all active:scale-95">
                  <Phone size={20} />
                  전화 상담: {phoneNumber}
                </a>
                <a href="#portfolio" className="flex items-center justify-center gap-3 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl text-lg font-bold shadow-sm hover:bg-blue-50 transition-all active:scale-95">
                  <ArrowRight size={20} />
                  실제 공사사례 살펴보기
                </a>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {caseImages.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-10 bg-blue-600' : 'w-2 bg-blue-200'}`} />
            ))}
          </div>
        </section>

        {/* 특장점 섹션 */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-8">
            <div className="flex items-center gap-3"><Clock className="text-blue-600" size={24} /> <span className="font-bold">확실한 사전점검 (열탐지/내시경)</span></div>
            <div className="flex items-center gap-3"><Award className="text-blue-600" size={24} /> <span className="font-bold">공정별 전문팀 직접시공</span></div>
            <div className="flex items-center gap-3"><ShieldCheck className="text-blue-600" size={24} /> <span className="font-bold">항균/피톤치드 공간소독</span></div>
            <div className="flex items-center gap-3"><Wrench className="text-blue-600" size={24} /> <span className="font-bold">누수 전문 인테리어</span></div>
          </div>
        </section>

        {/* 서비스 그리드 */}
        <section id="services" className="py-24 px-6 bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black mb-4">수백건의 경험과 노하우 보유</h2>
              <p className="text-gray-500"> 골치아픈 누수, 어떻게 해결할까 막막하셨죠? </p>
              <p className="text-gray-500"> '누수 보상조율전문 손해사정인 자문팀'을 보유한,</p>
              <p className="text-gray-500"> 대구/경북 최다사례보유 누수원스톱업체가 전문적인 솔루션을 제공합니다.</p>
          
              <p className="text-red-500 font-bold">윗집 누수원인 수리+아래집 피해복구+보상조율/보험처리까지 한번에 해결 가능!</p>
              
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <motion.div key={i} {...fadeIn} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">{s.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{s.description}</p>
                  {s.image && (
                    <div className="mt-auto pt-4 border-t border-gray-50">
                      <img src={s.image} alt={s.title} className="w-full h-40 object-cover rounded-xl brightness-110 shadow-sm" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 공사 사례 포트폴리오 (오류 해결 및 통합됨) */}
        <section id="portfolio" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-gray-900 mb-4">다양한 공사사례 사진</h2>
              <div className="flex justify-center mt-4 mb-8">
                <a href="https://blog.naver.com/procare119" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-blue-600 border border-blue-200 px-6 py-3 rounded-full text-sm font-bold shadow-sm hover:border-blue-600 hover:bg-blue-50 transition-all group">
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <span>더 많은 공사사례 블로그에서 보기</span>
                </a>
              </div>
              <p className="text-gray-500">모든 공정 100% 투명한 공개</p>
              <p className="text-gray-500">전문 보양작업+피톤치드 소독 전후처리까지 깔끔하게</p>
              <p className="text-gray-500">각 공정별 베테랑 전문팀장이 함께 누수현장을 고쳐나갑니다</p>
            </div>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {portfolioImages.map((img, index) => (
                <motion.div
                  key={index}
                  {...fadeIn}
                  transition={{ delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-2xl break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <img src={img.src} alt={img.title} className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-white font-bold text-lg">{img.title}</span>
                    <p className="text-gray-200 text-xs mt-1">한번에누수 실제 시공 사례</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      {/* 프로세스 섹션 */}
<section id="process" className="py-24 px-6 bg-[#F8F9FB]">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-black mb-4">변수가 많은 누수문제를 확실하게</h2>
    </div>

    {/* 1. 프로세스 카드 그리드 (중복 제거됨) */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {steps.map((step, i) => (
        <div key={i} className="bg-white p-8 rounded-3xl relative overflow-hidden shadow-sm border border-gray-50">
          <span className="absolute -right-2 -top-2 text-7xl font-black text-blue-50/50">{step.step}</span>
          <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed relative z-10">{step.desc}</p>
        </div>
      ))}
    </div>

    {/* 2. 하단 안내 이미지 (크기 최적화 및 위치 조정) */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 rounded-[2rem] overflow-hidden shadow-md border border-gray-100 max-w-5xl mx-auto"
    >
      <img 
        src="https://lh3.googleusercontent.com/d/1uMdbxSUAnC1JFRY8S2sPsXYDrVMyaOLu" 
        alt="서비스 절차 안내 이미지" 
        className="w-full h-auto object-cover"
      />
    </motion.div>
  </div>
</section>

        {/* 연락처 및 지도 */}
        <section id="contact" className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 md:p-16 rounded-[40px] shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl font-black">찾아오시는 길</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-blue-600 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Address</p>
                    <p className="font-bold">{address}</p>
                  </div>
                </div>
                <a href={`tel:${rawPhoneNumber}`} className="flex gap-4 group hover:text-blue-600 transition-all">
                  <Phone className="text-blue-600 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Contact</p>
                    <p className="font-bold">{phoneNumber}</p>
                  </div>
                </a>
              </div>
              <a href="https://map.naver.com/v5/search/%EB%8C%80%EA%B5%AC%20%EB%8B%AC%EC%84%9C%EA%B5%AC%20%EC%86%A1%ED%98%84%EB%A1%9C%2020%20KCC%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                네이버 지도로 길찾기 <ArrowRight size={14} />
              </a>
            </div>
            <div className="flex-1 min-h-[300px] rounded-[2rem] overflow-hidden border border-gray-200 shadow-inner bg-white">
              <img src="https://lh3.googleusercontent.com/d/1IZj5rG3kF_S-bw_fO53FD6VC7tE8VbOZ" alt="지도" className="w-full h-full object-cover brightness-110" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-gray-900">한번에누수 & KCC인테리어</p>
            <p className="text-sm text-gray-400 mt-1">대구광역시 달서구 송현로 20 | <a href={`tel:${rawPhoneNumber}`} className="hover:text-blue-600 font-medium"> {phoneNumber}</a></p>
            <a href="https://blog.naver.com/procare119" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:underline block mt-1">https://blog.naver.com/procare119</a>
          </div>
          <p className="text-xs text-gray-300">© 2026 HANBONE LEAK. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <a href={`tel:${rawPhoneNumber}`} className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce">
          <Phone size={30} />
        </a>
      </div>
    </div>
  );
}