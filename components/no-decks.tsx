import nocards from "../assets/card-locked.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const NoDecks = () => {
  return (
    <div className="mx-auto w-60 text-center flex flex-col gap-2 items-center mt-20">
      <Image src={nocards} alt="No decks available create one" width={100} />

      <p className="text-slate-600">
        You currently have no decks, click &quot;Create New Deck&quot; to get
        started
      </p>
      <Button className="bg-red-700">
        <Plus /> <span>Create New Deck</span>
      </Button>
    </div>
  );
};

export default NoDecks;
