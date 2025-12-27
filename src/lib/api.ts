import type {
  AnalysisResult,
  TailoredResumeResponse,
  BulletSuggestion,
  ResumeVersion,
  ResumeSection,
} from '@/types';

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock Analysis Response
const mockAnalysisResult: AnalysisResult = {
  matchScore: 72,
  missingKeywords: [
    'Kubernetes',
    'CI/CD',
    'Agile',
    'TypeScript',
    'GraphQL',
    'AWS Lambda',
  ],
  strengths: [
    'Strong experience with React and modern JavaScript frameworks',
    'Demonstrated leadership in cross-functional teams',
    'Proven track record of delivering scalable solutions',
    'Experience with cloud infrastructure and microservices',
  ],
  atsIssues: [
    'Resume exceeds recommended 2-page limit',
    'Missing quantifiable metrics in 3 bullet points',
    'Job title format inconsistent across positions',
    'Skills section could be better organized by category',
  ],
  analyzedAt: new Date().toISOString(),
};

// Mock Tailored Resume Response
const mockTailoredResponse: TailoredResumeResponse = {
  suggestions: [
    {
      id: 'sug-1',
      sectionId: 'exp-1',
      original: 'Developed web applications using React',
      improved: 'Architected and deployed 5+ production React applications serving 100K+ monthly active users, reducing load times by 40% through code splitting and lazy loading',
      reason: 'Added quantifiable metrics and specific technical achievements',
      applied: false,
    },
    {
      id: 'sug-2',
      sectionId: 'exp-1',
      original: 'Worked with backend team on APIs',
      improved: 'Collaborated with backend engineers to design RESTful APIs and implement GraphQL endpoints, improving data fetching efficiency by 60%',
      reason: 'Added specific technologies and measurable impact',
      applied: false,
    },
    {
      id: 'sug-3',
      sectionId: 'exp-1',
      original: 'Led a team of developers',
      improved: 'Led a cross-functional team of 8 developers in Agile sprints, delivering features 2 weeks ahead of schedule while maintaining 95% test coverage',
      reason: 'Quantified team size and added methodology keywords',
      applied: false,
    },
    {
      id: 'sug-4',
      sectionId: 'exp-2',
      original: 'Managed cloud infrastructure',
      improved: 'Orchestrated AWS cloud infrastructure including EC2, S3, and Lambda, reducing monthly costs by $15K through optimization and auto-scaling',
      reason: 'Added specific AWS services and cost savings metrics',
      applied: false,
    },
    {
      id: 'sug-5',
      sectionId: 'skills',
      original: 'JavaScript, Python, SQL',
      improved: 'TypeScript, JavaScript (ES6+), Python, SQL, GraphQL, REST APIs',
      reason: 'Added missing keywords from job description',
      applied: false,
    },
  ],
  improvedSections: [
    {
      id: 'summary',
      type: 'summary',
      title: 'Professional Summary',
      content: 'Results-driven Full Stack Engineer with 5+ years of experience building scalable web applications using React, TypeScript, and Node.js. Proven track record of leading Agile teams and delivering high-impact solutions that drive business growth. Passionate about clean code, performance optimization, and mentoring junior developers.',
    },
    {
      id: 'exp-1',
      type: 'experience',
      title: 'Senior Software Engineer',
      content: 'TechCorp Inc. | 2021 - Present',
      bullets: [
        'Architected and deployed 5+ production React applications serving 100K+ monthly active users',
        'Led a cross-functional team of 8 developers in Agile sprints, delivering features 2 weeks ahead of schedule',
        'Collaborated with backend engineers to design RESTful APIs and implement GraphQL endpoints',
        'Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 70%',
      ],
    },
  ],
  summary: 'Your resume has been tailored to better match the job description. We\'ve added relevant keywords, quantified your achievements, and restructured bullet points for maximum ATS compatibility.',
};

// API Service Layer
export const api = {
  // Analyze resume against job description
  async analyzeMatch(resumeText: string, jobDescription: string): Promise<AnalysisResult> {
    await delay(2000); // Simulate API call
    
    // In production, this would call: POST /api/analyze
    console.log('Analyzing resume...', { resumeLength: resumeText.length, jobLength: jobDescription.length });
    
    // Return mock data with slight randomization
    return {
      ...mockAnalysisResult,
      matchScore: Math.floor(Math.random() * 20) + 65, // 65-85
      analyzedAt: new Date().toISOString(),
    };
  },

  // Tailor resume to job description
  async tailorResume(resumeText: string, jobDescription: string): Promise<TailoredResumeResponse> {
    await delay(3000); // Simulate longer API call
    
    // In production, this would call: POST /api/tailor
    console.log('Tailoring resume...', { resumeLength: resumeText.length, jobLength: jobDescription.length });
    
    return mockTailoredResponse;
  },

  // Generate improved bullets for a section
  async generateBullets(sectionId: string, content: string): Promise<BulletSuggestion[]> {
    await delay(1500);
    
    // In production, this would call: POST /api/generate-bullets
    console.log('Generating bullets for section:', sectionId);
    
    return mockTailoredResponse.suggestions.filter(s => s.sectionId === sectionId);
  },

  // Save resume version
  async saveVersion(version: Omit<ResumeVersion, 'id' | 'createdAt'>): Promise<ResumeVersion> {
    await delay(500);
    
    // In production, this would call: POST /api/versions
    console.log('Saving version:', version.name);
    
    return {
      ...version,
      id: `ver-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
  },

  // Get all versions
  async getVersions(resumeId: string): Promise<ResumeVersion[]> {
    await delay(300);
    
    // In production, this would call: GET /api/versions/:resumeId
    console.log('Fetching versions for resume:', resumeId);
    
    // Return mock versions
    return [
      {
        id: 'ver-1',
        name: 'Google SWE v1',
        resumeId,
        sections: mockTailoredResponse.improvedSections,
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        targetJob: 'Software Engineer at Google',
      },
      {
        id: 'ver-2',
        name: 'Meta Frontend v1',
        resumeId,
        sections: mockTailoredResponse.improvedSections,
        createdAt: new Date(Date.now() - 172800000).toISOString(),
        targetJob: 'Frontend Engineer at Meta',
      },
    ];
  },

  // Restore a version
  async restoreVersion(versionId: string): Promise<ResumeVersion> {
    await delay(300);
    
    // In production, this would call: POST /api/versions/:versionId/restore
    console.log('Restoring version:', versionId);
    
    return {
      id: versionId,
      name: 'Restored Version',
      resumeId: 'resume-1',
      sections: mockTailoredResponse.improvedSections,
      createdAt: new Date().toISOString(),
    };
  },

  // Export resume as DOCX (mock)
  async exportDocx(sections: ResumeSection[]): Promise<Blob> {
    await delay(1000);
    
    // In production, this would call: POST /api/export/docx
    console.log('Exporting resume as DOCX...', sections.length, 'sections');
    
    // Return a mock blob
    const content = sections.map(s => `${s.title}\n${s.content}\n${s.bullets?.join('\n') || ''}`).join('\n\n');
    return new Blob([content], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  },
};

export default api;
