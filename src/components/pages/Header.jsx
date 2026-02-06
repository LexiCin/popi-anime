import Link from "next/link"

const  Header  = () => {
    return (
        <div className="bg-primary p-2">
            <header>
            <Link href="/" className="text-accent"> Popi Anime</Link>
            </header>
        </div>
    )
}

export default Header