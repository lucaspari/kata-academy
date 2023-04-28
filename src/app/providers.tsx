"use client";
interface IProviders {
  children: React.ReactNode;
}
import { ThemeProvider } from "next-themes";
export function Providers({ children }: IProviders) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
