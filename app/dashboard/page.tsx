import NewDeckModal from "@/components/NewDeckModal";
import UserDecks from "@/components/UserDecks";

import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl">DashBoard</h1>
      <NewDeckModal />

      <hr className="mt-4 border-2 border-slate-300 rounded-full w-3/4 mx-auto" />

      <UserDecks />
    </div>
  );
};

export default page;
