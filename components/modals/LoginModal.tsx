import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import Input from "../Input";
import Modal from "../Modal";
import { toast } from "react-hot-toast";

import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";

const LoginModal = () => {
	const loginModal = useLoginModal();
	const registerModal = useRegisterModal();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = useCallback(async () => {
		try {
			setIsLoading(true);

			await signIn("credentials", {
				email,
				password,
			});

			toast.success("Logged in.");

			loginModal.onClose();
		} catch (error) {
		} finally {
			setIsLoading(false);
		}
	}, [loginModal, email, password]);

	const onToggle = useCallback(() => {
		if (isLoading) return;

		loginModal.onClose();
		registerModal.onOpen();
	}, [loginModal, registerModal, isLoading]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} disabled={isLoading} />
			<Input
				placeholder="Password"
				type="password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				disabled={isLoading}
			/>
		</div>
	);

	const footerContent = (
		<div className="text-neutral-400 text-center mt-4">
			<p>
				First time using Twitter?
				<span
					onClick={onToggle}
					className="
                        text-sky
                        cursor-pointer 
                        hover:underline
                    "
				>
					{" "}
					Create an account
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			body={bodyContent}
			footer={footerContent}
			actionLabel="Sign In"
			onClose={loginModal.onClose}
			onSubmit={onSubmit}
			disabled={isLoading}
			isOpen={loginModal.isOpen}
			title="Login"
		/>
	);
};

export default LoginModal;
