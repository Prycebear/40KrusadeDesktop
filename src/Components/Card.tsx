// src/components/Card.tsx
import React from "react";

interface CardProps<T> {
    key: number;
    data: T;
    renderContent: (data: T) => React.ReactNode;
}

export default function Card<T>({ data, renderContent }: CardProps<T>) {
    return (
        <div
            style={{
                backgroundColor: "#2a2a2a",
                padding: "1rem",
                borderRadius: "8px",
                color: "#fff",
                boxShadow: "0 2px 5px rgba(0,0,0,0.5)",
            }}
        >
            {renderContent(data)}
        </div>
    );
}
