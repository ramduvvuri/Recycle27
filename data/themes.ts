// =============================================================================
// /data/themes.ts — Conference themes
// =============================================================================

import {
  Recycle,
  Droplets,
  Leaf,
  Beaker,
  Globe2,
  Flame,
  Settings,
  Users,
  FileText,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

export interface Theme {
  id: number;
  number: string;
  title: string;
  titleMultiline: string; // \n-separated for compact display
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
      "Advanced strategies for waste minimization, segregation, collection, transportation, treatment, and disposal.",
    icon: Recycle,
  },
  {
    id: 2,
    number: "02",
    title: "Water and Wastewater Treatment, Reuse and Resource Recovery",
    titleMultiline: "Water & Wastewater\nTreatment",
    description:
      "Innovative approaches to water and wastewater treatment, reuse, and resource recovery.",
    icon: Droplets,
  },
  {
    id: 3,
    number: "03",
    title: "Reduce, Reuse, Recycle, Remediation, and Recovery concepts",
    titleMultiline: "Reduce, Reuse,\nRecycle & Recovery",
    description:
      "Circular strategies that keep materials in use and minimize waste at source.",
    icon: Leaf,
  },
  {
    id: 4,
    number: "04",
    title: "Biological Treatment and Bioconversion Technologies",
    titleMultiline: "Biological Treatment\n& Bioconversion",
    description:
      "Composting, anaerobic digestion, bioremediation, and biotechnological approaches to waste treatment.",
    icon: Beaker,
  },
  {
    id: 5,
    number: "05",
    title: "Landfilling, Leachate Management, and Landfill Mining",
    titleMultiline: "Landfilling &\nLeachate Management",
    description:
      "Engineering and environmental management of landfills including leachate treatment and landfill gas.",
    icon: Globe2,
  },
  {
    id: 6,
    number: "06",
    title: "Waste-to-Energy Technologies and Circular Economy",
    titleMultiline: "Waste-to-Energy\n& Circular Economy",
    description:
      "Technologies and policies for energy recovery from waste and circular economic systems.",
    icon: Flame,
  },
  {
    id: 7,
    number: "07",
    title: "Pyrolysis, Gasification, and Thermochemical Conversion Technologies",
    titleMultiline: "Pyrolysis, Gasification\n& Thermochemical\nConversion",
    description:
      "Thermochemical pathways for converting waste to fuels, chemicals, and energy.",
    icon: Settings,
  },
  {
    id: 8,
    number: "08",
    title: "Microplastics and Emerging Pollutants: Fate, Treatment, and Remediation",
    titleMultiline: "Microplastics &\nEmerging Pollutants",
    description:
      "Detection, impact assessment, and mitigation of microplastics and emerging contaminants.",
    icon: Users,
  },
  {
    id: 9,
    number: "09",
    title: "Waste Management Policies, Legislation, Governance, and Sustainability",
    titleMultiline: "Policies, Legislation,\nGovernance &\nSustainability",
    description:
      "Regulatory frameworks, governance models, and sustainability dimensions of waste management.",
    icon: FileText,
  },
  {
    id: 10,
    number: "10",
    title: "Any other issues in waste management",
    titleMultiline: "Other Issues in\nWaste Management",
    description:
      "Emerging and interdisciplinary topics not covered under the above themes.",
    icon: ArrowRight,
  },
];
