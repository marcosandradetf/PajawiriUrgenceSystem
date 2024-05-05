import Topbar from "@/components/Topbar/Topbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import globals from "./globals.module.scss";
import Box from "@/components/Box/Box";
import RootLayout from "./layout";

export default function Home() {
	return (
		<main className={globals.global}>
			<RootLayout currentPath="/">
				<Box>
					<section>
						<h2>SOLICITAÇÃO DE ATENDIMENTO</h2>
					</section>
					<section>
						<h2>INFORMAÇÕES</h2>
					</section>
					<section>
						<h2>TROTE</h2>
					</section>
					<section>
						<h2>ENGANO</h2>
					</section>
					<section>
						<h2>CHAMADA INTERNA</h2>
					</section>
					<section>
						<h2>SOLICITA</h2>
					</section>
				</Box>
			</RootLayout>
		</main>
	);
}
