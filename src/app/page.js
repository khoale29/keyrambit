import WithSplash from "@/components/WithSplash";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
// import Home1 from "@/components/test3d";
export default function Home() {
  return (
    <>
      <WithSplash>
        <main>
          {/* <Header /> */}
          <Hero />
          {/* <Home1 /> */}
        </main>
      </WithSplash>
    </>
  );
}
