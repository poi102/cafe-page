import React from "react";
import { Link, NavLink } from "react-router-dom";

type HeaderProps = {
  title?: string;
};

export default function Header({
  title = "森のひととき",
}: HeaderProps): React.JSX.Element {
  const navBase =
    "transition hover:opacity-70";
  const navActive =
    "font-semibold text-[#4d6a53]";

  return (
    <header className="sticky top-0 z-20 border-b border-[#d6ead8] bg-[#e8f7ea]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-4 sm:px-6 sm:py-5 md:flex-row md:items-center md:justify-between">
        <div>
          <Link to="/" className="block">
            <p className="text-xs tracking-[0.3em] text-[#6b8f72] sm:text-sm">
              FOREST CAFE
            </p>
            <h1 className="text-xl font-bold sm:text-2xl md:text-3xl">
              {title}
            </h1>
          </Link>
        </div>

        <nav aria-label="メインナビゲーション" className="flex flex-wrap gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navBase} ${isActive ? navActive : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `${navBase} ${isActive ? navActive : ""}`
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/concept"
            className={({ isActive }) =>
              `${navBase} ${isActive ? navActive : ""}`
            }
          >
            Concept
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navBase} ${isActive ? navActive : ""}`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
