import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-yellow-100 flex justify-between items-center sticky top-0 z-50">
         <h1 className="text-blue-900 bg-yellow-200 py-2 px-3 rounded shadow">Omis beste Rezepte</h1>
         <Link to="/" className="text-blue-900 hover:text-gray-900">
                Rezepte Übersicht
            </Link>
        </header>
    );
}

export default Header;