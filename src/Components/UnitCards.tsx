// src/components/FactionCard.tsx
import React from "react";

interface UnitCardProps {
    unitDetailsId: number,
    unitOfficialName: "Cadian Shock Troops",
    unitType: string[],
    movementDistance: number,
    toughnessValue: number,
    armourSave: number,
    maxWounds: number,
    leadershipValue: number,
    objectiveControl: number,
    baseSize: number,
    unitAbility: string,
    unitWargearOptions: string,
    unitComposition: string,
    unitSize: string,
    unitCost: string
}

export default function UnitCard({ unitOfficialName, unitAbility }: UnitCardProps) {
    return (
        <div style={styles.card}>
            <h3 style={styles.cardTitle}>{unitOfficialName}</h3>
            <p style={styles.cardRule}>{unitAbility}</p>
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
        height: "200px",
        minHeight: "200px",
        overflow: "hidden",
    },
    cardTitle: {
        fontSize: "1.25rem",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "0.5rem",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    cardRule: {
        textAlign: "center",
        fontSize: "1rem",
        lineHeight: "1.5",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    }
};
