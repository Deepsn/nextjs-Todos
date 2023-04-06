import style from "@/css/page.module.css";

export default function Home() {
	return (
		<section id={style.intro}>
			<h1>Main page</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, facilis?</p>
			<div>
				<button>Learn more</button>
				<button>Login</button>
			</div>
		</section>	
  	)
}