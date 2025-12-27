import { Target, Brain, History, FileDown, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Match Score Analysis',
    description: 'Get an instant score showing how well your resume matches the job. See exactly which keywords you\'re missing.',
  },
  {
    icon: Brain,
    title: 'AI Bullet Rewrites',
    description: 'Transform weak bullet points into powerful achievement statements with quantifiable metrics.',
  },
  {
    icon: Shield,
    title: 'ATS Optimization',
    description: 'Ensure your resume passes Applicant Tracking Systems with format and keyword checks.',
  },
  {
    icon: History,
    title: 'Version Control',
    description: 'Save multiple versions of your resume for different roles. Switch between them instantly.',
  },
  {
    icon: FileDown,
    title: 'Export Anywhere',
    description: 'Download your optimized resume as DOCX or PDF, ready to submit to any job portal.',
  },
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Get comprehensive analysis in under 30 seconds. No waiting, no delays.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need to{' '}
            <span className="text-gradient">Stand Out</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to give you an unfair advantage in your job search
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 lg:p-8 shadow-card hover-lift border border-border"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-base">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
