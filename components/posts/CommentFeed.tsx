import CommentItem from "./CommentItem";

type CommentFeedProps = {
	comments?: Record<string, any>[];
};

const CommentFeed = ({ comments }: CommentFeedProps) => {
	return (
		<>
			{comments?.map((comment) => (
				<CommentItem key={comment.id} data={comment} />
			))}
		</>
	);
};

export default CommentFeed;
