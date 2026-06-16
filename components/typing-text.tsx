"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}

export function TypingText({
  text,
  className,
  speed = 80,
  startDelay = 400,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    let index = 0;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(intervalId);
          setIsTyping(false);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  useEffect(() => {
    if (!isTyping) return;

    const intervalId = setInterval(() => {
      setCursorVisible((visible) => !visible);
    }, 530);

    return () => clearInterval(intervalId);
  }, [isTyping]);

  return (
    <>
      <span className="inline-grid" aria-hidden="true">
        <span className="invisible col-start-1 row-start-1">{text}</span>
        <span className={cn("gradient-text col-start-1 row-start-1", className)}>
          {displayed}
          {isTyping && (
            <span
              className={cn(
                "ml-0.5 inline-block font-normal text-[var(--gradient-start)] transition-opacity duration-100",
                cursorVisible ? "opacity-100" : "opacity-0",
              )}
            >
              |
            </span>
          )}
        </span>
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
}
