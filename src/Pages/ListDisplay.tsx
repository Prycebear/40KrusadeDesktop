// src/components/ListDisplay.tsx
import React from "react";

interface ListDisplayProps<T> {
    data: T[];
    cardsPerRow?: number;
    renderItem: (item: T) => React.ReactNode;
}

export default function ListDisplay<T>({
                                           data,
                                           cardsPerRow = 3,
                                           renderItem,
                                       }: ListDisplayProps<T>) {
    if (!data || data.length === 0) return <div>No items to display.</div>;

    return (
        <div
            style={{
                display: "grid",
                gap: "1.5rem",
                width: "100%",
                justifyContent: "center",
                gridTemplateColumns: `repeat(${cardsPerRow}, 1fr)`,
                transition: "grid-template-columns 0.3s ease",
            }}
        >
            {data.map(renderItem)}
        </div>
    );
}