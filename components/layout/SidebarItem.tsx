import { IconType } from "react-icons";

type SidebarItemProps = {
	icon: IconType;
	href?: string;
	label: string;
	onClick(): void;
};

const SidebarItem = ({ icon: Icon, href, label, onClick }: SidebarItemProps) => {
	return (
		<div className="flex flex-row items-center">
			<div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer lg:hidden">
				<Icon size={28} color="white" />
			</div>
			<div className="relative rounded-full hidden lg:flex items-center gap-4 p-4 hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer">
				<Icon size={24} color="white" />
				<p className="hidden lg:block text-white text-xl font-semibold">{label}</p>
			</div>
		</div>
	);
};

export default SidebarItem;
