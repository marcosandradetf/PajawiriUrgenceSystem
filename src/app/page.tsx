import Topbar from "@/components/Topbar/Topbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import globals from "./globals.module.scss";
import Box from "@/components/Box/Box";

export default function Home() {
	return (
		<main className={globals.global}>
			<Topbar />
			<Sidebar />
			<Box>
				<section>
					<h2>SOLICITAÇÃO DE ATENDIMENTO</h2>
				</section>
				<section>
					<h2>INFORMAÇÕES</h2>
				</section>
			</Box>
		</main>
	);
}
