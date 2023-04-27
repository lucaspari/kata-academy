"use client";
import { useTheme } from "next-themes";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
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
