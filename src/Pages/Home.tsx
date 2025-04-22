// src/pages/Home.tsx
export default function Home() {
    return (
        <div
            style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Centers horizontally
                color: "#fff",
            }}
        >
            <h1 style={{ marginTop: "2rem" }}>Home Page</h1>
            <p>Welcome to your Warhammer 40K Crusade Manager.</p>
        </div>
    )
}
