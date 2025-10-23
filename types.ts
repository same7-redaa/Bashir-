// Fix: Import `ComponentType` to resolve `React` namespace error.
import type { ComponentType } from 'react';

export interface Skill {
  name: string;
  percentage: number;
}

export interface Language {
  name: string;
  level: string;
}

export interface Service {
  // Fix: Use `ComponentType` directly.
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface PortfolioItem {
  image: string;
  title: string;
  category: string;
  description?: string;
}

export interface SocialLink {
    name: string;
    // Fix: Use `ComponentType` directly.
    icon: ComponentType<{ className?: string }>;
    url: string;
}