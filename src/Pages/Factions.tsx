// src/pages/Factions.tsx
import useFetch from "../Hooks/useFetch";
import FactionCard from "../components/FactionCard"; // Import the FactionCard component
import {useState} from "react";

export default function Factions() {
    const {data, loading, error} = useFetch("http://localhost:8080/api/faction");
    const [columns, setColumns] = useState(3);

    const handleColumnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setColumns(Number(event.target.value));
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Factions</h1>
            <div style={{...styles.cardContainer, gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
                {data.map((faction: any) => (
                    <FactionCard
                        name={faction.factionName}
                        rule={faction.factionRule}
                    />
                ))}
            </div>
            <div style={styles.columnSelector}>
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
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: "#1f1f1f",
        minHeight: "100vh",
    },
    title: {
        color: "#fff",
        marginBottom: "1.5rem",
    },
    cardContainer: {
        display: "grid",
        gap: "1.5rem",
        width: "100%",
        justifyContent: "center",
        transition: "grid-template-columns 0.3s ease",
    },
    columnSelector: {
        marginBottom: "1.5rem",
        color: "#ccc",
        fontSize: "1rem",
        display: "flex",
        alignItems: "center",
    }
};
