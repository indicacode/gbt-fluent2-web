import "./globals.css"
import {ReactNode} from "react";
import Navbar from "@/components/navbar";

export const metadata = {
    title: 'Fluent 2 to tailwind',
    description: 'Fluent 2 to tailwind for GRBTech',
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html>
        <body>
        <header>
            <Navbar/>
        </header>
        {children}
        </body>
        </html>
    )
}
