import type { ReactNode } from "react";
import NavBar from "./navbar";
import Footer from "./footer";

type LayoutProps = {
    children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <NavBar />
            <main className="mt-5 mx-5"> {children} </main>
            <Footer />
        </>
    )
}

export default Layout;