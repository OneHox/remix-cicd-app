import { Outlet } from "@remix-run/react";

export default function AdminLayout() {
    return (
        <main>
            <h2>Admin Layout Header</h2>
            <Outlet />
        </main>
    )
}