// import { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "../client";
import type { Database } from "@/types/supabase";

type Deck = Database["public"]["Tables"]["decks"]["Row"];
type FlashCard = Database["public"]["Tables"]["flashcards"]["Row"];
type Count = { flashcards: { count: number }[] };
export type DeckCount = Deck & Count;

export const getDeckFlashCards = async (deck_id: string) => {
  const client = createClient();

  //   const user = await client.auth.getUser();

  const { data, error } = await client
    .from("flashcards")
    .select("*")
    .eq("deck_id", deck_id);

  if (error) {
    throw new Error(error.message);
  }

  return data as FlashCard[];
};

export const addFlashCard = async (
  deck_id: string,
  front: string,
  back: string,
  imageURL: string | null
) => {
  const supabase = createClient();

  //   const user = supabase.auth.getUser();

  const { error } = await supabase
    .from("flashcards")
    .insert({ front, back, image_url: imageURL, deck_id });

  if (error) {
    alert("Failed to insert flashcard");
    console.log(error);
  } else {
    alert("Flashcard updated");
  }
};
