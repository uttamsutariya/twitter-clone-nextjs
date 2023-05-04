import Form from "@/components/Form";
import Header from "@/components/Header";
import PostFeed from "@/components/posts/PostFeed";

export default function Home() {
	return (
		<>
			<div className="h-screen overflow-y-auto">
				<Header label="Home" />
				<Form placeholder="What's happening" />
				<PostFeed />
			</div>
		</>
	);
}
