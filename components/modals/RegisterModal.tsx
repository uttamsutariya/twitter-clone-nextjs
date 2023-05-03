import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useLoginModal from "@/hooks/useLoginModal";

const RegisterModal = () => {
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();

	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = useCallback(() => {
		try {
			setIsLoading(true);

			// TODO register

			registerModal.onClose();
		} catch (error) {
		} finally {
			setIsLoading(false);
		}
	}, [registerModal]);

	const onToggle = useCallback(() => {
		if (isLoading) return;

		registerModal.onClose();
		loginModal.onOpen();
	}, [loginModal, registerModal, isLoading]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} disabled={isLoading} />
			<Input placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} disabled={isLoading} />
			<Input
				placeholder="Username"
				onChange={(e) => setUsername(e.target.value)}
				value={username}
				disabled={isLoading}
			/>
			<Input
				placeholder="Password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				disabled={isLoading}
			/>
		</div>
	);

	const footerContent = (
		<div className="text-neutral-400 text-center mt-4">
			<p>
				Already have an account?
				<span
					onClick={onToggle}
					className="
            text-white 
            cursor-pointer 
            hover:underline
          "
				>
					{" "}
					Sign in
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			body={bodyContent}
			footer={footerContent}
			actionLabel="Register"
			onClose={registerModal.onClose}
			onSubmit={onSubmit}
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title="Create an account"
		/>
	);
};

export default RegisterModal;
