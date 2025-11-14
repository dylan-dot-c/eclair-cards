"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { createClient } from "@/lib/supabase/client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PlusCircle } from "lucide-react";

const NewDeckModal = () => {
  const [name, setName] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const supabase = createClient();
  const router = useRouter();

  // Fetch user on mount
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUser(user?.id);
      }
    };
    getUser();
  }, [supabase.auth]);

  const createNewDeck = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form default submission

    if (!name.trim()) {
      alert("Please enter a deck name");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from("decks")
      .insert({
        name: name.trim(),
        user_id: user,
        is_public: isPublic,
      })
      .select()
      .single();

    setLoading(false);

    if (error) {
      console.error("Error creating deck:", error);
      alert("Failed to create deck: " + error.message);
      return;
    }

    console.log("Deck created:", data);

    // Close modal
    setOpen(false);

    // Reset form
    setName("");
    setIsPublic(false);

    // Redirect to edit page
    router.push(`dashboard/decks/${data.deck_id}/edit`);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant={"outline"}>
          <PlusCircle />
          Create New Deck
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={createNewDeck}>
          <DialogHeader>
            <DialogTitle>New Deck</DialogTitle>
            <DialogDescription>
              Create a new flashcard deck to start learning.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="deck-name">Name Of Deck *</Label>
              <Input
                id="deck-name"
                type="text"
                placeholder="e.g. French Flashcards"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div className="flex gap-2 items-center">
              <Checkbox
                id="ispublic"
                checked={isPublic}
                onCheckedChange={(checked) => setIsPublic(checked as boolean)}
              />
              <Label htmlFor="ispublic">Make Public</Label>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={loading || !name.trim()}>
              {loading ? "Creating..." : "Create Deck"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewDeckModal;
