// src/components/FactionCard.tsx
import React from "react";

interface FactionCardProps {
    key: number;
    name: string;
    rule: string;
}

export default function FactionCard({key, name, rule }: FactionCardProps) {
    console.log(key)
    return (
        <div style={styles.card}>
            <h3 style={styles.cardTitle}>{name}</h3>
            <p style={styles.cardRule}>{rule}</p>
        </div>
    );
}

const styles = {
    card: {
        backgroundColor: "#333",
        color: "#fff",
        borderRadius: "8px",
        padding: "1rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "200px", // Fixed card height
        minHeight: "200px", // Ensure all cards have the same height
        overflow: "hidden", // Hide overflow content
    },
    cardTitle: {
        fontSize: "1.25rem",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "0.5rem",
        whiteSpace: "nowrap", // Prevent wrapping
        overflow: "hidden", // Hide any overflow text
        textOverflow: "ellipsis", // Show "..." when text overflows
    },
    cardRule: {
        textAlign: "center",
        fontSize: "1rem",
        lineHeight: "1.5",
        whiteSpace: "nowrap", // Prevent wrapping
        overflow: "hidden", // Hide any overflow text
        textOverflow: "ellipsis", // Show "..." when text overflows
    }
};
