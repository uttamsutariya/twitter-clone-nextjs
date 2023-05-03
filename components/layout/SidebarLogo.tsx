import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
	const route = useRouter();

	return (
		<div
			onClick={() => route.push("/")}
			className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-sky cursor-pointer transition"
		>
			<BsTwitter size={28} color="white" />
		</div>
	);
};

export default SidebarLogo;
