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
import { useEffect, useState, use } from "react";

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
    setDescription(data.description);
    setIsPublic(data.isPublic);
    setSubject(data.subject);
  };

  useEffect(() => {
    getDeckInformation();
  });

  return (
    <div>
      <h2>Edit Deck</h2>
      <Accordion type="single" collapsible className="max-w-96">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h2>Deck Information</h2>
          </AccordionTrigger>
          <AccordionContent>
            <form className="flex flex-col gap-4 ">
              <div>
                <Label>Name</Label>
                <Input type="text" value={name} />
              </div>
              <div>
                <Label>Description</Label>
                <Input type="text" value={description} />
              </div>
              <div>
                <Label>Subject</Label>
                <Input type="text" value={subject} />
              </div>
              <div>
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
