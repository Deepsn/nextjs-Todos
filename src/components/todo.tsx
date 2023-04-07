import style from "@/css/todos.module.css";

export default function Todo({ id, title }: { id: number, title: string }) {
    return (
        <article key={`${id}-todo`} className={style.todo}>
            <label>{title}</label>
        </article>
    )
}