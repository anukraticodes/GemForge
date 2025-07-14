import { Header } from "@/components/layout/Header";
import { FirestoreRulesGenerator } from "@/components/forms/FirestoreRulesGenerator";

export default function RulesPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Firestore Rules Generator</h1>
        <FirestoreRulesGenerator />
      </main>
    </>
  );
}
