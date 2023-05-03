import { useRouter } from "next/router";
import { useCallback } from "react";
import { IconType } from "react-icons";
import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";

type SidebarItemProps = {
	icon: IconType;
	href?: string;
	label: string;
	onClick?: () => void;
	isProtected?: boolean;
};

const SidebarItem = ({ icon: Icon, href, label, onClick, isProtected }: SidebarItemProps) => {
	const loginModal = useLoginModal();
	const { data: currentUser } = useCurrentUser();
	const router = useRouter();

	const handleClick = useCallback(() => {
		if (onClick) return onClick();

		if (isProtected && !currentUser) {
			loginModal.onOpen();
		} else if (href) router.push(href);
	}, [onClick, router, href, isProtected, loginModal, currentUser]);

	return (
		<div onClick={handleClick} className="flex flex-row items-center">
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
