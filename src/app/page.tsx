import Link from "next/link";
import style from "@/css/home.module.css";

export default function Home() {
	return (
		<section id={style.intro}>
			<h1>Main page</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, facilis?</p>
			<div>
				<Link href={"/about"}>Learn more</Link>
				<Link href={"/login"}>Login</Link>
			</div>
		</section>	
  	)
}