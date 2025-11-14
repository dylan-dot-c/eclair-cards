// import Link from "next/link";
import DashboardNavbar from "@/components/dashboard-navbar";
import Sidebar from "@/components/sidebar";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  //   const pathname = router.usePathname();
  return (
    <div>
      <DashboardNavbar />
      <Sidebar />
      <main className=" ml-20 mt-20 p-4">{children}</main>
    </div>
  );
};

export default layout;
