// =============================================================================
// /data/themes.ts — Official Conference Themes for RECYCLE 2027
// Source of Truth: Themes and Tentative Schedule.docx (Eight Official Themes)
// =============================================================================

import {
  Recycle,
  Droplets,
  Leaf,
  Beaker,
  Globe2,
  Flame,
  Filter,
  Cpu,
  type LucideIcon,
} from "lucide-react";

export interface Theme {
  id: number;
  number: string;
  title: string;
  titleMultiline: string; // \n-separated for compact card display
  description: string;
  icon: LucideIcon;
}

export const themes: Theme[] = [
  {
    id: 1,
    number: "01",
    title: "Solid Waste Management: Generation, Collection, Segregation, Storage, and Transportation",
    titleMultiline: "Solid Waste\nManagement",
    description:
      "Advanced strategies for waste minimization, source segregation, smart collection, storage logistics, and transportation.",
    icon: Recycle,
  },
  {
    id: 2,
    number: "02",
    title: "Water and Wastewater Treatment, Reuse, and Resource Recovery",
    titleMultiline: "Water & Wastewater\nTreatment",
    description:
      "Innovative methodologies for industrial and municipal wastewater reclamation, nutrient recovery, and circular reuse.",
    icon: Droplets,
  },
  {
    id: 3,
    number: "03",
    title: "Reduce, Reuse, Recycling, Resource Recovery, Carbon Sequestration, and Circular Economy",
    titleMultiline: "Circular Economy &\nCarbon Sequestration",
    description:
      "Holistic material recycling, industrial symbiosis, carbon sequestration, and closed-loop circular economic systems.",
    icon: Leaf,
  },
  {
    id: 4,
    number: "04",
    title: "Biological Treatment and Bioconversion Technologies",
    titleMultiline: "Biological Treatment\n& Bioconversion",
    description:
      "Composting, anaerobic digestion, microbial bioremediation, and bioconversion of organic waste to high-value biochemicals.",
    icon: Beaker,
  },
  {
    id: 5,
    number: "05",
    title: "Landfilling, Leachate Management, and Landfill Mining",
    titleMultiline: "Landfilling &\nLeachate Management",
    description:
      "Engineered containment, landfill barrier design, leachate treatment, landfill gas recovery, and circular landfill mining.",
    icon: Globe2,
  },
  {
    id: 6,
    number: "06",
    title: "Pyrolysis, Gasification, Incineration, and Thermochemical Conversion Technologies",
    titleMultiline: "Pyrolysis, Gasification\n& Incineration",
    description:
      "High-efficiency thermochemical pathways converting solid waste and biomass into clean syngas, biochar, and energy.",
    icon: Flame,
  },
  {
    id: 7,
    number: "07",
    title: "Microplastics and Emerging Pollutants: Fate, Treatment, and Remediation",
    titleMultiline: "Microplastics &\nEmerging Pollutants",
    description:
      "Environmental fate, toxicological impacts, analytical detection, advanced oxidation, and remediation of emerging contaminants.",
    icon: Filter,
  },
  {
    id: 8,
    number: "08",
    title: "Integration of Artificial Intelligence, Machine Learning, and Digital Technologies in Waste Management",
    titleMultiline: "AI, Machine Learning\n& Digital Technologies",
    description:
      "Artificial intelligence, machine learning algorithms, IoT telemetry, robotics, and smart digital systems in modern waste management.",
    icon: Cpu,
  },
];
