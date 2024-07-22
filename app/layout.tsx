import "@/styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Hover Animation",
	description: "Hover Animation by devwithzain",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}