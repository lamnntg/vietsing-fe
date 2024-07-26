import HomePage from "@/components/HomePage";
import { Viewport } from "next";

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
