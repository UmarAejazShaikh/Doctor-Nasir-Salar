import React from "react";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": "https://drsalarspine.com/#physician",
    name: "Dr. Nasir Salar",
    jobTitle: "Orthopedic & Spine Surgeon",
    description:
      "Fellowship-trained Spine Surgeon specializing in Minimally Invasive Spine (MIS) Surgery, Endoscopic Spine Surgery, Joint Replacement, and Trauma in Ahmedabad.",
    medicalSpecialty: ["OrthopedicSurgery", "SpineSurgery"],
    telephone: "+918511954797",
    email: "mohammadnasirsalar7866@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "B 401, Sunflower Residency",
      addressLocality: "Sarkhej, Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "382210",
      addressCountry: "IN",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "B.J. Medical College & Civil Hospital, Ahmedabad",
      },
    ],
    availableService: [
      { "@type": "MedicalProcedure", name: "Endoscopic Spine Surgery" },
      { "@type": "MedicalProcedure", name: "Minimally Invasive Spine Surgery (MIS)" },
      { "@type": "MedicalProcedure", name: "Sciatica & Slip Disc Treatment" },
      { "@type": "MedicalProcedure", name: "Joint Replacement (TKR & THR)" },
      { "@type": "MedicalProcedure", name: "Orthopedic Trauma & Fracture Fixation" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
