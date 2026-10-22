"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxProps = {
  children?: ReactNode;
  /** 移動倍率：正數比捲動慢（往後退），負數比捲動快（往前衝）。建議 -0.3 ~ 0.3 */
  speed?: number;
  /** 小於這個寬度時停用視差（手機上避免晃動與效能問題） */
  minWidth?: number;
  className?: string;
};

/**
 * 滾動視差：依元素中心與視窗中心的距離，乘上 speed 後位移。
 * 用 requestAnimationFrame 節流，並尊重「減少動態效果」設定。
 */
export default function Parallax({ children, speed = 0.15, minWidth = 0, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      if (reduceMotion.matches || window.innerWidth < minWidth) {
        el.style.transform = "";
        return;
      }
      // 用父層位置計算，避免自身位移影響下一次的量測
      const rect = (el.parentElement ?? el).getBoundingClientRect();
      const offset = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${(offset * speed).toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [speed, minWidth]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
