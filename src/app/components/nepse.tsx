"use client";
import { useEffect, useState } from "react";

export default function NepseTopGainers() {
  const [gainers, setGainers] = useState([]);

  useEffect(() => {
    fetch("/api/nepse")
      .then(res => res.json())
      .then(setGainers);
  }, []);

  return (
    <div>
      <h3>Top 10 Gainers</h3>
      <ul>
        {gainers.slice(0,10).map((s: string) => (
          <li key={s.symbol}>
            {s.symbol} — {s.changePercent}%
          </li>
        ))}
      </ul>
    </div>
  );
}
