// src/components/Card.tsx
import React from "react";

type CardProps = {
    id: number;
    title: string;
    image: string;
};


export default function Card({id, title, image}: CardProps)
{
    return (
        <div style={{
            backgroundColor: "#2a2a2a",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            textAlign: "center" as const,
            color: "#fff",
            paddingBottom: "1rem",
            maxWidth: "250px",
        }}>
            <img src={image} alt={title} style={{
                width: "100%",
                height: "auto",
            }}/>
            <h3 style={{
                margin: "1rem 0 0 0",
                fontSize: "1.2rem",
            }}>{title}</h3>
        </div>
    );
}
;

const styles = {
    card: {
        backgroundColor: "#2a2a2a",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        textAlign: "center" as const,
        color: "#fff",
        paddingBottom: "1rem",
        maxWidth: "250px",
    },
    image: {
        width: "100%",
        height: "auto",
    },
    title: {
        margin: "1rem 0 0 0",
        fontSize: "1.2rem",
    },
};
