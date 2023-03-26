import React from 'react';
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/home">Home</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/menu2">Menu 2</Link>
            </ul>
        </div>

    );
}

export default Sidebar;
