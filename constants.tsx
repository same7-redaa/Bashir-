import React from 'react';
import type { Skill, Service, PortfolioItem, SocialLink, Language } from './types';

// Professional SVG Icons as React Components

const FilmIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const VideoEditIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
  </svg>
);

const StorytellingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
  </svg>
);

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);


const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.117 0-3.486.012-4.695.068-2.61.12-3.839 1.353-3.958 3.958-.056 1.209-.068 1.578-.068 4.695s.012 3.486.068 4.695c.12 2.606 1.349 3.838 3.958 3.958 1.209.056 1.578.068 4.695.068s3.486-.012 4.695-.068c2.606-.12 3.838-1.349 3.958-3.958.056-1.209.068-1.578.068-4.695s-.012-3.486-.068-4.695c-.12-2.606-1.349-3.838-3.958-3.958-1.209-.056-1.578-.068-4.695-.068zM12 6.864a5.136 5.136 0 100 10.272 5.136 5.136 0 000-10.272zm0 8.832a3.696 3.696 0 110-7.392 3.696 3.696 0 010 7.392zm4.965-8.12a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"/>
    </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
);

const VimeoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197a315.065 315.065 0 0 0 4.192-3.741C5.678 2.287 6.61 1.686 7.508 1.686c2.104-.198 3.405 1.236 3.405 4.301 0 .515-.046 1.178-.138 1.981-.434 4.394-.808 6.721-.808 6.721.434-.887 1.36-2.435 2.774-4.642 1.227-1.906 1.849-3.142 1.879-3.708.059-1.329-.946-1.995-3.015-1.995-.537 0-1.108.116-1.718.345 1.965-6.426 5.718-9.541 11.267-9.34 4.108.149 6.049 2.786 5.825 7.067z"/>
    </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);

// Data
export const SKILLS: Skill[] = [
  { name: 'Photography and Cinematography', percentage: 95 },
  { name: 'Video Editing and Color Grading', percentage: 90 },
  { name: 'Content Strategy and Storytelling', percentage: 85 },
];

export const LANGUAGES: Language[] = [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Professional' }
];

export const SERVICES: Service[] = [
  {
    icon: FilmIcon,
    title: 'Visual Content Production',
    description: 'Specializing in commercial visual content, event coverage, and collaborating with creative teams.',
  },
  {
    icon: VideoEditIcon,
    title: 'Documentary Filmmaking',
    description: 'Creating impactful documentary video content for prominent organizations like WHO and WFP.',
  },
  {
    icon: StorytellingIcon,
    title: 'Creative Collaboration',
    description: 'Working with diverse clients including Geant Hypermarket and Birniq Airways to bring their stories to life.',
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  { 
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop&crop=center', 
    title: 'WHO Event Coverage', 
    category: 'Documentary',
    description: 'Professional event documentation for World Health Organization projects and health initiatives.'
  },
  { 
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center', 
    title: 'WFP Documentary', 
    category: 'Documentary',
    description: 'Impactful storytelling for World Food Programme initiatives and humanitarian work.'
  },
  { 
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center', 
    title: 'Geant Hypermarket Commercial', 
    category: 'Commercial',
    description: 'Creative commercial content for retail marketing campaigns and brand promotion.'
  },
  { 
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop&crop=center', 
    title: 'Birniq Airways Campaign', 
    category: 'Commercial',
    description: 'Aviation industry promotional content and brand storytelling for airline marketing.'
  },
  { 
    image: 'https://images.unsplash.com/photo-1489599735734-79b4b9da6dc4?w=600&h=400&fit=crop&crop=center', 
    title: 'Personal Short Film', 
    category: 'Creative',
    description: 'Artistic expression through personal narrative filmmaking and creative storytelling.'
  },
  { 
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center', 
    title: 'Training Documentation', 
    category: 'Corporate',
    description: 'Educational and training content for professional development and corporate communications.'
  },
  { 
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&crop=center', 
    title: 'Healthcare Documentary Series', 
    category: 'Documentary',
    description: 'Multi-part documentary series covering healthcare initiatives and medical breakthroughs.'
  },
  { 
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&crop=center', 
    title: 'Tech Startup Promotional Video', 
    category: 'Commercial',
    description: 'Dynamic promotional content for emerging technology companies and startups.'
  },
  { 
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop&crop=center', 
    title: 'Art Installation Film', 
    category: 'Creative',
    description: 'Experimental film capturing the essence of contemporary art installations.'
  },
  { 
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center', 
    title: 'Corporate Values Video', 
    category: 'Corporate',
    description: 'Internal communications video showcasing company culture and corporate values.'
  },
  { 
    image: 'https://images.unsplash.com/photo-1478720568477-b0861e7b21e5?w=600&h=400&fit=crop&crop=center', 
    title: 'Environmental Documentary', 
    category: 'Documentary',
    description: 'Environmental awareness documentary highlighting climate change and conservation efforts.'
  },
  { 
    image: 'https://images.unsplash.com/photo-1611095973362-1771d2c97609?w=600&h=400&fit=crop&crop=center', 
    title: 'Fashion Brand Campaign', 
    category: 'Commercial',
    description: 'High-fashion commercial campaign featuring creative cinematography and styling.'
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'Instagram', icon: InstagramIcon, url: 'https://instagram.com/bashir_garguom' },
    { name: 'YouTube', icon: YoutubeIcon, url: 'https://youtube.com/@bashirgarguom' },
    { name: 'Vimeo', icon: VimeoIcon, url: 'https://vimeo.com/bashirgarguom' },
    { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com/in/bashir-garguom' },
];