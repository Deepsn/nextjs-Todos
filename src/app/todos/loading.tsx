import style from "@/css/todos.module.css";

export default function Loading() {
    return (
        <section className="p-14">
			<h1 className="text text-2xl font-bold mb-5">TODOs</h1>

			<section className={style.todos}>
				{[...Array(20).keys()].map(i => (
                    <article key={i} className={style.todo}>
                        <span 
                            className="inline-block h-full w-full animate-pulse bg-slate-800"
                            style={{
                                animationDelay: `${i * .05}s`,
                                animationDuration: "1s"
                            }}
                        />
                    </article>
                ))}
			</section>
		</section>
    )
}