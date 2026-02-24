"use client";

import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
// import { deleteDeck } from "@/lib/supabase/queries/decks";

type Prop = {
  onDelete: () => void;
};
const DeleteDeckButton = ({ onDelete }: Prop) => {
  return (
    <Button
      variant={"destructive"}
      onClick={async () => {
        await onDelete();
      }}
    >
      <Trash2 />
      Delete Deck
    </Button>
  );
};

export default DeleteDeckButton;
