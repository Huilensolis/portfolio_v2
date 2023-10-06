import { notFound } from "next/navigation";
import { usePosts } from "../../hooks/posts";

import { MDXRemote } from "next-mdx-remote/rsc";
import { PostLayout } from "./components/post-layout";
import { Logo } from "../../components/icons";
import { Code } from '../../components/code';

export default function Post(props: any) {
  const currentUrl = props.params.post;
  const { doesPostExist, readPost, getPostsListMetadata, getPostMetadata } =
    usePosts();

  const postExist = doesPostExist(currentUrl);
  if (!postExist) {
    return notFound();
  }

  const currentPost = readPost(currentUrl);
  const currentPostMetadata = getPostMetadata(currentUrl);

  const postsMetadata = getPostsListMetadata({ limit: 4, offset: 0 });
  const filteredPostsMetadata = postsMetadata.filter(
    (post) => post.title !== currentPostMetadata.title
  );
  return (
    <PostLayout blogsMetaData={filteredPostsMetadata}>
      <div className="prose dark:prose-invert max-w-none w-full">
        <MDXRemote source={currentPost} components={{ Logo, Code }} />
      </div>
    </PostLayout>
  );
}
