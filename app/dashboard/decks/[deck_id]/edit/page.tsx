"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState, use, FormEvent } from "react";

type Props = {
  params: Promise<{ deck_id: string }>;
};

const Page = ({ params }: Props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  // const [loading, setLoading] = useState(false);
  const { deck_id } = use(params);

  const supabase = createClient();

  const getDeckInformation = async () => {
    const { data, error } = await supabase
      .from("decks")
      .select("*")
      .eq("deck_id", deck_id)
      .single();

    if (error) {
      alert("Failed to fetch data!!");
      return;
    }

    console.log(data, error);
    setName(data.name);
    setDescription(data.description ?? "");
    setIsPublic(data.isPublic);
    setSubject(data.subject ?? "");
  };

  useEffect(() => {
    getDeckInformation();
  }, [deck_id]);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setSaving(true); // Add loading state

    try {
      const { data, error } = await supabase
        .from("decks")
        .update({
          name,
          description,
          subject,
          is_public: isPublic,
        })
        .eq("deck_id", deck_id) // Changed from "deck_id" to "id"
        .select() // Add this to return updated data
        .single();

      if (error) throw error;

      alert("✓ Changes saved successfully!");
      console.log("Updated data:", data);
    } catch (error) {
      console.error("Save error:", error);
      alert("Failed to save changes: " + (error as Error).message);
    } finally {
      // setSaving(false);
    }
  };

  return (
    <div>
      <h2>Edit Deck</h2>
      <Accordion type="single" collapsible className="max-w-96">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h2>Deck Information</h2>
          </AccordionTrigger>
          <AccordionContent>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => handleFormSubmit(e)}
            >
              <div>
                <Label>Name</Label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name of deck"
                />
              </div>
              <div>
                <Label>Description</Label>
                <Input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter Deck Description"
                />
              </div>
              <div>
                <Label>Subject</Label>
                <Input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter subject/class of deck"
                />
              </div>
              <div className="flex gap-2 items-center">
                <Checkbox checked={isPublic} />
                <Label>Make Public</Label>
              </div>
              <Button type="submit">Save Changes</Button>
            </form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <p>{deck_id}</p>
    </div>
  );
};

export default Page;
