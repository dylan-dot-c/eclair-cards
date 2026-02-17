import NewDeckModal from "@/components/NewDeckModal";
import UserDecks from "@/components/UserDecks";

const Decks = () => {
  return (
    <main>
      <h2 className="text-4xl">Decks</h2>
      <NewDeckModal />
      <p>
        Here you can see available decks, delete decks and change visibility of
        decks
      </p>
      <section className="grid grid-cols-3 gap-4">
        <UserDecks />
      </section>
    </main>
  );
};

export default Decks;
