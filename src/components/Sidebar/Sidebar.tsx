import style from "./sidebar.module.scss";
import { RiGlobalLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { IoIosSend } from "react-icons/io";
import { GrInProgress } from "react-icons/gr";
import { BsChatLeftDots } from "react-icons/bs";
import { PiAmbulanceBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { PiSignOut } from "react-icons/pi";
import Link from "next/link";

export default function Sidebar() {
	return (
		<nav className={style.box_side_bar}>
			<ul>
				<div>
					<li className="pt-10">
						<Link href="/">Gerar chamado</Link>
					</li>
					<span className="pt-10">
						<RiGlobalLine />
					</span>
				</div>
				<div></div>
				<div>
					<li>
						<Link href="/applicants">Atender chamado</Link>
					</li>
					<span>
						<TfiWrite />
					</span>
				</div>
				<div>
					<li>Despachar chamado</li>
					<span>
						<IoIosSend />
					</span>
				</div>
				<div>
					<li>Em andamento</li>
					<span>
						<GrInProgress />
					</span>
				</div>
				<div>
					<li>Chat</li>
					<span>
						<BsChatLeftDots />
					</span>
				</div>
				<div>
					<li>Ambulancias</li>
					<span>
						<PiAmbulanceBold />
					</span>
				</div>
				<div>
					<li>Pesquisar chamado</li>
					<span>
						<IoSearch />
					</span>
				</div>
			</ul>
			<ul>
				<div>
					<li className="py-10">Sair</li>
					<span>
						<PiSignOut />
					</span>
				</div>
			</ul>
		</nav>
	);
}
