import { useState } from "react";

const navItems = ["Home", "MyApps", "Projects", "About", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const handleScroll = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <div className="relative flex px-2 py-1 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
        {/* Bubble */}
        <div
          className={`absolute top-1 bottom-1 left-1 rounded-full bg-white/20 backdrop-blur-md transition-all duration-300 z-0`}
          style={{
            width: `${100 / navItems.length}%`,
            transform: `translateX(${navItems.indexOf(active) * 94}%)`,
          }}
        />
        {/* Tabs */}
        {navItems.map((item) => (
          <button
            key={item}
            className={`relative z-10 text-sm sm:text-base px-4 py-2 rounded-full transition-all duration-300 ${
              active === item
                ? "text-blue-400 font-semibold"
                : "text-white/70 hover:text-white"
            }`}
            onClick={() => handleScroll(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
