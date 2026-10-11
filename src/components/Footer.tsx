"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { uiText } from "@/data/uiHindi";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  ChevronRight,
  Stethoscope,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const { language } = useLanguage();

  const InstagramIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5 text-pink-400 flex-shrink-0"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );

  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-800/80">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider pb-1 border-b border-slate-800">
              <Stethoscope className="w-4 h-4 text-sky-400" />
              <span>{uiText(language, "ડો. નાસિર સાલાર", "Dr. Nasir Salar")}</span>
            </div>
            <p className="text-xs text-sky-300 font-semibold">
              {language === "gu" ? "MBBS, MS ઓર્થોપેડિક્સ | દૂરબીનથી મણકાની સર્જરીની ખાસ તાલીમ" : language === "hi" ? "MBBS, MS हड्डी रोग | कैमरे से रीढ़ की सर्जरी का खास प्रशिक्षण" : "M.B.B.S, M.S. Orthopedic | Fellowship Trained MIS & Endoscopic Spine Surgeon"}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              {uiText(language, "બી.જે. મેડિકલ કોલેજ & સિવિલ હોસ્પિટલ (ભૂતપૂર્વ સિનિયર રેસિડેન્ટ) | પ્રખ્યાત સ્પાઇન સર્જન ડો. રોહિત ઠાકર પાસે સ્પાઇન 360 હોસ્પિટલ, અમદાવાદ ખાતે એન્ડોસ્કોપિક & MIS સ્પાઇન સર્જરી ફેલોશિપ.", "B.J. Medical College & Civil Hospital (Ex-Senior Resident) | MIS & Endoscopic Spine Surgery Fellowship under Dr. Rohit Thaker at Spine 360 Hospital, Ahmedabad.")}
            </p>
            <div className="pt-1">
              <a
                href="https://instagram.com/dr.salar_ortho_spine"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 hover:text-white border border-slate-800 transition-colors"
              >
                <InstagramIcon />
                <span>@dr.salar_ortho_spine</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider pb-1 border-b border-slate-800">
              {uiText(language, "મુખ્ય સારવાર વિભાગ", "Primary Clinical Focus")}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-sky-400" />
                <span>{uiText(language, "દૂરબીનથી મણકાની સર્જરી", "Endoscopic Spine Surgery (Keyhole, <8mm)")}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-sky-400" />
                <span>{uiText(language, "નાના ચીરાથી મણકાની સર્જરી (MIS)", "Minimally Invasive Spine Surgery (MIS-TLIF)")}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-sky-400" />
                <span>{uiText(language, "કમરથી પગમાં ઉતરતો દુખાવો અને સ્લિપ ડિસ્ક", "Sciatica & Lumbar Disc Herniation")}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-sky-400" />
                <span>{uiText(language, "સાંધા બદલવાનું ઓપરેશન (TKR / THR)", "Total Knee & Hip Replacement (Arthroplasty)")}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-sky-400" />
                <span>{uiText(language, "હાડકાના ફ્રેક્ચર અને ટ્રોમા કેર", "Complex Fracture Fixation & Trauma Care")}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-sky-400" />
                <span>{uiText(language, "એક્સ-રેની મદદથી મણકાનું ઇન્જેક્શન", "C-Arm Image-Guided Spine Injections")}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider pb-1 border-b border-slate-800">
              {uiText(language, "ક્લિનિક સંપર્ક અને સમય", "Clinic & Appointments")}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>{language === "gu" ? "સરખેજ-જુહાપુરા, અમદાવાદ, ગુજરાત" : language === "hi" ? "सरखेज-जुहापुरा, अहमदाबाद, गुजरात" : "Sarkhej-Juhapura, Ahmedabad, Gujarat"}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="tel:8511954797" className="hover:text-white transition-colors font-semibold text-slate-200">
                  +91 85119 54797
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="mailto:mohammadnasirsalar7866@gmail.com" className="hover:text-white transition-colors break-all">
                  mohammadnasirsalar7866@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>{uiText(language, "સોમ–શનિ: એપોઇન્ટમેન્ટ મુજબ કન્સલ્ટેશન", "Mon–Sat: Consultation by Appointment")}</span>
              </li>
            </ul>
            <div className="pt-2">
              <a
                href="https://wa.me/918511954797?text=Hello%20Dr.%20Nasir%20Salar,%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-blue-700 hover:bg-blue-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{uiText(language, "વોટ્સએપ પર મુલાકાતનો સમય પૂછો", "Inquire Appointment on WhatsApp")}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {new Date().getFullYear()} {language === "gu" ? "ડો. નાસિર સાલાર (હાડકાં અને મણકાના સર્જન). બધા હક સુરક્ષિત." : language === "hi" ? "डॉ. नासिर सालार (हड्डी और रीढ़ के सर्जन)। सभी अधिकार सुरक्षित।" : "Dr. Nasir Salar (Spine & Orthopedic Surgeon). All Rights Reserved."}</p>
            <p className="text-[11px] text-slate-500">
              {uiText(language, "આ માહિતી સમજવા માટે છે. તમારી તકલીફનું સાચું કારણ અને સારવાર જાણવા ડોક્ટરને મળો.", "Medical Disclaimer: Clinical procedures, diagnoses, and treatment recommendations require direct medical evaluation. Content here is for patient awareness.")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
