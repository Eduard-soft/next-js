import Link from "next/link";
import { notFound } from "next/navigation";

const loadPosts = async () => {
	const res = await fetch(
		"https://purpleschool.ru/api-v2/blog/find?limit=12&offset=0",
		{ next: { revalidate: 100} }
	);
	const data = await res.json();
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve(" ");
		}, 1000)
	);
	return data;
};

export default async function Posts() {
	const blog = await loadPosts();
	if(!blog.posts) {
		notFound();
	}
  return (
     <div>
      {blog.posts.map((p) => (
				<div key={p.id}>
					<Link href={`/posts/${p.alias}`}>{p.title}</Link>	
				</div>
				))}
      </div>
  );
};
