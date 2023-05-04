import axios from "axios";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import useCurrentUser from "./useCurrentUser";
import useLoginModal from "./useLoginModal";
import useUser from "./useUser";

const useFollow = (userId: string) => {
	const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
	const { mutate: mutateFetchedUser } = useUser(userId);

	const loginModal = useLoginModal();

	const isFollowing = useMemo(() => {
		const list = currentUser?.followingIds || [];

		return list.includes(userId);
	}, [currentUser, userId]);

	const toggleFollow = useCallback(async () => {
		if (!currentUser) {
			return loginModal.onOpen();
		}

		try {
			if (isFollowing) {
				// delete request
				await axios.post("/api/follow", { userId, isDelete: true });
			} else {
				await axios.post("/api/follow", { userId, isDelete: false });
			}

			mutateCurrentUser();
			mutateFetchedUser();

			toast.success("Success");
		} catch (error) {
			toast.error("Something went wrong");
		}
	}, [currentUser, isFollowing, userId, mutateCurrentUser, mutateFetchedUser, loginModal]);

	return {
		isFollowing,
		toggleFollow,
	};
};

export default useFollow;
