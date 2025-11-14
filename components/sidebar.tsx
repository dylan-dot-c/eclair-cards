import { Home, FolderPlus, CreditCard } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="flex flex-col min-h-[calc(100vh-200px)] w-12 items-center overflow-hidden fixed left-5 bg-orange-200 shadow-md gap-10 rounded-full ">
      <div className="flex gap-4 flex-nowrap bg-orange-500 p-2 rounded-full">
        <Home /> <p className="hidden">Dashboard</p>
      </div>
      <div className="flex gap-4 flex-nowrap bg-orange-500 p-2 rounded-full">
        <FolderPlus /> <p className="hidden">Create New Deck</p>
      </div>
      <div className="flex gap-4 flex-nowrap bg-orange-500 p-2 rounded-full">
        <CreditCard /> <p className="hidden">All Decks</p>
      </div>
    </aside>
  );
};

export default Sidebar;
