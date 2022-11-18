import type { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

type LayoutType = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutType) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
