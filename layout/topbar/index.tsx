import { useEffect, useState } from "react";
import { TLayoutProps } from "@/layout/layout";
import { getInitials } from "@/utils/formatting";
import NotificationBell from "@/components/svg/notification-bell";
import MenuRight from "@/components/svg/menu-right";
import toast from "react-hot-toast";

export default function Topbar({ sidebarOpen, setSidebarOpen }: TLayoutProps) {
    const [ctime, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div className="mb-4 w-full px-2 py-4 md:px-10">
            <div className="flex items-center justify-between">
                <h2 className="font-digital hidden text-lg font-medium lg:inline">
                    {ctime}
                </h2>
                <div
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="inline w-fit cursor-pointer text-4xl font-medium lg:hidden"
                >
                    <MenuRight />
                </div>

                <div className="flex items-center gap-5">
                    <div onClick={() => toast("Hello")} className="">
                        <NotificationBell className="cursor-pointer text-3xl text-primary" />
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="mb-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary pb-0 text-center leading-none text-white">
                            <small className="mb-0 justify-center self-center pb-0 text-center text-xs leading-none text-light">
                                {getInitials(`John Doe`)}
                            </small>
                        </div>
                        <h4 className="font-normal">John Doe</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
