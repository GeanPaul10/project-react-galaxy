import { Sidebar, SidebarItems, SidebarItem, SidebarItemGroup } from "flowbite-react";
import type { FC } from "react";
import { useEffect, useState } from "react";
import {
  HiChartPie,
  HiOutlineLogout,
  HiTicket
} from "react-icons/hi";

const sidenavComponent: FC = function () {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const newPage = window.location.pathname;

    setCurrentPage(newPage);
  }, [setCurrentPage]);

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <div className="flex h-full flex-col justify-between py-2">
        <div>
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="/"
                icon={HiChartPie}
                className={
                  "/" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""
                }
              >
                Dashboard
              </SidebarItem>
              <SidebarItem
                href="/tickets"
                icon={HiTicket}
                className={
                  "/tickets" === currentPage
                    ? "bg-gray-100 dark:bg-gray-700"
                    : ""
                }
              >
                Tickets
              </SidebarItem>
            </SidebarItemGroup>
            <SidebarItemGroup>
              <SidebarItem
                href="#"
                icon={HiOutlineLogout}
              >
                Cerrar sesión
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </div>
      </div>
    </Sidebar>
  );
};

export default sidenavComponent;