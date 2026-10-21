
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className="border-b border-gray-200 bg-white">
            <nav className="container mx-auto flex items-center justify-between px-4 py-4">
                <Link to="/" className="text-2xl font-bold text-teal-700">
                    WASLA
                </Link>

                <div className="flex items-center gap-6 text-sm font-medium">
                    <Link to="/" className="hover:text-teal-700">
                        Home
                    </Link>

                    <Link to="/places" className="hover:text-teal-700">
                        Places
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
