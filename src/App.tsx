// src/App.tsx
import { Routes, Route } from "react-router-dom"; // Import from 'react-router-dom'
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Factions from "./Pages/Factions";
import Crusades from "./pages/Crusades";
import Rosters from "./pages/Rosters";
import Login from "./Components/User/Login";
import Register from "./Components/User/Register";
import Account from "./Pages/Account";
import Units from "./Pages/Units"; // Make sure you have the Rosters page

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/factions" element={<Factions />} />
                <Route path="/units" element={<Units />} />
                <Route path="/crusades" element={<Crusades />} />
                <Route path="/rosters" element={<Rosters />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/account" element={<Account />} />
            </Routes>
        </Layout>
    );
}
