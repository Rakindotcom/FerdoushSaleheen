"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function ContainerScroll({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const rotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [13, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [1, 1] : isMobile ? [0.88, 0.98] : [1.03, 1],
  );
  const translate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [40, -60]);

  return (
    <div ref={containerRef} className="relative flex h-[52rem] items-center justify-center px-4 md:h-[68rem] md:px-10">
      <div className="relative w-full py-24 [perspective:1100px]">
        <Header translate={translate}>{titleComponent}</Header>
        <Card rotate={rotate} scale={scale}>{children}</Card>
      </div>
    </div>
  );
}

function Header({ translate, children }: { translate: MotionValue<number>; children: React.ReactNode }) {
  return (
    <motion.div style={{ translateY: translate }} className="mx-auto max-w-5xl text-center">
      {children}
    </motion.div>
  );
}

function Card({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ rotateX: rotate, scale }}
      className="mx-auto mt-10 h-[28rem] w-full max-w-5xl rounded-[2rem] border border-[#d6a642]/30 bg-[#0b0a08] p-2 shadow-[0_40px_100px_-35px_rgba(214,166,66,.32)] md:h-[38rem] md:p-3"
    >
      <div className="h-full w-full overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#11100d]">
        {children}
      </div>
    </motion.div>
  );
}
