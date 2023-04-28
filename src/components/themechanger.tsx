"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import React from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  if (theme == "light")
    return (
      <button>
        <BsMoonFill
          onClick={() => setTheme("dark")}
          size={20}
          className="self-center"
        />
      </button>
    );
  else
    return (
      <button>
        <BsSunFill
          onClick={() => setTheme("light")}
          size={20}
          className="self-center"
        />
      </button>
    );
}
