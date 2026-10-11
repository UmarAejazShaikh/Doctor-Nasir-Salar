import type { Language } from "@/context/LanguageContext";

const hindi: Record<string, string> = {
  "Dr. Nasir Salar": "डॉ. नासिर सालार",
  "B.J. Medical College & Civil Hospital (Ex-Senior Resident) | MIS & Endoscopic Spine Surgery Fellowship under Dr. Rohit Thaker at Spine 360 Hospital, Ahmedabad.": "बी.जे. मेडिकल कॉलेज और सिविल अस्पताल में पूर्व सीनियर रेज़िडेंट | स्पाइन 360 अस्पताल, अहमदाबाद में डॉ. रोहित ठाकर के मार्गदर्शन में MIS और एंडोस्कोपिक स्पाइन सर्जरी फेलोशिप।",
  "Primary Clinical Focus": "मुख्य उपचार क्षेत्र",
  "Endoscopic Spine Surgery (Keyhole, <8mm)": "एंडोस्कोपिक स्पाइन सर्जरी (8 मिमी से छोटा चीरा)",
  "Minimally Invasive Spine Surgery (MIS-TLIF)": "न्यूनतम चीरे वाली स्पाइन सर्जरी (MIS-TLIF)",
  "Sciatica & Lumbar Disc Herniation": "सायटिका और कमर की स्लिप डिस्क",
  "Total Knee & Hip Replacement (Arthroplasty)": "घुटने और कूल्हे का प्रत्यारोपण",
  "Complex Fracture Fixation & Trauma Care": "जटिल फ्रैक्चर और चोट का उपचार",
  "C-Arm Image-Guided Spine Injections": "सी-आर्म की सहायता से स्पाइन इंजेक्शन",
  "Clinic & Appointments": "क्लिनिक और अपॉइंटमेंट",
  "Mon–Sat: Consultation by Appointment": "सोम–शनि: अपॉइंटमेंट से परामर्श",
  "Inquire Appointment on WhatsApp": "व्हाट्सऐप पर अपॉइंटमेंट पूछें",
  "Medical Disclaimer: Clinical procedures, diagnoses, and treatment recommendations require direct medical evaluation. Content here is for patient awareness.": "चिकित्सकीय सूचना: जाँच, निदान और उपचार की सलाह के लिए डॉक्टर से सीधे परामर्श आवश्यक है। यह जानकारी मरीजों की जागरूकता के लिए है।",
  "Hello Dr. Nasir Salar, I would like to consult regarding spine / orthopedic issues.": "नमस्ते डॉ. नासिर सालार, मैं स्पाइन या हड्डी की समस्या के बारे में परामर्श लेना चाहता/चाहती हूँ।",
  "Hello Dr. Nasir Salar, I would like to consult regarding spine / orthopedic condition.": "नमस्ते डॉ. नासिर सालार, मैं स्पाइन या हड्डी की समस्या के बारे में परामर्श लेना चाहता/चाहती हूँ।",
  "WhatsApp Dr. Nasir": "डॉ. नासिर को व्हाट्सऐप करें",
  "Dr. Nasir Salar, Orthopedic & Spine Surgeon": "डॉ. नासिर सालार, हड्डी और स्पाइन सर्जन",
  "Clinical Focus:": "मुख्य विशेषज्ञता:",
  "Clinic Address (Sarkhej-Juhapura):": "क्लिनिक का पता (सरखेज-जुहापुरा):",
  "Primary Super-Specialty Focus": "मुख्य विशेष उपचार क्षेत्र",
  "Clinical Philosophy": "उपचार का दृष्टिकोण",
  "Surgery is Always the Last Resort — Conservative Protocols First": "पहले बिना ऑपरेशन का उपचार; ज़रूरत होने पर ही सर्जरी",
  "Dr. Nasir Salar prioritizes evidence-based non-surgical protocols: targeted physiotherapy, core stabilization, ergonomic posture correction, and medication. Endoscopic or minimally invasive surgery is recommended only when conservative care fails or progressive nerve deficit threatens mobility.": "डॉ. नासिर सालार पहले प्रमाण आधारित बिना ऑपरेशन वाले उपचार अपनाते हैं, जैसे लक्षित फिजियोथेरेपी, कमर की मांसपेशियों को मजबूत करना, बैठने-उठने की मुद्रा सुधारना और दवाएँ। इनसे लाभ न मिले या नस की बढ़ती कमजोरी चलने-फिरने को प्रभावित करे, तभी एंडोस्कोपिक या न्यूनतम चीरे वाली सर्जरी की सलाह दी जाती है।",
  "Professional Bio": "डॉक्टर का परिचय",
  "Symptom Navigator": "लक्षण मार्गदर्शिका",
  "Persistent nerve pain or progressive weakness should be clinically evaluated to prevent long-term deficit.": "लंबे समय से नस का दर्द या बढ़ती कमजोरी हो तो स्थायी समस्या से बचने के लिए चिकित्सकीय जाँच कराएँ।",
  "Call for Consultation": "परामर्श के लिए कॉल करें",
  "Clinic Details & Timings": "क्लिनिक की जानकारी और समय",
  "Direct WhatsApp Consultation": "व्हाट्सऐप पर सीधे संपर्क करें",
  "Send your MRI / X-ray reports directly on WhatsApp for preliminary clinical review and appointment schedule.": "शुरुआती जाँच और अपॉइंटमेंट के लिए अपनी MRI या X-ray रिपोर्ट सीधे व्हाट्सऐप पर भेजें।",
  "Message on WhatsApp": "व्हाट्सऐप पर संदेश भेजें",
};

export function uiText(language: Language, gujarati: string, english: string): string {
  return language === "gu" ? gujarati : language === "hi" ? (hindi[english] ?? english) : english;
}
