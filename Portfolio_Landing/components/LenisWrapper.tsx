"use client";
import { useLenis } from "@/hooks/useLenis";

export function LenisWrapper({ children }: { children: React.ReactNode }) {
  useLenis();
  return <>{children}</>;
}
