// import NewDeckModal from "@/components/NewDeckModal";
import { Button } from "@/components/ui/button";
import UserDecks from "@/components/UserDecks";

import React from "react";

const page = () => {
  return (
    <div>
      <div className=" flex items-center justify-between w-full">
        <h1 className="text-3xl">DashBoard, Welcome back Dylan</h1>
        <span
          className="bg-yellow-100 rounded-full p-2"
          title="current streak = 0"
        >
          🔥 0
        </span>
      </div>

      <hr className="mt-4 border-2 border-slate-300 rounded-full w-3/4 mx-auto" />

      <section className="grid grid-cols-3 mt-10 gap-4">
        <div className="text-center border border-slate-500 bg-red-500 rounded-xl flex flex-col justify-center items-center ">
          <span className="">Cards Due Today</span> <br />
          <span className="text-6xl rounded-full bg-blue-200 text-white p-3">
            20
          </span>
          <br />
          <Button variant={"secondary"}>Study</Button>
        </div>

        <div className="text-center border border-slate-500 bg-yellow-500 rounded-xl flex flex-col justify-center items-center gap-2">
          <span className="">Number Of Decks</span> <br />
          <span className="text-6xl rounded-full bg-blue-200 text-white p-3">
            20
          </span>
          <br />
          <Button variant={"secondary"}>Create New Deck</Button>
        </div>

        <div className="text-center border border-slate-500 bg-green-500 rounded-xl flex flex-col justify-center items-center gap-2">
          <span className="">Cards Due Today</span> <br />
          <span className="text-6xl rounded-full bg-blue-200 text-white p-3">
            20
          </span>
          <br />
          <Button variant={"secondary"}>Study</Button>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-4 mt-4">
        <UserDecks />
      </section>
    </div>
  );
};

export default page;
