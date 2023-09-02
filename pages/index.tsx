import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import move from "lodash-move";

const CARD_COLORS: string[] = ["#266678", "#cb7c7a", " #36a18b", "#cda35f", ];
const CARD_OFFSET: number = 20;
const SCALE_FACTOR: number = 0.1;

const wrapperStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh"
};

const cardWrapStyle: React.CSSProperties = {
  position: "relative",
  width: "250px",
  height: "420px"
};

const cardStyle: React.CSSProperties = {
  position: "absolute",
  minWidth: "250px",
  height: "420px",
  borderRadius: "13px",
  transformOrigin: "bottom right",
  listStyle: "none"
};

export default function Home() {
  const [cards, setCards] = useState<string[]>(CARD_COLORS);
  const moveToEnd = (from: number): void => {
    setCards(move(cards, from, cards.length - 1));
  };

  return (
    <AnimatePresence>
      <div style={wrapperStyle}>
      <ul style={cardWrapStyle}>
        {cards.map((color, index) => {
          return (
            <motion.li
              key={color}
              style={{
                ...cardStyle,
                backgroundColor: color,
                cursor: "pointer"
              }}
              animate={{
                bottom: index * CARD_OFFSET,
                left: index * CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: CARD_COLORS.length - index
              }}
              exit={{ opacity: 0 }}
              onTap={() => moveToEnd(index)}
            />
          );
        })}
      </ul>
    </div>

    </AnimatePresence>
    
  );
};
