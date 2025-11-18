import { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "../client";
import type { Database } from "@/types/supabase";

type Deck = Database["public"]["Tables"]["decks"]["Row"];
type Count = { flashcards: { count: number }[] };
export type DeckCount = Deck & Count;

export const getUserDecks = async (
  supabase: SupabaseClient<Database>,
  userId: string
) => {
  supabase = createClient();

  //   gets cards in latest to newest order
  const { data, error } = await supabase
    .from("decks")
    .select(`*, flashcards(count)`)
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    alert(error);
    throw error;
  }

  return data as DeckCount[];
};

export const getAllPublicDecks = async (supabase: SupabaseClient<Database>) => {
  const { data, error } = await supabase
    .from("decks")
    .select(`*, flashcards(count)`)
    .eq("is_public", true)
    .order("created_at", { ascending: true })
    .limit(20);

  if (error) {
    console.log(error);
    throw error;
  }

  return data as DeckCount[];
};

export const getDeckInformation = async (
  supabase: SupabaseClient<Database>,
  deck_id: string
) => {
  const { data, error } = await supabase
    .from("decks")
    .select("*")
    .eq("deck_id", deck_id)
    .single();

  if (error) {
    alert("Failed to fetch data!!");
    return;
  }

  return data;
};

export const deleteDeck = async (
  supabase: SupabaseClient<Database>,
  deck_id: string
) => {
  const response = await supabase.from("decks").delete().eq("deck_id", deck_id);

  return response.status;
};
