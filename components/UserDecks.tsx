import { createClient } from "@/lib/supabase/server";
import React from "react";
import NoDecks from "./no-decks";
import { getUserDecks } from "@/lib/supabase/queries/decks";
import Deck from "./Deck";

const UserDecks = async () => {
  // dynamic client since server and client are different
  const supabase = await createClient();
  let decks, errorD;

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log(user);

    if (user) {
      decks = await getUserDecks(supabase, user.id!);
      console.log(decks);
    }
  } catch (error) {
    alert("Failed to get data");
    errorD = error;
  }

  if (errorD) {
    return (
      <section>
        <h1>Error getting data</h1>
      </section>
    );
  }

  if (!decks || decks.length === 0) {
    return (
      <section>
        <NoDecks />
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-4 mt-4">
      {decks.map((deck) => {
        return <Deck key={deck.deck_id} deck={deck} />;
      })}
    </section>
  );
};

export default UserDecks;
