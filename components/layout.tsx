import type { ReactNode } from "react";
import NavBar from "./navbar";

type LayoutProps = {
    children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <NavBar />
            <main className="mt-5 mx-5"> {children} </main>
        </>
    )
}

export default Layout;