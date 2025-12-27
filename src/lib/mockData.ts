import type { PricingPlan, Testimonial, FAQItem } from '@/types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'month',
    features: [
      '3 resume analyses per month',
      'Basic keyword matching',
      'ATS compatibility check',
      'Export to PDF',
    ],
    ctaText: 'Get Started',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 12,
    period: 'month',
    features: [
      'Unlimited resume analyses',
      'AI-powered bullet rewrites',
      'Advanced keyword optimization',
      'Version history (unlimited)',
      'Export to DOCX & PDF',
      'Priority support',
      'Cover letter generation',
    ],
    highlighted: true,
    ctaText: 'Start Free Trial',
  },
  {
    id: 'team',
    name: 'Team',
    price: 29,
    period: 'month',
    features: [
      'Everything in Pro',
      'Up to 5 team members',
      'Shared resume templates',
      'Team analytics dashboard',
      'API access',
      'Dedicated account manager',
    ],
    ctaText: 'Contact Sales',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Software Engineer',
    company: 'Google',
    content: 'ResumeTailor helped me land my dream job at Google. The AI suggestions were incredibly accurate and helped me highlight achievements I hadn\'t thought to emphasize.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    role: 'Product Manager',
    company: 'Stripe',
    content: 'I was skeptical at first, but the match score feature is a game-changer. It showed me exactly what keywords I was missing for each role I applied to.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Data Scientist',
    company: 'Netflix',
    content: 'The version control feature is brilliant. I can tailor my resume for different roles and easily switch between versions. Saved me hours of manual editing.',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'UX Designer',
    company: 'Airbnb',
    content: 'As a designer, I appreciate the clean interface. But more importantly, the ATS optimization insights helped me get past automated filters that were blocking my applications.',
    rating: 5,
  },
];

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'How does the AI analyze my resume?',
    answer: 'Our AI uses advanced natural language processing to compare your resume against job descriptions. It identifies matching skills, missing keywords, and areas for improvement. The analysis considers industry-specific terminology, ATS compatibility, and best practices for resume formatting.',
  },
  {
    id: '2',
    question: 'Is my resume data secure?',
    answer: 'Absolutely. We use bank-level encryption to protect your data. Your resume content is never shared with third parties, and you can delete your data at any time. We\'re GDPR compliant and follow strict data protection protocols.',
  },
  {
    id: '3',
    question: 'What does the match score mean?',
    answer: 'The match score (0-100) indicates how well your resume aligns with a specific job description. A score above 70 typically means you\'re a strong candidate. We also show you exactly which keywords are missing so you can improve your score.',
  },
  {
    id: '4',
    question: 'Can I use ResumeTailor for multiple job applications?',
    answer: 'Yes! That\'s exactly what it\'s designed for. You can save different versions of your resume tailored to specific roles. Our Pro plan includes unlimited version history, so you never lose a perfectly optimized resume.',
  },
  {
    id: '5',
    question: 'How accurate are the AI-generated bullet points?',
    answer: 'Our AI suggestions are designed to enhance your existing content, not replace it. Each suggestion maintains your authentic experience while optimizing for impact and keywords. You always have final control over what goes in your resume.',
  },
  {
    id: '6',
    question: 'Do you offer a free trial?',
    answer: 'Yes! Our free plan includes 3 resume analyses per month with basic features. Pro users get a 14-day free trial with full access to all features. No credit card required to start.',
  },
];

export const sampleResumeText = `JOHN DOE
Software Engineer
john.doe@email.com | (555) 123-4567 | linkedin.com/in/johndoe | github.com/johndoe

SUMMARY
Experienced software engineer with 5 years of expertise in full-stack development. Skilled in building scalable web applications and leading technical teams.

EXPERIENCE
Senior Software Engineer | TechCorp Inc.
January 2021 - Present
• Developed web applications using React
• Worked with backend team on APIs
• Led a team of developers
• Improved application performance

Software Engineer | StartupXYZ
June 2018 - December 2020
• Built features for the main product
• Managed cloud infrastructure
• Wrote unit tests and documentation
• Participated in code reviews

PROJECTS
E-commerce Platform
• Built a full-stack e-commerce application
• Implemented payment processing with Stripe
• Designed responsive UI with React

SKILLS
JavaScript, Python, SQL, React, Node.js, AWS, Git

EDUCATION
Bachelor of Science in Computer Science
University of Technology | 2018`;

export const sampleJobDescription = `Software Engineer - Frontend
TechGiant Inc.

About the Role:
We're looking for a talented Frontend Engineer to join our growing team. You'll work on building beautiful, performant user interfaces that millions of people use every day.

Requirements:
• 3+ years of experience with React and TypeScript
• Strong understanding of modern JavaScript (ES6+)
• Experience with GraphQL and REST APIs
• Knowledge of CI/CD pipelines and Agile methodologies
• Familiarity with Kubernetes and cloud platforms (AWS/GCP)
• Experience leading or mentoring other developers

Nice to Have:
• Experience with Next.js or similar frameworks
• Knowledge of testing frameworks (Jest, Cypress)
• Contributions to open source projects

What We Offer:
• Competitive salary and equity
• Flexible remote work policy
• Health, dental, and vision insurance
• Unlimited PTO
• Learning and development budget`;
