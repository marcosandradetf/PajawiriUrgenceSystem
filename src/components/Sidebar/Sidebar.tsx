'use client';

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

interface SidebarProps {
	currentPath: string;
  }

export default function Sidebar({ currentPath }: SidebarProps) {


	return (
		<nav className={style.box_side_bar}>
			<ul>
				<div className={currentPath === '/' ? style.active : ''}>
					<li>
						<Link href="/">Gerar chamado</Link>
					</li>
					<span>
						<RiGlobalLine />
					</span>
				</div>
				<div className={currentPath === '/applicants' ? style.active : ''}>
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
					<li>Sair</li>
					<span>
						<PiSignOut />
					</span>
				</div>
			</ul>
		</nav>
	);
}
