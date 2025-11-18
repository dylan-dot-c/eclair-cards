import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WalletCards, Edit, LockIcon, LockOpenIcon } from "lucide-react";

import { type DeckCount } from "@/lib/supabase/queries/decks";
import { Button } from "./ui/button";
import Link from "next/link";
import { deleteDeck } from "@/app/actions/deleteDeck";
import DeleteDeckButton from "./DeleteDeckButton";

type Props = {
  deck: DeckCount;
};
const Deck = async ({ deck }: Props) => {
  const handleDelete = async () => {
    "use server";
    await deleteDeck(deck.deck_id);
  };
  return (
    <Card className="">
      <CardHeader className="flex item-center">
        {deck.is_public ? (
          <LockOpenIcon className="text-green-300" />
        ) : (
          <LockIcon className="text-red-500" />
        )}
        <CardTitle>{deck.name}</CardTitle>
        <CardDescription>
          {deck.description ?? <i className="text-slate-400">No description</i>}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex">
        <WalletCards />
        {deck.flashcards[0].count} FlashCards
      </CardContent>

      <div className="flex gap-4">
        <Link href={`/dashboard/decks/${deck.deck_id}/edit`}>
          <Button variant={"secondary"}>
            <Edit />
            Edit Deck
          </Button>
        </Link>

        <DeleteDeckButton onDelete={handleDelete} />
      </div>

      <CardFooter>
        <p>{deck.is_public ? "Public" : "Private"}</p>
      </CardFooter>
    </Card>
  );
};

export default Deck;
