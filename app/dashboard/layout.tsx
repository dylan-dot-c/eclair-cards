// import Link from "next/link";
import DashboardNavbar from "@/components/dashboard-navbar";
import Sidebar from "@/components/sidebar";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  //   const pathname = router.usePathname();
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-4 w-full">{children}</main>
    </div>
  );
};

export default layout;
