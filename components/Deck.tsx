import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import { WalletCards, Edit, LockIcon, LockOpenIcon } from "lucide-react";

import type { DeckCount } from "@/lib/supabase/queries/decks";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  deck: DeckCount;
};
const Deck = ({ deck }: Props) => {
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
      <CardAction>
        <Link href={`/dashboard/decks/${deck.deck_id}/edit`}>
          <Button variant={"link"}>
            <Edit />
            Edit Deck
          </Button>
        </Link>
      </CardAction>
      <CardFooter>
        <p>{deck.is_public ? "Public" : "Private"}</p>
      </CardFooter>
    </Card>
  );
};

export default Deck;
