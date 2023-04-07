import Todo from "@/components/todo";
import style from "@/css/todos.module.css";
import { getTodos } from "@/lib/get-todos";

export default async function Home() {
	const todos = await getTodos(); 

	return (
		<section className="p-14">
			<h1 className="text text-2xl font-bold mb-5">TODOs</h1>

			<section className={style.todos}>
				{todos.map(todo => <Todo id={todo.id} title={todo.title} />)}
			</section>
		</section>
  	)
}