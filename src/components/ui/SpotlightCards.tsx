import React, { useEffect, useRef } from "react";

interface CardData {
  num?: string;
  icon?: string;
  title: string;
  description: string;
}

interface SpotlightCardsProps {
  cards: CardData[];
  columns?: number;
}

export function SpotlightCards({ cards, columns = 2 }: SpotlightCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handlePointerMove = (e: PointerEvent) => {
      const cards = container.querySelectorAll<HTMLElement>("[data-glow-card]");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--glow-x", `${x}px`);
        card.style.setProperty("--glow-y", `${y}px`);
      });
    };

    container.addEventListener("pointermove", handlePointerMove);
    return () => container.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="spotlight-grid"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "1.25rem",
      }}
    >
      {cards.map((card, i) => (
        <div key={i} data-glow-card className="spotlight-card">
          <div className="spotlight-card__glow" />
          <div className="spotlight-card__content">
            {card.num && <span className="spotlight-card__num">{card.num}</span>}
            {card.icon && (
              <span
                className="spotlight-card__icon"
                dangerouslySetInnerHTML={{ __html: card.icon }}
              />
            )}
            <h3 className="spotlight-card__title">{card.title}</h3>
            <p className="spotlight-card__desc">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
