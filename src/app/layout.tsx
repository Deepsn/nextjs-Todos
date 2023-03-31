import './globals.css';
import style from "./page.module.css";

export const metadata = {
	title: 'Todos App',
	description: 'Todos app made for learning',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={style.background}>{children}</body>
		</html>
	)
}
