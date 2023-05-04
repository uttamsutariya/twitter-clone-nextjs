import Form from "@/components/Form";
import Header from "@/components/Header";
import CommentFeed from "@/components/posts/CommentFeed";
import PostItem from "@/components/posts/PostItem";
import usePost from "@/hooks/usePost";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

const PostView = () => {
	const router = useRouter();

	const { postId } = router.query;

	const { data: fetchedPost, isLoading } = usePost(postId as string);

	if (isLoading || !fetchedPost) {
		return (
			<div className="flex justify-center items-center h-full">
				<ClipLoader color="lightblue" size={80} />
			</div>
		);
	}

	return (
		<>
			<div className="h-screen overflow-y-auto">
				<Header label="Tweet" showBackArrow />
				<PostItem data={fetchedPost} />
				<Form placeholder="Tweet your reply" isComment postId={postId as string} />
				<CommentFeed comments={fetchedPost?.comments} />
			</div>
		</>
	);
};

export default PostView;
