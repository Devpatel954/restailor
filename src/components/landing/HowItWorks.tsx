import { Upload, Wand2, Send } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    step: '01',
    title: 'Upload Your Resume',
    description: 'Paste your resume text or upload a PDF. Our parser extracts all the important details automatically.',
  },
  {
    icon: Wand2,
    step: '02',
    title: 'Add Job Description',
    description: 'Paste the job posting you\'re targeting. Our AI analyzes the requirements and keywords.',
  },
  {
    icon: Send,
    step: '03',
    title: 'Get Tailored Results',
    description: 'Receive a match score, missing keywords, and AI-powered suggestions to optimize your resume.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your resume into a job-winning document
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative group h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-px bg-border" />
              )}

              <div className="relative bg-card rounded-2xl p-8 shadow-card hover-lift border border-border h-full flex flex-col">
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-base">
                  <step.icon className="h-7 w-7 text-accent" />
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
