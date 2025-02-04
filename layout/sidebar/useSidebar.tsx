import { JSX, useEffect, useRef, useState } from "react";
import DashboardSquares from "@/components/svg/dashboard-squares";
import ChartLineUp from "@/components/svg/chart-line-up";

export type T_menuChildren = {
    title: string;
    subPath?: string;
    path?: string;
    icon: JSX.Element;
    subMenus?: {
        title: string;
        path: string;
    }[];
};
export type T_menu = {
    section: string;
    children: T_menuChildren[];
};

export default function useSidebar() {
    const [menus] = useState<T_menu[]>([
        {
            section: "",
            children: [
                {
                    title: "Dashboard",
                    path: "/dashboard",
                    icon: <DashboardSquares className="text-2xl" />,
                },
                {
                    title: "Donations",
                    path: "/donations",
                    icon: <ChartLineUp className="text-2xl" />,
                },
                {
                    title: "Events",
                    path: "/events",
                    icon: <DashboardSquares className="text-2xl" />,
                },
                {
                    title: "Report",
                    path: "/report",
                    icon: <ChartLineUp className="text-2xl" />,
                },
                {
                    title: "Gallery",
                    path: "/gallery",
                    icon: <DashboardSquares className="text-2xl" />,
                },
                {
                    title: "Meal",
                    path: "/meal",
                    icon: <ChartLineUp className="text-2xl" />,
                },
                {
                    title: "Settings",
                    path: "/settings",
                    icon: <ChartLineUp className="text-2xl" />,
                },
            ],
        },
    ]);

    const navListRef = useRef<HTMLUListElement>(null);
    const [clickedNavYPosition, setClickedNavYPosition] = useState<number>(0);
    const [dockSideBar, setDockSideBar] = useState(false);

    useEffect(() => {
        const navList = navListRef.current;
        if (navList) {
            const handleClick = (e: MouseEvent) =>
                setClickedNavYPosition(e.pageY);
            navList.addEventListener("click", (e) => handleClick(e));
            return () => navList.removeEventListener("click", handleClick);
        }

        const handleResize = () => {
            const width = window.innerWidth;
            setDockSideBar(width <= 640 && false);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return {
        menus,
        dockSideBar,
        navListRef,
        clickedNavYPosition,
        setDockSideBar,
    };
}
