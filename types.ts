
export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}

export interface CareerPath {
  role: string;
  description: string;
  salary: string;
  growth: string;
}

export interface NavLink {
  label: string;
  href: string;
}
