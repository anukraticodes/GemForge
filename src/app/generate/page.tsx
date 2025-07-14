
"use client";

import { useEffect, useState, useRef } from 'react';
import { Header } from "@/components/layout/Header";
import { PromptInputForm } from "@/components/forms/PromptInputForm";
import { CodeDisplay } from "@/components/display/CodeDisplay";
import { ExamplePrompts } from "@/components/content/ExamplePrompts";
import { Card, CardContent } from "@/components/ui/card";
import { regenerateCodeWithPrompt, type GenerateCodeFormState } from '@/app/actions';
import { useToast } from "@/hooks/use-toast";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { VoicePromptButton } from "@/components/forms/VoicePromptButton";
import { FirestoreRulesGenerator } from "@/components/forms/FirestoreRulesGenerator";

export default function Home() {
  const [selectedFormat, setSelectedFormat] = useState<"html" | "react" | "js">("html");
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPrompt, setCurrentPrompt] = useState<string>(""); // For text area
  const [lastSuccessfulPrompt, setLastSuccessfulPrompt] = useState<string>(""); // For regenerate
  const { toast } = useToast();
  const [history, setHistory] = useState<any[]>([]);

  const handleCodeGenerated = (code: string | null, promptUsed?: string | null) => {
    setGeneratedCode(code);
    if (code && promptUsed) { // Only update lastSuccessfulPrompt on actual success with code
      // Handled by onSuccessfulGeneration
    }
  };

  const handleSuccessfulGeneration = (prompt: string) => {
    setLastSuccessfulPrompt(prompt);
  };

  const handleLoadingChange = (loading: boolean) => {
    setIsLoading(loading);
  };

  const handlePromptSelect = (prompt: string) => {
    setCurrentPrompt(prompt); 
    setLastSuccessfulPrompt(""); // Clear last successful prompt when a new example is selected
    setGeneratedCode(null); // Clear generated code as well
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRegenerate = async () => {
    if (!lastSuccessfulPrompt) {
      toast({
        title: "Cannot Regenerate",
        description: "There is no previous successful prompt to regenerate.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    setGeneratedCode(null); // Clear previous display
    try {
      const newState: GenerateCodeFormState = await regenerateCodeWithPrompt(lastSuccessfulPrompt, selectedFormat);
      setGeneratedCode(newState.generatedCode);
      if (newState.message) {
        toast({
          title: newState.success ? "Code Regenerated!" : "Regeneration Failed",
          description: newState.message,
          variant: newState.success ? "default" : "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error Regenerating",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  // useEffect(() => {
  //   const fetchHistory = async () => {
  //     try {
  //       const q = query(collection(db, "promptHistory"), orderBy("timestamp", "desc"));
  //       const snapshot = await getDocs(q);
  //       const results = snapshot.docs.map(doc => doc.data());
  //       setHistory(results);
  //     } catch (err) {
  //       console.error("Error loading prompt history:", err);
  //     }
  //   };
  
  //   fetchHistory();
  // }, []);
  


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          <Card className="shadow-lg">
            <CardContent className="p-6">
            <div className="mb-4">
  <label htmlFor="format" className="block text-sm font-medium text-foreground mb-2">
    Select Output Format:
  </label>
  <select
    id="format"
    name="format"
    value={selectedFormat}
    onChange={(e) => setSelectedFormat(e.target.value as "html" | "react" | "js")}
    className="w-full md:w-auto border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
  >
    <option value="html">HTML</option>
    <option value="react">React (JSX)</option>
    <option value="js">JavaScript (DOM)</option>
  </select>
</div>
<VoicePromptButton onTranscription={(spoken) => {
  setCurrentPrompt(spoken);
  window.scrollTo({ top: 0, behavior: "smooth" });
}} />

            <PromptInputForm 
  onCodeGenerated={handleCodeGenerated} 
  onLoadingChange={handleLoadingChange}
  initialPrompt={currentPrompt}
  onSuccessfulGeneration={handleSuccessfulGeneration}
  selectedFormat={selectedFormat} // ✅ pass it down
/>


              <ExamplePrompts onPromptSelect={handlePromptSelect} />
            </CardContent>
          </Card>
          
          <Card className="shadow-lg h-full">
            <CardContent className="p-6 h-full flex flex-col">
             <CodeDisplay 
                generatedCode={generatedCode} 
                isLoading={isLoading}
                onRegenerate={handleRegenerate}
                canRegenerate={!!lastSuccessfulPrompt}
              />
            </CardContent>
          </Card>
        </div>
      </main>
      {/* <section className="container mx-auto px-4 md:px-8 mt-8">
  <h2 className="text-lg font-semibold mb-4">Prompt History</h2>
  <div className="space-y-4">
    {history.length === 0 && (
      <p className="text-sm text-muted-foreground">No prompt history found.</p>
    )}
    {history.map((item, index) => (
      <div key={index} className="border border-border rounded-md p-4 bg-muted/40">
        <p className="text-sm text-muted-foreground mb-1">
          <span className="font-medium">Format:</span> {item.format}
        </p>
        <p className="text-sm mb-2"><strong>Prompt:</strong> {item.prompt}</p>
        <pre className="text-xs bg-background border rounded p-2 overflow-x-auto whitespace-pre-wrap">
{item.generatedCode}
        </pre>
      </div>
    ))}
  </div>
</section> */}
{/* <FirestoreRulesGenerator /> */}


      <footer className="py-4 text-center text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} GemForge. Powered by Gemini.
      </footer>
    </div>
  );
}
