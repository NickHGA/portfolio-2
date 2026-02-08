// import { Button } from "../ui/button"; // Access from correct path later if UI exists, for now use standard button or scaffold button
// Note: UI components not yet scaffolded. Using standard HTML for now.

type NavbarProps = {
    setCurrentView: (view: string) => void;
    currentView: string;
};

export default function Navbar({ setCurrentView, currentView }: NavbarProps) {
    const navItems = [
        { id: "hero", label: "Home" },
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50">
            <div className="text-xl font-bold">Portfolio</div>
            <ul className="flex gap-4">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => setCurrentView(item.id)}
                            className={`px-4 py-2 rounded-md transition-colors ${currentView === item.id
                                ? "bg-primary text-white"
                                : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                }`}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
