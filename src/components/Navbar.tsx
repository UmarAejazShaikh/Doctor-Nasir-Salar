"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Stethoscope, Phone, MessageCircle, Languages, ChevronDown } from "lucide-react";

export default function Navbar() {
  const { language, setLanguage, isGu } = useLanguage();

  const doctorContact = {
    phone: "8511954797",
    phoneDisplay: "+91 85119 54797",
    whatsapp:
      "https://wa.me/918511954797?text=Hello%20Dr.%20Nasir%20Salar,%20I%20would%20like%20to%20inquire%20about%20an%20appointment.",
    callLabel: isGu ? "કૉલ કરો" : language === "hi" ? "डॉक्टर को कॉल करें" : "Call Doctor",
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm pt-[env(safe-area-inset-top,0px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 sm:min-h-20 py-2 sm:py-0">
          <Link href="/" className="flex items-center gap-1.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-blue-700 text-white flex items-center justify-center shadow-sm flex-shrink-0">
              <Stethoscope className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-extrabold text-xs sm:text-lg text-slate-900 tracking-tight leading-tight line-clamp-1">
                {isGu ? "ડો. નાસિર સાલાર" : language === "hi" ? "डॉ. नासिर सालार" : "Dr. Nasir Salar"}
              </span>
              <span className="hidden sm:inline text-xs text-slate-500 font-medium">
                {isGu ? "સ્પાઇન & ઓર્થોપેડિક સર્જન" : language === "hi" ? "स्पाइन और हड्डी रोग विशेषज्ञ" : "Spine & Orthopedic Surgeon"}
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
            <div className="relative flex-shrink-0">
              <Languages className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-700" aria-hidden="true" />
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value as "en" | "gu" | "hi")}
                aria-label="Choose language / भाषा चुनें / ભાષા પસંદ કરો"
                className="w-[7.5rem] sm:w-[8.5rem] appearance-none rounded-full border border-slate-200 bg-slate-100 py-2 pl-8 pr-7 text-xs font-bold text-slate-800 shadow-2xs cursor-pointer hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                <option value="en">English</option>
                <option value="gu">ગુજરાતી</option>
                <option value="hi">हिन्दी</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-700" aria-hidden="true" />
            </div>

            <a
              href={doctorContact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex px-3.5 py-2 text-xs xl:text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${doctorContact.phone}`}
              className="p-2 sm:px-3.5 sm:py-2 text-xs xl:text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-1.5"
              title={doctorContact.callLabel}
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{doctorContact.callLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
