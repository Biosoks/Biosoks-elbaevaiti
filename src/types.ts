export interface QuizAnswer {
  id: string;
  text: string;
  priceModifier: number;
  icon?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  type: 'select' | 'input' | 'range';
  options?: QuizAnswer[];
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  fieldName?: string;
}

export interface BoilerComponent {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  x: number; // percentage coordinate on schema
  y: number; // percentage coordinate on schema
  savingsPercent: number;
}

export interface ProjectDetails {
  id: string;
  title: string;
  power: string;
  savings: string;
  payback: string;
  controllers: string;
  description: string;
  image: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  img: string;
  shortDesc: string;
  fullDesc: string;
  bulletPoints: string[];
}
