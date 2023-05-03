import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

type HeaderProps = {
	label: string;
	showBackArrow?: boolean;
};

const Header = ({ label, showBackArrow }: HeaderProps) => {
	const router = useRouter();

	const handleBack = useCallback(() => {
		router.back();
	}, [router]);

	return (
		<div className="border-b-[1px] border-neutral-800 p-5">
			<div className="flex flex-row items-center gap-2">
				{showBackArrow && (
					<BiArrowBack
						className="cursor-pointer hover:opacity-70 transition"
						color="white"
						size={20}
						onClick={handleBack}
					/>
				)}

				<h1 className="ms-2 text-white text-xl font-semibold">{label}</h1>
			</div>
		</div>
	);
};

export default Header;
