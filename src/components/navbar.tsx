import Link from "next/link";
import Image from "next/image";
import style from "@/css/page.module.css";

export default function Navbar() {
    return (
        <nav className={style.navbar}>
            <Link href="/">
                <Image src="/logo.svg" className="inline mr-7" alt="site image" width={30} height={30}/>
            </Link>

            <Link className={`${style.text} ${style.navbaritem}`} href="/todos">Todos</Link>
        </nav>
    )
}