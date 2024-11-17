import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

const THEMES = ["Light", "Dark", "System"]; // Opciones de tema

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(() => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") as 'light' | 'dark' | 'system';
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const htmlElement = document.querySelector("html");

    const applyTheme = (themePreference: 'light' | 'dark' | 'system') => {
      if (htmlElement) {
        const isDark =
          themePreference === "dark" ||
          (themePreference === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
        htmlElement.classList.toggle("dark", isDark);
      }
      localStorage.setItem("theme", themePreference);
    };

    applyTheme(theme);

    if (theme === "system") {
      const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

      const handleSystemThemeChange = () => {
        applyTheme("system");
      };

      matchMedia.addEventListener("change", handleSystemThemeChange);

      // Cleanup on unmount
      return () => {
        matchMedia.removeEventListener("change", handleSystemThemeChange);
      };
    }
  }, [theme]);

  const handleChangeTheme = (selectedTheme: 'light' | 'dark' | 'system') => {
    setTheme(selectedTheme);
    setMenuOpen(false);
  };

  return (
    <div className="relative ml-auto lg:px-20">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full"
      >
        {theme === "light" && <FiSun className="text-yellow-500" />}
        {theme === "dark" && <FiMoon className="text-blue-400" />}
        {theme === "system" && <FiMonitor className="text-gray-500 dark:text-white" />}
      </button>
      {/* Menú Modal */}
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-slate-200 dark:bg-zinc-800">
          <ul className="py-2">
            {THEMES.map((option) => (
              <li
                key={option}
                onClick={() => handleChangeTheme(option.toLowerCase() as 'light' | 'dark' | 'system')}
                className={`px-4 py-2 hover:bg-gray-300  dark:hover:bg-zinc-700 cursor-pointer ${
                  theme === option.toLowerCase() ? "font-semibold text-black/50 dark:text-cyan-500" : ""
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
