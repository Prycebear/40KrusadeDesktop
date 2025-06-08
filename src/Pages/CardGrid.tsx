import React, { useState } from "react";
import { Faction } from "../Interfaces/FactionObjects";
import Card from "../Components/Card";

type CardGridProps = {
    data: Faction[];
};

export default function CardGrid({ data }: CardGridProps) {
    const [cardsPerRow, setCardsPerRow] = useState(3);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCardsPerRow(Number(e.target.value));
    };

    return (
        <div style={styles.container}>
            <div style={styles.controls}>
                <label htmlFor="cardsPerRow" style={styles.label}>Cards per row:</label>
                <select
                    id="cardsPerRow"
                    value={cardsPerRow}
                    onChange={handleChange}
                    style={styles.select}
                >
                    {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>{n}</option>
                    ))}
                </select>
            </div>

            <div
                style={{
                    ...styles.grid,
                    gridTemplateColumns: `repeat(${Math.min(cardsPerRow, data.length)}, 1fr)`,
                    justifyItems: "center",
                }}
            >
                {data.map((card, index) => (
                    <div key={index} style={styles.cardWrapper(cardsPerRow)}>
                        <Card id={index} title={card.factionName} image={card.factionImage} />
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: "100%",
        padding: "2rem",
        backgroundColor: "#1f1f1f",
        color: "#fff" as const,
        minHeight: "100vh",
    },
    controls: {
        marginBottom: "1.5rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
    },
    label: {
        fontSize: "1rem",
    },
    select: {
        padding: "0.3rem 0.6rem",
        fontSize: "1rem",
    },
    grid: {
        display: "grid",
        gap: "1.5rem",
        width: "100%",
        justifyContent: "center",
    },
    cardWrapper: (cardsPerRow: number) => ({
        width: "100%",
        maxWidth:
            cardsPerRow === 1
                ? "900px"
                : cardsPerRow === 2
                    ? "600px"
                    : "100%", // smaller width when 3+ per row
        transition: "max-width 0.3s ease",
    }),
};
