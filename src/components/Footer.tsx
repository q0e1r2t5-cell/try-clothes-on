import Link from "next/link";

const footerColumns = [
  {
    title: "Shop",
    links: [
      { href: "/#collections", label: "棉麻襯衫" },
      { href: "/#collections", label: "針織上衣" },
      { href: "/#collections", label: "寬褲" },
      { href: "/#collections", label: "連身洋裝" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "#", label: "尺寸指南" },
      { href: "#", label: "運送方式" },
      { href: "#", label: "退換貨" },
      { href: "#", label: "常見問題" },
    ],
  },
  {
    title: "Follow",
    links: [
      { href: "#", label: "Instagram" },
      { href: "#", label: "Facebook" },
      { href: "#", label: "LINE 官方帳號" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-foreground/15">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 md:px-8 md:pt-20">
        <div className="grid gap-14 md:gap-16 lg:grid-cols-12">
          {/* 電子報 */}
          <div className="md:max-w-lg lg:col-span-5 lg:max-w-none">
            <p className="font-serif text-sm tracking-[0.3em] text-foreground/60 italic">Newsletter</p>
            <h2 className="mt-4 font-serif text-2xl leading-snug sm:text-3xl">
              每月一封信，
              <br />
              寫給喜歡慢慢生活的妳。
            </h2>
            <div className="mt-8 flex items-center border-b border-foreground/40 focus-within:border-foreground">
              <label htmlFor="newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-foreground/40"
              />
              <button type="button" className="group py-3 pl-4 text-sm tracking-wider">
                訂閱 <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* 連結 */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="font-serif text-sm tracking-[0.3em] text-foreground/60 italic">{col.title}</h3>
                <ul className="mt-5 space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="transition hover:text-rose">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-2 text-sm leading-7 text-foreground/65 sm:col-span-3">
              台北市大安區溫州街 00 號　/　週二至週日 12:00–20:00
              <br />
              hello@lumiere.example
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:mt-20 justify-between gap-2 text-[11px] tracking-wider text-foreground/55 sm:flex-row">
          <p>© 2026 Lumière 輕衣</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">隱私權政策</Link>
            <Link href="#" className="hover:text-foreground">服務條款</Link>
          </div>
        </div>
      </div>

      {/* 底部超大字標，刻意裁切 */}
      <p
        aria-hidden
        className="pointer-events-none mt-6 -mb-[0.22em] text-center font-serif text-[23vw] leading-none font-light tracking-[0.04em] text-rose/25 select-none"
      >
        LUMIÈRE
      </p>
    </footer>
  );
}
