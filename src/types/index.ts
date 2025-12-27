// Resume & Job Analysis Types

export interface ResumeSection {
  id: string;
  type: 'summary' | 'experience' | 'projects' | 'skills' | 'education';
  title: string;
  content: string;
  bullets?: string[];
}

export interface Resume {
  id: string;
  name: string;
  sections: ResumeSection[];
  rawText: string;
  createdAt: string;
  updatedAt: string;
}

export interface ResumeVersion {
  id: string;
  name: string;
  resumeId: string;
  sections: ResumeSection[];
  createdAt: string;
  targetJob?: string;
}

export interface AnalysisResult {
  matchScore: number;
  missingKeywords: string[];
  strengths: string[];
  atsIssues: string[];
  analyzedAt: string;
}

export interface BulletSuggestion {
  id: string;
  sectionId: string;
  original: string;
  improved: string;
  reason: string;
  applied: boolean;
}

export interface TailoredResumeResponse {
  suggestions: BulletSuggestion[];
  improvedSections: ResumeSection[];
  summary: string;
}

export interface JobDescription {
  id: string;
  title: string;
  company: string;
  content: string;
  keywords: string[];
}

// UI State Types
export interface LoadingState {
  isAnalyzing: boolean;
  isTailoring: boolean;
  isSaving: boolean;
  isExporting: boolean;
}

export interface AppState {
  resumeText: string;
  jobDescription: string;
  analysisResult: AnalysisResult | null;
  tailoredResult: TailoredResumeResponse | null;
  versions: ResumeVersion[];
  currentVersion: ResumeVersion | null;
  loading: LoadingState;
}

// Pricing Types
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: 'month' | 'year' | 'one-time';
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

// FAQ Types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
