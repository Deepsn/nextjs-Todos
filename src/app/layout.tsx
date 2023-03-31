import Navbar from '@/components/navbar';
import './globals.css';
import style from "@/css/page.module.css";

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
			<body className={style.background}>
				<Navbar/>
				{children}
			</body>
		</html>
	)
}
