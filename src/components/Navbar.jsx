function Navbar() {
    return (
        <nav className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold">Siyamthanda Philemon Mnyabiso</h1>
            <ul className="flex space-x-6 text-lg">
                <li className="hover:text-gray-500 cursor-pointer">Home</li>
                <li className="hover:text-gray-500 cursor-pointer">Projects</li>
                <li className="hover:text-gray-500 cursor-pointer">Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;