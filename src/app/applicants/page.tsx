import { RequestApplicants } from "./api";
import Topbar from "@/components/Topbar/Topbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import globals from "@/app/globals.module.scss";
import RootLayout from "../layout";

export default function ApplicantsPage() {
	return (
		<main className={globals.global}>
			{/* <Topbar />
			<Sidebar /> */}
			<RootLayout currentPath="/applicants">
				<main>
					<RequestApplicants />
				</main>
			</RootLayout>
			
		</main>
	);
}
