import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <label className="swap swap-rotate">
      {/* Hidden checkbox to control state */}
      <input type="checkbox" onChange={toggleTheme} checked={theme === "synthwave"} />

      {
        theme == "light" ?
          <Sun className="swap-off h-8 w-8 fill-current text-yellow-500" /> :
          <Moon className="swap-off h-8 w-8 fill-current text-blue-500"/>
      }

    </label>
  );
};

export default ThemeToggle;
