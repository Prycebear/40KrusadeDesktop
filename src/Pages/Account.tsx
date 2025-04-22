import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

export default function Account() {
    const { authToken, logout } = useAuth();
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!authToken) return;
        fetchUserProfile();
    }, [authToken]);

    const fetchUserProfile = async () => {
        console.log("Fetching user profile with " + authToken);
        try {
            const response = await fetch("http://localhost:8080/api/auth/profile", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setUsername(data.username);
            } else {
                console.error("Failed to fetch user data");
            }
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div style={{ padding: "2rem", color: "#fff" }}>
            <h1>Account Page</h1>
            {username ? (
                <div>
                    <div><strong>Username:</strong> {username}</div>
                    <div style={{ marginTop: "2rem" }}>
                        <h3>JWT Token</h3>
                        <pre
                            style={{
                                background: "#222",
                                padding: "1rem",
                                borderRadius: "0.5rem",
                                overflowX: "auto",
                                whiteSpace: "pre-wrap",
                                wordBreak: "break-word",
                                color: "#ccc"
                            }}
                        >
                            {authToken}
                        </pre>
                    </div>

                    <div>
                        <button
                            onClick={handleLogout}
                            style={{
                                marginTop: "1rem",
                                padding: "0.5rem 1rem",
                                backgroundColor: "#f44336",
                                color: "#fff",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
}
