import Link from "next/link";
import Image from "next/image";
import style from "@/css/navbar.module.css";

export default function Navbar() {
    return (
        <nav className={style.navbar}>
            <Link href="/">
                <Image src="/logo.svg" alt="site image" width={30} height={30}/>
            </Link>

            <Link href="/todos">Todos</Link>
        </nav>
    )
}