import Image from "next/image";
import { Inter } from "next/font/google";
import SideNavbar from "@/components/Sidenavbar";
import First from "@/components/First";
import Layout from "@/components/Layout";
import Page2 from "@/components/Page2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
    >
     <Layout>
      {/* <First/> */}
      <Page2/>
      </Layout> 
    </main>
  );
}
