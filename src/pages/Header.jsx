import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null); // 👈 ref for outside click

  const links = [
    { id: "home", label: "Home", href: "#home" },
    { id: "program", label: "Program", href: "#program" },
    { id: "classes", label: "Classes", href: "#classes" },
    { id: "schedules", label: "Schedules", href: "#schedules" },
    { id: "location", label: "Location", href: "#location" },
  ];

  // 🔹 Detect scroll position for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Scroll spy effect for active nav link
  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );

    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, [links]);

  // 🔹 Close nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header
      className={`shadow-sm fixed w-full z-999 transition-colors duration-300 ${
        scrolled ? "bg-white" : "bg-[#5F6770]/40"
      }`}
    >
      <div className="wrapper flexx justify-between items-center">
        {/* Logo */}
        <h1
          className={`text-3xl font-extrabold uppercase whitespace-normal transition-colors duration-300 ${
            scrolled ? "text-[#232D39]" : "text-white"
          }`}
        >
          training <span className="text-[#ED563B]">studio</span>
        </h1>

        {/* Hamburger button (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <i
            className={`fa-solid fa-bars text-2xl transition-colors duration-300 ${
              scrolled ? "text-[#232D39]" : "text-white"
            }`}
          ></i>
        </button>

        {/* Nav */}
        <nav
          ref={navRef} // 👈 for outside click
          className={`font-sans text-center absolute inset-0 top-20 px-5 md:static md:block transition-all duration-300 transform
    ${
      isOpen
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible -translate-y-5"
    }
    md:opacity-100 md:visible md:translate-y-0
  `}
        >
          <ul
            className={`text-xs font-semibold [&>li]:block [&>li]:uppercase [&>li]:p-3 [&>li]:px-4 [&>li]:border-1 [&>li]:border-[#767676]/9 md:flex md:gap-5 md:[&>li]:border-0 transition-colors duration-300 ${
              scrolled
                ? "bg-white md:bg-transparent"
                : "bg-[#5F6770]/40 md:bg-transparent"
            }`}
          >
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors duration-300 hover:text-[#f96d00] ${
                    active === link.id
                      ? "text-[#f96d00]"
                      : scrolled
                      ? "text-[#232D39]"
                      : "text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="bg-[#ED563B] text-white transition-colors duration-300">
              <a href="#signup" onClick={() => setIsOpen(false)}>
                Sign up
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
