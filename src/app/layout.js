import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Nav from "../components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "AS Research",
    description: "Pagina oficial de AS Research",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Nav />
                {children}
            </body>
        </html>
    );
}
