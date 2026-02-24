"use client";

import { useState } from "react";

import { Home, FolderPlus, CreditCard, MenuIcon } from "lucide-react";
import { LogoutButton } from "./logout-button";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(true);
  return (
    <aside
      className={`flex flex-col min-h-screen  overflow-hidden transition-all  bg-slate-500 shadow-md rounded-r-4 rounded-b-4  gap-5 p-2 ${isOpen ? "w-20" : "w-60"}`}
    >
      <Button onClick={() => setOpen(!isOpen)}>
        <MenuIcon />
      </Button>
      <h1 className="text-3xl font-mono font-bold text-nowrap">Eclair Cards</h1>
      <div className="flex gap-4 flex-nowrap  p-2 rounded-full">
        <Home /> <p className="hidden">Dashboard</p>
      </div>
      <div className="flex gap-4 flex-nowrap  p-2 rounded-full">
        <FolderPlus /> <p className="hidden">Create New Deck</p>
      </div>
      <div className="flex gap-4 flex-nowrap  p-2 rounded-full">
        <CreditCard /> <p className="hidden">All Decks</p>
      </div>

      <div className="flex gap-4 flex-nowrap rounded-full">
        <LogoutButton />
      </div>
    </aside>
  );
};

export default Sidebar;
