export type CarePathway = {
  eyebrow: string;
  title: string;
  description: string;
  services: readonly string[];
  tone: "women" | "child";
};

export type Consultation = {
  location: string;
  hours: string;
};

export type Doctor = {
  name: string;
  initials: string;
  image: string;
  role: string;
  experience: string;
  credentials: string;
  bio: string;
  focus: readonly string[];
  consultations: readonly Consultation[];
  tone: "women" | "child";
};

export const clinic = {
  name: "Medivin Clinic",
  descriptor: "Mother & Child Clinic",
  location: "Manish Nagar, Nagpur",
  phoneDisplay: "+91 79772 32313",
  phoneHref: "tel:+917977232313",
  whatsappHref:
    "https://wa.me/917977232313?text=Hello%20Medivin%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment.",
  website: "https://medivinclinic.com",
  businessProfile: "https://medivin-clinic.business.site/",
  directions:
    "https://www.google.com/maps/search/?api=1&query=Medivin+Clinic+Manish+Nagar+Nagpur",
  practo:
    "https://www.practo.com/nagpur/clinic/medivin-clinic-nagpur-manish-nagar/gynecologist-obstetrician-ps-20",
} as const;

export const navigation = [
  { label: "Care", href: "#care" },
  { label: "Doctors", href: "#doctors" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const carePathways: readonly CarePathway[] = [
  {
    eyebrow: "Women’s care",
    title: "Thoughtful support for every stage of womanhood.",
    description:
      "Consultation for pregnancy, gynecology, menstrual and hormonal concerns, and routine women’s wellness.",
    services: [
      "Pregnancy & antenatal care",
      "Gynecology consultation",
      "PCOS & hormonal concerns",
      "Women’s wellness",
    ],
    tone: "women",
  },
  {
    eyebrow: "Child & newborn care",
    title: "Steady guidance from the earliest days onward.",
    description:
      "Pediatric and newborn support focused on wellness, vaccination guidance, growth monitoring, and evidence-based care.",
    services: [
      "Newborn & infant care",
      "Pediatric consultation",
      "Vaccination guidance",
      "Growth & development monitoring",
    ],
    tone: "child",
  },
];

export const services = [
  {
    number: "01",
    title: "Pregnancy & antenatal care",
    description:
      "Routine pregnancy consultations, maternal wellness guidance, trimester monitoring, and support throughout the pregnancy journey.",
    category: "Women’s care",
  },
  {
    number: "02",
    title: "Gynecology consultation",
    description:
      "Consultation for menstrual concerns, hormonal imbalance, PCOS, and overall women’s health.",
    category: "Women’s care",
  },
  {
    number: "03",
    title: "Pediatric consultation",
    description:
      "Child health consultation for illnesses, nutrition, preventive care, and developmental monitoring.",
    category: "Child care",
  },
  {
    number: "04",
    title: "Newborn & infant care",
    description:
      "Guidance for feeding, early health monitoring, and follow-up support for newborns and infants.",
    category: "Newborn care",
  },
  {
    number: "05",
    title: "Vaccination guidance",
    description:
      "Vaccination planning and follow-up support for preventive child healthcare.",
    category: "Child care",
  },
  {
    number: "06",
    title: "Growth & development",
    description:
      "Regular monitoring of height, weight, and developmental milestones to support healthy child growth.",
    category: "Child care",
  },
  {
    number: "07",
    title: "Sterile ear piercing",
    description:
      "Safe and hygienic ear piercing for infants and children, with care guidance for healing.",
    category: "Child care",
  },
] as const;

export const doctors: readonly Doctor[] = [
  {
    name: "Dr. Sameet Umate",
    initials: "SU",
    image: "/dr-sameet.jpg",
    role: "Consultant Pediatrician & Neonatologist",
    experience: "10+ Years Experience",
    credentials:
      "MBBS, DCH, DNB (Pediatrics), Fellowship in Neonatology, PGPN (Boston, USA)",
    bio: "At Medivin Clinic, we provide pediatric and newborn care with a focus on child wellness, vaccination guidance, growth monitoring, neonatal support, and evidence-based care for infants and children.",
    focus: [
      "Newborn care",
      "Child fever & infection care",
      "Vaccination guidance",
      "Growth & development monitoring",
    ],
    consultations: [
      { location: "Medivin Clinic", hours: "12:00 PM – 2:00 PM, 7:00 PM – 9:00 PM" },
      { location: "Shridha Hospital", hours: "2:00 PM – 3:00 PM" },
      { location: "Taywade Hospital", hours: "By appointment" },
    ],
    tone: "child",
  },
  {
    name: "Dr. Shweta Lodhi Umate",
    initials: "SLU",
    image: "/dr-shweta.jpeg",
    role: "Consultant Obstetrician & Gynaecologist & General Practitioner",
    experience: "10+ Years Experience",
    credentials: "MBBS, DGO, DRM",
    bio: "At Medivin Clinic, we provide women’s healthcare with a focus on obstetrics, gynecology, pregnancy care, menstrual and hormonal concerns, and routine consultations.",
    focus: [
      "Pregnancy care",
      "Gynecology consultation",
      "PCOS & hormonal concerns",
      "Women’s wellness",
    ],
    consultations: [
      { location: "Medivin Clinic", hours: "12:00 PM – 2:00 PM by appointment, 7:00 PM – 9:00 PM" },
      { location: "Infinity Clinic", hours: "By appointment" },
      { location: "Raut Hospital", hours: "11:00 AM – 2:00 PM by appointment" },
    ],
    tone: "women",
  },
];

export const journey = [
  "Women’s health and pregnancy consultation",
  "Pregnancy follow-up and maternal support",
  "Postnatal transition and newborn guidance",
  "Pediatric consultation and child wellness follow-up",
  "Vaccination and growth monitoring support",
] as const;

export const reviews = [
  "Very polite doctor and explains everything clearly. Highly recommended.",
  "Best pediatric care. Very friendly and supportive doctor.",
  "Excellent experience. Doctor listens carefully and gives proper guidance.",
] as const;

export const faqs = [
  {
    question: "Do you provide standard newborn and child vaccinations at the clinic?",
    answer:
      "Yes, we provide vaccination guidance and support for newborns and children.",
  },
  {
    question: "Which doctors are available at the clinic?",
    answer:
      "Dr. Sameet Umate is available for pediatric care and Dr. Shweta Lodhi Umate is available for gynecology and obstetrics.",
  },
  {
    question: "Do I need an appointment before visiting?",
    answer:
      "Yes, appointments are recommended for a smooth consultation experience.",
  },
  {
    question: "Where is Medivin Clinic located?",
    answer: "Medivin Clinic is located in Manish Nagar, Nagpur.",
  },
] as const;

export const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinic.name,
  description:
    "Mother and child clinic providing women’s health, pregnancy, newborn, and pediatric consultation support in Manish Nagar, Nagpur.",
  url: clinic.website,
  telephone: clinic.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nagpur",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  medicalSpecialty: ["Gynecologic", "Obstetric", "Pediatric"],
  employee: doctors.map((doctor) => ({
    "@type": "Physician",
    name: doctor.name,
    description: doctor.role,
  })),
};
