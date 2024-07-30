import HomePage from "@/components/HomePage";
import { Viewport } from "next";

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function Home() {
  return (
    <main>
      <h1 className="font-bold text-2xl md:text-4xl mb-8 pt-10 hidden">
        CÔNG TY CP XÂY DỰNG VÀ THƯƠNG MẠI VIỆT SING
      </h1>
      <HomePage />
    </main>
  );
}
