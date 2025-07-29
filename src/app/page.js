import WithSplash from "@/components/WithSplash";
import { Hero } from "@/sections/Hero";
import Home1 from "@/components/test3d";
export default function Home() {
  return (
    <>
      <WithSplash>
        <main>
          <Hero />
          {/* <Home1 /> */}
        </main>
      </WithSplash>
    </>
  );
}
