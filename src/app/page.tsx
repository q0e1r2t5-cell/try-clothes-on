import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import Parallax from "@/components/Parallax";

const collections = [
  {
    no: "01",
    name: "棉麻襯衫",
    en: "Linen",
    desc: "日曬過的棉麻，越洗越柔軟。",
    price: "NT$1,280",
    tone: "#e8a9a0",
    aspect: "aspect-[4/5]",
  },
  {
    no: "02",
    name: "針織上衣",
    en: "Knit",
    desc: "細針織，貼身卻不緊繃。",
    price: "NT$1,480",
    tone: "#c9b3dc",
    aspect: "aspect-[3/4]",
  },
  {
    no: "03",
    name: "寬褲",
    en: "Trousers",
    desc: "高腰、垂墜，走路時會有風。",
    price: "NT$1,680",
    tone: "#b48ea8",
    aspect: "aspect-[3/4]",
  },
  {
    no: "04",
    name: "連身洋裝",
    en: "Dress",
    desc: "一件就出門，不必多想。",
    price: "NT$1,980",
    tone: "#f0c4a8",
    aspect: "aspect-[4/5]",
  },
];

const principles = [
  {
    title: "天然纖維",
    desc: "棉、麻、天絲。我們只用皮膚會喜歡的材質，透氣、親膚，經得起每一次洗滌。",
  },
  {
    title: "少即是多",
    desc: "拿掉多餘的裝飾，只留下好看的比例。今年穿、明年穿，十年後依然耐看。",
  },
  {
    title: "每種身形",
    desc: "XS 到 XL，每個版型都經過不同身形的試穿調整，合身，但不束縛。",
  },
  {
    title: "慢慢做",
    desc: "與台灣在地工廠合作小量生產，不追快時尚的節奏，減少浪費。",
  },
];

const looks = [
  { no: "01", title: "週日的咖啡廳", items: "棉麻襯衫 / 寬褲", tone: "#e8a9a0" },
  { no: "02", title: "下班後散步", items: "針織上衣 / 長裙", tone: "#c9b3dc" },
  { no: "03", title: "海邊的午後", items: "連身洋裝 / 草編包", tone: "#f0c4a8" },
  { no: "04", title: "初冬的早晨", items: "針織外套 / 直筒褲", tone: "#b48ea8" },
];

const marqueeWords = ["Linen", "Soft Knit", "Wide Trousers", "Daily Dress", "Slow Made", "Natural Fibre"];

const tone = (color: string) => ({ "--tone": color }) as CSSProperties;

/** 平板以上才啟用的視差，手機維持靜態 */
const TABLET = 768;

export default function Home() {
  return (
    <main className="flex-1">
      {/* ───── 主視覺 ───── */}
      <section className="mx-auto grid max-w-7xl gap-14 px-4 pt-10 pb-24 sm:px-6 md:gap-16 md:px-8 md:pt-16 lg:grid-cols-12 lg:gap-12 lg:pt-20">
        <div className="flex min-w-0 flex-col justify-between lg:col-span-7">
          <p className="flex items-center gap-4 text-[10px] tracking-[0.3em] text-foreground/60 sm:text-[11px]">
            <span className="h-px w-8 bg-foreground/40 sm:w-10" />
            VOL. 03 — AUTUMN / WINTER 2026
          </p>

          <h1 className="mt-8 font-serif leading-[0.9] font-light md:mt-10">
            <Parallax speed={0.06} minWidth={TABLET}>
              <span className="block text-[19vw] sm:text-[8.5rem] lg:text-[8rem] xl:text-[9.5rem]">Soft</span>
            </Parallax>
            <Parallax speed={-0.05} minWidth={TABLET}>
              <span className="block pl-[10vw] text-[19vw] whitespace-nowrap text-rose italic sm:pl-24 sm:text-[8.5rem] lg:pl-16 lg:text-[8rem] xl:pl-32 xl:text-[9.5rem]">
                &amp; Light
              </span>
            </Parallax>
          </h1>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8 md:mt-14 lg:mt-16">
            <p className="font-serif text-xl leading-relaxed md:text-2xl lg:text-xl">
              穿上自在，做最舒服的自己。
            </p>
            <div>
              <p className="text-sm leading-7 text-foreground/70">
                這一季，我們用柔軟的針織與日曬棉麻，
                <br className="hidden sm:block" />
                收進秋天最溫柔的光。
              </p>
              <Link
                href="#collections"
                className="group mt-6 inline-flex items-center gap-3 border-b border-foreground pb-1 text-sm tracking-wider"
              >
                探索新品
                <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 主視覺圖：手機靠右縮小、平板置右半、電腦佔右欄 */}
        <div className="relative ml-auto w-[85%] sm:w-[70%] md:w-[60%] lg:col-span-5 lg:w-full">
          <div className="flex items-start gap-4">
            <p className="vertical hidden font-serif text-sm tracking-[0.5em] text-foreground/60 sm:block">
              柔光針織系列・二〇二六
            </p>
            <ParallaxSwatch color="#e8a9a0" className="aspect-[3/4] w-full rounded-t-[999px]">
              <Parallax speed={-0.12} minWidth={TABLET} className="absolute inset-x-0 bottom-6 text-center">
                <span className="font-serif text-[22vw] leading-none text-white/50 italic sm:text-[7rem]">
                  Knit
                </span>
              </Parallax>
            </ParallaxSwatch>
          </div>

          {/* 浮在畫面上的玻璃標籤，捲動時比畫面快一點，產生前後景深 */}
          <Parallax
            speed={-0.18}
            minWidth={TABLET}
            className="absolute -bottom-10 -left-[10%] z-10 w-52 sm:w-60 md:-left-24 lg:-left-16"
          >
            <Link
              href="#collections"
              className="glass shine relative block rounded-2xl p-5 transition duration-500 hover:-translate-y-1"
            >
              <p className="font-serif text-xs tracking-[0.3em] text-foreground/60 italic">New In</p>
              <p className="mt-2 font-serif text-lg">柔光針織系列</p>
              <div className="mt-3 flex items-center justify-between text-xs text-foreground/70">
                <span>NT$1,480 起</span>
                <span>→</span>
              </div>
            </Link>
          </Parallax>
        </div>
      </section>

      {/* ───── 跑馬燈 ───── */}
      <div className="overflow-hidden border-y border-foreground/15 py-4 md:py-5">
        <div className="marquee flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {marqueeWords.map((word) => (
                <span key={word} className="flex items-center font-serif text-2xl italic md:text-3xl lg:text-4xl">
                  <span className="px-6 md:px-8">{word}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-rose" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ───── 系列 ───── */}
      <section
        id="collections"
        className="mx-auto max-w-7xl scroll-mt-32 px-4 py-20 sm:px-6 md:px-8 md:py-28 lg:py-32"
      >
        <SectionHeading no="01" en="Collections" zh="本季系列">
          四個系列，組成一整季的衣櫥。
          <br />
          每一件都能單穿，也能互相搭配。
        </SectionHeading>

        <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 md:mt-16 lg:gap-x-10 lg:gap-y-16">
          {collections.map((item, i) => (
            <Parallax
              key={item.no}
              speed={i % 2 === 1 ? -0.06 : 0.03}
              minWidth={TABLET}
              className={i % 2 === 1 ? "sm:mt-24 lg:mt-40" : ""}
            >
              <Link href="#collections" className="group block">
                <ParallaxSwatch color={item.tone} className={`${item.aspect} rounded-sm`}>
                  <span className="absolute top-5 left-5 text-[11px] tracking-[0.3em] text-foreground/60">
                    FIG. {item.no}
                  </span>
                  <span className="absolute -bottom-3 left-4 font-serif text-[5.5rem] leading-none text-white/55 italic transition-transform duration-700 group-hover:-translate-y-3 sm:text-[5rem] md:text-[6rem] lg:-bottom-4 lg:text-[7rem] xl:text-[8rem]">
                    {item.en}
                  </span>
                </ParallaxSwatch>
                <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-foreground/15 pb-4">
                  <div className="flex items-baseline gap-3 md:gap-4">
                    <span className="font-serif text-sm text-foreground/50 italic">No.{item.no}</span>
                    <h3 className="font-serif text-xl md:text-2xl">{item.name}</h3>
                  </div>
                  <span className="shrink-0 text-sm tracking-wider">{item.price}</span>
                </div>
                <p className="mt-3 text-sm text-foreground/65">{item.desc}</p>
              </Link>
            </Parallax>
          ))}
        </div>
      </section>

      {/* ───── 理念 ───── */}
      <section id="journal" className="relative scroll-mt-32 overflow-hidden bg-plum text-white">
        {/* 背景大字，捲動時緩慢漂移 */}
        <Parallax speed={0.25} className="pointer-events-none absolute inset-x-0 top-1/3">
          <p
            aria-hidden
            className="text-center font-serif text-[30vw] leading-none whitespace-nowrap text-white/[0.05] italic select-none"
          >
            Slow
          </p>
        </Parallax>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 md:gap-16 md:px-8 md:py-28 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-40">
              <p className="font-serif text-sm tracking-[0.3em] text-white/60 italic">02 — Philosophy</p>
              <blockquote className="mt-8 font-serif text-3xl leading-snug sm:text-4xl md:text-5xl lg:text-[2.6rem]">
                「衣服應該配合生活，
                <br />
                而不是讓生活
                <br className="md:hidden lg:block" />
                配合衣服。」
              </blockquote>
              <p className="mt-8 text-sm text-white/60">— 創辦人　林予晴</p>
            </div>
          </div>

          {/* 平板兩欄、手機與電腦單欄 */}
          <ol className="grid md:grid-cols-2 md:gap-x-10 lg:col-span-6 lg:col-start-7 lg:grid-cols-1">
            {principles.map((p, i) => (
              <li
                key={p.title}
                className="grid grid-cols-[3rem_1fr] border-t border-white/20 py-8 md:grid-cols-1 md:gap-4 lg:grid-cols-[4rem_1fr] lg:gap-0 lg:py-10 lg:last:border-b"
              >
                <span className="font-serif text-4xl text-rose italic">{i + 1}</span>
                <div>
                  <h3 className="font-serif text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{p.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───── 穿搭 ───── */}
      <section id="lookbook" className="scroll-mt-32 py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <SectionHeading no="03" en="Lookbook" zh="穿搭日記">
            同一件衣服，四種日常。
            <br />
            往右滑，看看我們怎麼穿。
          </SectionHeading>
        </div>

        <div className="mt-12 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-4 pb-6 [scrollbar-width:none] sm:gap-6 sm:px-6 md:mt-16 md:px-8 xl:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {looks.map((look, i) => (
            <article
              key={look.no}
              className={`w-[72vw] shrink-0 snap-start sm:w-[42vw] lg:w-[22rem] xl:w-[24rem] ${i % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <ParallaxSwatch color={look.tone} className="aspect-[2/3] rounded-sm">
                <span className="absolute top-5 right-5 font-serif text-5xl text-white/70 italic">{look.no}</span>
                <div className="glass absolute inset-x-3 bottom-3 rounded-xl px-4 py-3 sm:inset-x-4 sm:bottom-4 sm:px-5 sm:py-4">
                  <p className="font-serif text-lg">{look.title}</p>
                  <p className="mt-1 text-xs tracking-wider text-foreground/65">{look.items}</p>
                </div>
              </ParallaxSwatch>
            </article>
          ))}
        </div>
      </section>

      {/* ───── 品牌 ───── */}
      <section id="about" className="mx-auto max-w-7xl scroll-mt-32 px-4 pb-20 sm:px-6 md:px-8 md:pb-28 lg:pb-32">
        <div className="grid items-end gap-10 border-t border-foreground/15 pt-14 md:gap-12 md:pt-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-serif text-sm tracking-[0.3em] text-foreground/60 italic">04 — About</p>
            <Parallax speed={-0.08} minWidth={TABLET}>
              <h2 className="mt-6 font-serif text-[22vw] leading-[0.85] font-light md:text-[10rem] lg:text-[7.5rem] xl:text-[8.5rem]">
                Lumi<span className="text-rose italic">è</span>re
              </h2>
            </Parallax>
          </div>
          <div className="grid gap-5 text-sm leading-7 text-foreground/75 md:grid-cols-2 md:gap-10 lg:col-span-4 lg:col-start-9 lg:grid-cols-1 lg:gap-5">
            <p>
              Lumière 是法文的「光」。2019 年，我們在台北一間小工作室裡做出第一件襯衫，
              只因為找不到一件穿一整天都不會累的衣服。
            </p>
            <div className="space-y-5">
              <p>現在我們仍然用一樣的方式做衣服：挑布、打版、反覆試穿，直到它像光一樣，輕輕落在身上。</p>
              <Link
                href="#collections"
                className="group inline-flex items-center gap-3 border-b border-foreground pb-1 tracking-wider text-foreground"
              >
                閱讀品牌故事
                <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/** 布料色塊 + 視差：畫面比外框高，捲動時在框內上下移動，像窗外的景 */
function ParallaxSwatch({
  color,
  className = "",
  children,
}: {
  color: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Parallax speed={0.1} minWidth={TABLET} className="absolute inset-x-0 -top-[12%] -bottom-[12%]">
        <div className="swatch h-full w-full" style={tone(color)} />
      </Parallax>
      {children}
    </div>
  );
}

function SectionHeading({
  no,
  en,
  zh,
  children,
}: {
  no: string;
  en: string;
  zh: string;
  children: ReactNode;
}) {
  return (
    <div className="grid items-end gap-6 md:grid-cols-12">
      <div className="md:col-span-7">
        <p className="font-serif text-sm tracking-[0.3em] text-foreground/60 italic">
          {no} — {en}
        </p>
        <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">{zh}</h2>
      </div>
      <p className="text-sm leading-7 text-foreground/65 md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9">
        {children}
      </p>
    </div>
  );
}
