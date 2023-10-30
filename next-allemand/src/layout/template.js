import Link from "next/link"
import LoginBtn from "@/components/login-btn"
import Template from "@/layout/template"

export default function Component({ children }) {
    return (
        <>
            <nav className="bg-gray-300 p-4 flex justify-between">
                <ul className="list-none flex gap-4">
                    <li>
                        <Link href="/" className="text-gray-800">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/apropos" className="text-gray-800 text-l">À Propos</Link>
                    </li>
                    <li>
                        <Link href="/nosproduits" className="text-gray-800">Nos Produits</Link>
                    </li>
                </ul>
                <div className="flex gap-4">
                    <LoginBtn /> 
                </div>
            </nav>
            {children}
        </>
    )
}