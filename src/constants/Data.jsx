import { Truck } from "lucide-react";
import {   ArrowDownUp } from "lucide-react";
import { PackageOpen } from "lucide-react";
// import { ChartColumnIncreasing } from "lucide-react";
import { Ship } from "lucide-react";
import {  Plane } from "lucide-react";
import { TrendingUp } from "lucide-react";

import warehouse from "../assets/warehouse.jpg";
import groundShipping from "../assets/GroundShipping.jpg";
import ship from "../assets/ship.jpg"
import logistics from "../assets/logistics.jpg"
import airShipping from "../assets/air1.jpg"
import exportImport from "../assets/export.jpg"
export const navItems = [
  { label: "Home", href: "#"},
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Products", href: "#" },
  { label: "Certificate", href: "#" },
  { label: "Gallery", href: "#" },
];

export const features = [
  {
    icon:<PackageOpen />,
    img: warehouse,
    text: "Warehousing",
    description:
      "Secure and organized storage solutions to keep your inventory safe and accessible, tailored to meet your specific needs."
  },
  {
    icon: <Plane />,
    img: airShipping,
    text: "Air Delivery",
    
    description:
      "Fast and reliable air freight services for timely deliveries across the globe, ensuring your shipments arrive on schedule.",
  },
  {
    icon:<Ship />,
    img: ship,
    text: "Sea Delivery",
    description:
      "Cost-effective and efficient sea freight solutions for bulk shipments, providing global reach with dependable transit times."
  },
  {
    icon:<Truck />,
    img: groundShipping,
    text: "Ground Shipping",
    description:
      "Flexible and reliable ground transportation options for domestic and regional deliveries, optimizing your supply chain."
  },
  {
    icon:<ArrowDownUp />,
    img: exportImport,
    text:"Export/Import",
    description:
    "Expert handling of export and import processes, ensuring smooth and compliant international trade operations."
  },
  {
    icon:<TrendingUp />,
    img: logistics,
    text: "Logistics",
    description:
      "Streamlined local logistics services to manage and distribute goods efficiently within your region, enhancing operational efficiency."
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
