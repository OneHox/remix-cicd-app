import { Link } from "@remix-run/react";

export default function AdminDashboardPage() {
    return (
        <main>
            <h3>Dashboard</h3>
            <Link to="/">Home</Link>
        </main>
    )
}