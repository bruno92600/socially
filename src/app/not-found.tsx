import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h2>Pas trouvé</h2>
            <p>Impossible de trouver la ressource demandée</p>
            <Link href="/">Accueil</Link>
        </div>
    )
}