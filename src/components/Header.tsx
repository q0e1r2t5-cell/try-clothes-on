"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#collections", label: "系列", en: "Collections" },
  { href: "/#journal", label: "理念", en: "Philosophy" },
  { href: "/#lookbook", label: "穿搭", en: "Lookbook" },
  { href: "/#about", label: "品牌", en: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* 頂部公告 */}
      <div className="bg-plum px-4 py-2 text-center text-[10px] tracking-[0.15em] text-white/85 sm:text-[11px] sm:tracking-[0.25em]">
        AW 2026 新品上市　/　滿 NT$1,500 免運
      </div>

      <div className="px-4 pt-3 md:px-8">
        <nav className="glass mx-auto max-w-7xl rounded-2xl px-5 md:px-8">
          <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center">
            {/* 左：選單 */}
            <ul className="hidden gap-8 text-[13px] tracking-wider md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group relative inline-block py-1">
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "關閉選單" : "開啟選單"}
              aria-expanded={open}
              className="flex items-center gap-2 text-[11px] tracking-[0.25em] md:hidden"
            >
              <span className="relative block h-2.5 w-5">
                <span
                  className={`absolute left-0 h-px w-5 bg-foreground transition duration-300 ${open ? "top-1 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 h-px bg-foreground transition-all duration-300 ${open ? "top-1 w-5 -rotate-45" : "top-2.5 w-3"}`}
                />
              </span>
              {open ? "CLOSE" : "MENU"}
            </button>

            {/* 中：品牌字標 */}
            <Link href="/" className="text-center leading-none">
              <span className="block font-serif text-xl tracking-[0.3em] sm:text-2xl sm:tracking-[0.35em] md:text-[1.7rem]">
                LUMIÈRE
              </span>
              <span className="mt-1 block text-[10px] tracking-[0.6em] text-foreground/55">
                輕　衣
              </span>
            </Link>

            {/* 右：功能 */}
            <div className="flex items-center justify-end gap-6 text-[13px] tracking-wider">
              <Link href="/#about" className="hidden transition hover:text-rose lg:inline">
                會員
              </Link>
              <Link
                href="/#collections"
                aria-label="購物袋"
                className="flex items-center gap-2 transition hover:text-rose"
              >
                <span className="hidden sm:inline">購物袋</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-foreground/40 text-[10px]">
                  0
                </span>
              </Link>
            </div>
          </div>

          {/* 手機版展開選單 */}
          <div
            className={`grid transition-all duration-500 md:hidden ${open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}
          >
            <ul className="overflow-hidden">
              {navLinks.map((link, i) => (
                <li key={link.href} className="border-t border-foreground/10">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-4"
                  >
                    <span className="font-serif text-2xl">{link.label}</span>
                    <span className="font-serif text-sm text-foreground/50 italic">
                      0{i + 1} — {link.en}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
