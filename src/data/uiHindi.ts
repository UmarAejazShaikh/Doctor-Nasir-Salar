import type { Language } from "@/context/LanguageContext";

const hindi: Record<string, string> = {
  "Dr. Nasir Salar": "डॉ. नासिर सालार",
  "B.J. Medical College & Civil Hospital (Ex-Senior Resident) | MIS & Endoscopic Spine Surgery Fellowship under Dr. Rohit Thaker at Spine 360 Hospital, Ahmedabad.": "बी.जे. मेडिकल कॉलेज और सिविल अस्पताल में पूर्व सीनियर रेज़िडेंट | स्पाइन 360 अस्पताल, अहमदाबाद में डॉ. रोहित ठाकर के मार्गदर्शन में MIS और एंडोस्कोपिक स्पाइन सर्जरी फेलोशिप।",
  "Primary Clinical Focus": "किस बात का इलाज होता है",
  "Endoscopic Spine Surgery (Keyhole, <8mm)": "कैमरे से रीढ़ की सर्जरी",
  "Minimally Invasive Spine Surgery (MIS-TLIF)": "छोटे चीरे से रीढ़ की सर्जरी (MIS)",
  "Sciatica & Lumbar Disc Herniation": "कमर से पैर तक जाने वाला दर्द और स्लिप डिस्क",
  "Total Knee & Hip Replacement (Arthroplasty)": "घुटने और कूल्हे का प्रत्यारोपण",
  "Complex Fracture Fixation & Trauma Care": "जटिल फ्रैक्चर और चोट का उपचार",
  "C-Arm Image-Guided Spine Injections": "एक्स-रे की मदद से रीढ़ में इंजेक्शन",
  "Clinic & Appointments": "क्लिनिक और अपॉइंटमेंट",
  "Mon–Sat: Consultation by Appointment": "सोम–शनि: अपॉइंटमेंट से परामर्श",
  "Inquire Appointment on WhatsApp": "व्हाट्सऐप पर अपॉइंटमेंट पूछें",
  "Medical Disclaimer: Clinical procedures, diagnoses, and treatment recommendations require direct medical evaluation. Content here is for patient awareness.": "यह जानकारी समझने के लिए है। अपनी परेशानी की सही वजह और इलाज जानने के लिए डॉक्टर को दिखाएँ।",
  "Hello Dr. Nasir Salar, I would like to consult regarding spine / orthopedic issues.": "नमस्ते डॉ. नासिर सालार, मैं स्पाइन या हड्डी की समस्या के बारे में परामर्श लेना चाहता/चाहती हूँ।",
  "Hello Dr. Nasir Salar, I would like to consult regarding spine / orthopedic condition.": "नमस्ते डॉ. नासिर सालार, मैं स्पाइन या हड्डी की समस्या के बारे में परामर्श लेना चाहता/चाहती हूँ।",
  "WhatsApp Dr. Nasir": "डॉ. नासिर को व्हाट्सऐप करें",
  "Dr. Nasir Salar, Orthopedic & Spine Surgeon": "डॉ. नासिर सालार, हड्डी और स्पाइन सर्जन",
  "Clinical Focus:": "मुख्य विशेषज्ञता:",
  "Clinic Address (Sarkhej-Juhapura):": "क्लिनिक का पता (सरखेज-जुहापुरा):",
  "Primary Super-Specialty Focus": "मुख्य विशेष उपचार क्षेत्र",
  "Clinical Philosophy": "इलाज का तरीका",
  "Surgery is Always the Last Resort — Conservative Protocols First": "पहले दवा और व्यायाम, ज़रूरत हो तभी ऑपरेशन",
  "Dr. Nasir Salar prioritizes evidence-based non-surgical protocols: targeted physiotherapy, core stabilization, ergonomic posture correction, and medication. Endoscopic or minimally invasive surgery is recommended only when conservative care fails or progressive nerve deficit threatens mobility.": "डॉ. नासिर सालार पहले दवा, व्यायाम, फिजियोथेरेपी और सही ढंग से बैठने-उठने की सलाह देते हैं। इनसे आराम न मिले या नस की कमजोरी बढ़े, तभी ऑपरेशन के बारे में सोचा जाता है।",
  "Professional Bio": "डॉक्टर का परिचय",
  "Symptom Navigator": "कब जाँच कराएँ",
  "Persistent nerve pain or progressive weakness should be clinically evaluated to prevent long-term deficit.": "लंबे समय से नस का दर्द या बढ़ती कमजोरी हो तो स्थायी समस्या से बचने के लिए चिकित्सकीय जाँच कराएँ।",
  "Call for Consultation": "परामर्श के लिए कॉल करें",
  "Clinic Details & Timings": "क्लिनिक का पता और समय",
  "Direct WhatsApp Consultation": "व्हाट्सऐप पर सीधे संपर्क करें",
  "Send your MRI / X-ray reports directly on WhatsApp for preliminary clinical review and appointment schedule.": "शुरुआती जाँच और अपॉइंटमेंट के लिए अपनी MRI या X-ray रिपोर्ट सीधे व्हाट्सऐप पर भेजें।",
  "Message on WhatsApp": "व्हाट्सऐप पर संदेश भेजें",
};

export function uiText(language: Language, gujarati: string, english: string): string {
  return language === "gu" ? gujarati : language === "hi" ? (hindi[english] ?? english) : english;
}
