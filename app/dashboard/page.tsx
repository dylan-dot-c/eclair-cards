import NewDeckModal from "@/components/NewDeckModal";
import NoDecks from "@/components/no-decks";

import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl">DashBoard</h1>
      <NewDeckModal />

      <hr className="mt-4 border-2 border-slate-300 rounded-full w-3/4 mx-auto" />

      <NoDecks />
    </div>
  );
};

export default page;
