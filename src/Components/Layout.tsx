import { Link, useLocation } from "react-router-dom";
import {useAuth} from "../Context/AuthProvider";

type LayoutProps = {
    children: React.ReactNode;
};

const nav = [
    { label: "Home", path: "/" },
    { label: "Factions", path: "/factions" },
    { label: "Units", path: "/units" },
    { label: "Crusades", path: "/crusades" },
    { label: "Rosters", path: "/rosters" },
    { label: "Login", path: "/login" },
    { label: "Register", path: "/register" },
];

export default function Layout({ children }: LayoutProps) {
    const { pathname } = useLocation();
    const { authToken } = useAuth();

    const layoutStyle = {
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#2d2d2d",
    };

    const sidebarStyle = {
        width: "250px",
        backgroundColor: "#333",
        padding: "1rem",
        borderRight: "1px solid #444",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Pushes bottom content down
    };

    const navSectionStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    };

    const navItemStyle = {
        padding: "0.75rem",
        borderRadius: "0.25rem",
        textDecoration: "none",
        display: "block",
        color: "#ccc",
    };

    const activeNavItemStyle = {
        backgroundColor: "#444",
        fontWeight: "bold",
    };

    return (
        <div style={layoutStyle}>
            <aside style={sidebarStyle}>
                {/* Top nav section */}
                <div style={navSectionStyle}>
                    <nav>
                        {nav.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                style={{
                                    ...navItemStyle,
                                    ...(pathname === item.path ? activeNavItemStyle : {}),
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Bottom account button */}
                {authToken && (
                    <Link
                        to="/account"
                        style={{
                            ...navItemStyle,
                            marginTop: "auto",
                            borderTop: "1px solid #444",
                            paddingTop: "1rem",
                        }}
                    >
                        Account
                    </Link>
                )}
            </aside>

            <main style={{
                flex: 1,
                padding: "1.5rem",
                backgroundColor: "#1f1f1f",
                display: "flex",
                flexDirection: "column",
                overflow: "auto",
            }}>
                {children}
            </main>
        </div>
    );
}
