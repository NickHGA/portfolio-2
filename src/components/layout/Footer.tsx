export default function Footer() {
    return (
        <footer className="p-8 text-center bg-gray-100 dark:bg-zinc-900 border-t border-gray-200 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
        </footer>
    );
}
