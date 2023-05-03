import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";

const Sidebar = () => {
	const { data: currentUser } = useCurrentUser();

	const items = [
		{
			label: "Home",
			href: "/",
			icon: BsHouseFill,
		},
		{
			label: "Notifications",
			href: "/notifications",
			icon: BsBellFill,
			isProtected: true,
		},
		{
			label: "Profile",
			href: "/user/123",
			icon: FaUser,
			isProtected: true,
		},
	];

	return (
		<div className="col-span-1 h-full pr-4 md:pr-6">
			<div className="flex flex-col items-end">
				<div className="space-y-2 lg:w-[230px]">
					<SidebarLogo />
					{items.map((item) => (
						<SidebarItem
							key={item.href}
							href={item.href}
							label={item.label}
							icon={item.icon}
							isProtected={item.isProtected}
						/>
					))}
					{currentUser && <SidebarItem onClick={() => signOut()} label="Logout" icon={BiLogOut} />}
					<SidebarTweetButton />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
