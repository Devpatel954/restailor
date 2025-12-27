import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { api } from '@/lib/api';
import { sampleResumeText, sampleJobDescription } from '@/lib/mockData';
import type { AnalysisResult, TailoredResumeResponse } from '@/types';
import Navbar from '@/components/layout/Navbar';
import { Upload, FileText, Wand2, Target, AlertTriangle, CheckCircle, Copy, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Workspace = () => {
  const { toast } = useToast();
  const [resumeText, setResumeText] = useState(sampleResumeText);
  const [jobDescription, setJobDescription] = useState(sampleJobDescription);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isTailoring, setIsTailoring] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [tailored, setTailored] = useState<TailoredResumeResponse | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!resumeText.trim() || !jobDescription.trim()) {
      toast({ title: 'Please fill in both fields', variant: 'destructive' });
      return;
    }
    setIsAnalyzing(true);
    try {
      const result = await api.analyzeMatch(resumeText, jobDescription);
      setAnalysis(result);
      toast({ title: 'Analysis complete!' });
    } catch {
      toast({ title: 'Analysis failed', variant: 'destructive' });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleTailor = async () => {
    if (!resumeText.trim() || !jobDescription.trim()) {
      toast({ title: 'Please fill in both fields', variant: 'destructive' });
      return;
    }
    setIsTailoring(true);
    try {
      const result = await api.tailorResume(resumeText, jobDescription);
      setTailored(result);
      toast({ title: 'Resume tailored successfully!' });
    } catch {
      toast({ title: 'Tailoring failed', variant: 'destructive' });
    } finally {
      setIsTailoring(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast({ title: 'Copied to clipboard!' });
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">Resume Workspace</h1>
          <p className="text-muted-foreground">Paste your resume and job description to get started</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Resume Input */}
          <Card className="shadow-card">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileText className="h-5 w-5 text-primary" />
                Your Resume
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="paste">
                <TabsList className="mb-4">
                  <TabsTrigger value="paste">Paste Text</TabsTrigger>
                  <TabsTrigger value="upload">Upload PDF</TabsTrigger>
                </TabsList>
                <TabsContent value="paste">
                  <Textarea
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                    placeholder="Paste your resume here..."
                    className="min-h-[300px] resize-none"
                  />
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-sm text-muted-foreground">{resumeText.split(/\s+/).filter(Boolean).length} words</span>
                    <Button variant="ghost" size="sm" onClick={() => setResumeText('')}>Clear</Button>
                  </div>
                </TabsContent>
                <TabsContent value="upload">
                  <div className="border-2 border-dashed border-border rounded-xl p-12 text-center">
                    <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground mb-2">Drag and drop your PDF here</p>
                    <Button variant="outline" size="sm">Browse Files</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Job Description Input */}
          <Card className="shadow-card">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="h-5 w-5 text-accent" />
                Job Description
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the job description here..."
                className="min-h-[300px] resize-none"
              />
              <div className="flex gap-3 mt-4">
                <Button onClick={handleAnalyze} disabled={isAnalyzing} className="flex-1">
                  {isAnalyzing ? 'Analyzing...' : 'Analyze Match'}
                </Button>
                <Button onClick={handleTailor} disabled={isTailoring} variant="secondary" className="flex-1">
                  <Wand2 className="h-4 w-4 mr-2" />
                  {isTailoring ? 'Tailoring...' : 'Tailor Resume'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Loading State */}
        {(isAnalyzing || isTailoring) && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="shadow-card"><CardContent className="pt-6"><Skeleton className="h-20 w-full" /></CardContent></Card>
            ))}
          </div>
        )}

        {/* Analysis Results */}
        {analysis && !isAnalyzing && (
          <div className="space-y-6 mb-8">
            <h2 className="font-display text-2xl font-bold">Analysis Results</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-2">Match Score</p>
                  <div className="text-3xl font-bold text-foreground mb-2">{analysis.matchScore}%</div>
                  <Progress value={analysis.matchScore} className="h-2" />
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-3">Missing Keywords</p>
                  <div className="flex flex-wrap gap-2">
                    {analysis.missingKeywords.slice(0, 4).map((kw) => (
                      <Badge key={kw} variant="secondary">{kw}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-success" />Strengths</p>
                  <ul className="text-sm space-y-1">{analysis.strengths.slice(0, 2).map((s, i) => <li key={i} className="truncate">{s}</li>)}</ul>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-warning" />ATS Issues</p>
                  <ul className="text-sm space-y-1">{analysis.atsIssues.slice(0, 2).map((s, i) => <li key={i} className="truncate">{s}</li>)}</ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Tailored Suggestions */}
        {tailored && !isTailoring && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold">Bullet Suggestions</h2>
              <Button asChild variant="outline">
                <Link to="/app/editor">Open Editor <ArrowRight className="h-4 w-4 ml-2" /></Link>
              </Button>
            </div>
            <div className="space-y-4">
              {tailored.suggestions.map((sug) => (
                <Card key={sug.id} className="shadow-card">
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground line-through mb-2">{sug.original}</p>
                    <p className="text-foreground font-medium mb-3">{sug.improved}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" onClick={() => copyToClipboard(sug.improved, sug.id)}>
                        {copiedId === sug.id ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        {copiedId === sug.id ? 'Copied' : 'Copy'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Workspace;
