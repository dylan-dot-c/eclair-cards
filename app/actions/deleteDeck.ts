"use server";

// import { createServerClient } from "@supabase/auth-helpers-nextjs";
// import { createClient } from "";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function deleteDeck(deckId: string) {
  const supabase = await createClient();

  // Delete row from Supabase
  await supabase.from("decks").delete().eq("deck_id", deckId);
  console.error("DELETING DATA");

  // Refresh the UI
  revalidatePath("/dashboard");
}
