import useFetch from "../Hooks/useFetch";
import { useState } from "react";
import UnitCard from "../Components/UnitCards";

export default function Units() {
    const { data, loading, error } = useFetch("http://localhost:8080/api/unit");
    const [columns, setColumns] = useState(3);
    const [factionFilter, setFactionFilter] = useState("");
    const [otherFilter1, setOtherFilter1] = useState("");
    const [otherFilter2, setOtherFilter2] = useState("");

    const handleColumnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setColumns(Number(event.target.value));
    };

    const filteredUnits = data?.filter((unit: any) => {
        let matchesFaction = true;
        if (factionFilter) {
            matchesFaction = unit.faction?.factionName === factionFilter;
        }

        let matchesOther1 = otherFilter1 ? unit.someProp === otherFilter1 : true;
        let matchesOther2 = otherFilter2 ? unit.anotherProp === otherFilter2 : true;

        return matchesFaction && matchesOther1 && matchesOther2;
    });

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Units</h1>
            <div style={styles.filters}>
                <select value={factionFilter} onChange={(e) => setFactionFilter(e.target.value)} style={styles.select}>
                    <option value="">All Factions</option>
                    <option value="Astra Militarum">Astra Militarum</option>
                    <option value="Aeldari">Aeldari</option>
                    <option value="Night Lords">Night Lords</option>
                    <option value="Emperor's Children">Emperor's Children</option>
                </select>

                <select value={otherFilter1} onChange={(e) => setOtherFilter1(e.target.value)} style={styles.select}>
                    <option value="">Filter 1</option>
                </select>

                <select value={otherFilter2} onChange={(e) => setOtherFilter2(e.target.value)} style={styles.select}>
                    <option value="">Filter 2</option>
                </select>
            </div>

            {/* Cards */}
            <div style={{ ...styles.cardContainer, gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
                {filteredUnits.map((unit: any) => (
                    <UnitCard
                        unitOfficialName={unit.unitOfficialName}
                        unitAbility={unit.unitAbility}
                    />
                ))}
            </div>

            {/* Columns Selector */}
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
        marginBottom: "1rem",
    },
    filters: {
        display: "flex",
        gap: "1rem",
        marginBottom: "1.5rem",
    },
    select: {
        padding: "0.5rem",
        fontSize: "1rem",
        borderRadius: "0.5rem",
    },
    cardContainer: {
        display: "grid",
        gap: "1.5rem",
        width: "100%",
        justifyContent: "center",
        transition: "grid-template-columns 0.3s ease",
    },
    columnSelector: {
        marginTop: "2rem",
        color: "#ccc",
        fontSize: "1rem",
        display: "flex",
        alignItems: "center",
    }
};
