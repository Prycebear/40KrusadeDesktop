import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import FactionService from "../Services/FactionService";
import { Faction } from "../Interfaces/FactionObjects";
import ListDisplay from "./ListDisplay";
import CardGrid from "./CardGrid";

export default function Factions() {
    const [factions, setFactions] = useState<Faction[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [columns, setColumns] = useState(3);

    useEffect(() => {
        FactionService.getAll()
            .then((data) => {
                setFactions(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to load factions.");
                setLoading(false);
            });
    }, []);

    const handleColumnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setColumns(Number(e.target.value));
    };

    if (loading) return <div>Loading factions...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column" as "column",
                alignItems: "center",
                padding: "2rem",
                backgroundColor: "#1f1f1f",
                minHeight: "100vh",
            }}
        >
            <h1 style={{ color: "#fff", marginBottom: "1.5rem" }}>Factions</h1>

            <CardGrid data={factions}/>


            <div
                style={{
                    marginBottom: "1.5rem",
                    color: "#ccc",
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <label htmlFor="columns">Cards per Row: </label>
                <select id="columns" value={columns} onChange={handleColumnChange}>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
        </div>
    );
}
