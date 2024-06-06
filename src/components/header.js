import React from "react";
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext'

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <header className="bg-yellow-100 flex justify-between items-center sticky top-0 z-50">
         <h1 className="text-blue-900 bg-yellow-200 py-2 px-3 rounded shadow">Omis beste Rezepte</h1>
         <Link to="/" className="text-blue-900 hover:text-gray-900">
                Rezepte Übersicht
            </Link>
        <button
            onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-300 dark:bg-gray-700">
        {theme === 'light' ? <Sun className="text-yellow-500" /> : <Moon className="text-white" />}
      </button>
        </header>
    );
}

export default Header;