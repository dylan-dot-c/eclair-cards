import { Button } from "./ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Search, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Master Any Subject with Flashcards
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create, study, and share flashcards. Learn faster with our simple
              and effective spaced repetition system.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Create Your First Flashcard
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              Browse Public Cards
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Easy Creation</h3>
                <p className="text-sm text-muted-foreground">
                  Create flashcards in seconds with our intuitive interface
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Smart Study</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive cards with flip animations for better retention
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Public Library</h3>
                <p className="text-sm text-muted-foreground">
                  Access 300 public flashcards from the community
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
