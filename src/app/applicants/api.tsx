import Box from "@/components/Box/Box";
import style from "./style.module.scss";

export async function RequestApplicants() {
	try {
		const response = await fetch("http://localhost:3001/solicitantes");
		const data = await response.json();
		return (
				<Box>
					{data.map((item: any) => (
						<ul key={item.id}>
                            <li>Telefone: {item.nome}</li>
                            <li>Telefone: {item.telefone}</li>
                            <li>Telefone: {item.cidade}</li>
                        </ul>

					))}
				</Box>
		);
	} catch (error) {
		return <span>Loading...</span>;
	}
}
