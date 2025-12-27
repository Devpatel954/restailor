import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/layout/Navbar';
import { Wand2, Download, Save, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  { id: 'summary', title: 'Professional Summary', content: 'Results-driven Full Stack Engineer with 5+ years of experience building scalable web applications.' },
  { id: 'experience', title: 'Experience', content: 'Senior Software Engineer | TechCorp Inc.\n• Developed web applications using React\n• Led a team of developers' },
  { id: 'projects', title: 'Projects', content: 'E-commerce Platform\n• Built a full-stack e-commerce application\n• Implemented payment processing with Stripe' },
  { id: 'skills', title: 'Skills', content: 'JavaScript, Python, SQL, React, Node.js, AWS, Git' },
];

const Editor = () => {
  const { toast } = useToast();
  const [editableSections, setEditableSections] = useState(sections);
  const [generating, setGenerating] = useState<string | null>(null);

  const updateSection = (id: string, content: string) => {
    setEditableSections(prev => prev.map(s => s.id === id ? { ...s, content } : s));
  };

  const handleGenerate = async (id: string) => {
    setGenerating(id);
    await new Promise(r => setTimeout(r, 1500));
    toast({ title: 'Suggestions generated!' });
    setGenerating(null);
  };

  const handleExport = () => {
    toast({ title: 'Resume exported as DOCX!' });
  };

  const handleSave = () => {
    toast({ title: 'Version saved!' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Button asChild variant="ghost" size="sm" className="mb-2">
              <Link to="/app"><ArrowLeft className="h-4 w-4 mr-2" />Back to Workspace</Link>
            </Button>
            <h1 className="font-display text-3xl font-bold text-foreground">Resume Editor</h1>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={handleSave}><Save className="h-4 w-4 mr-2" />Save Version</Button>
            <Button onClick={handleExport}><Download className="h-4 w-4 mr-2" />Export DOCX</Button>
          </div>
        </div>

        <div className="space-y-6 max-w-4xl">
          {editableSections.map((section) => (
            <Card key={section.id} className="shadow-card">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                  <Button size="sm" variant="secondary" onClick={() => handleGenerate(section.id)} disabled={generating === section.id}>
                    <Wand2 className="h-4 w-4 mr-2" />
                    {generating === section.id ? 'Generating...' : 'Improve'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={section.content}
                  onChange={(e) => updateSection(section.id, e.target.value)}
                  className="min-h-[120px] resize-none"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Editor;
