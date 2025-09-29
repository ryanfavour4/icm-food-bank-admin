import Layouts from "@/layout/layout";
import React from "react";

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <Layouts>{children}</Layouts>;
}
