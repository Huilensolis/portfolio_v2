import { NextResponse } from "next/server";
import { usePosts } from "@hooks/posts";

export async function GET(req: Request, _res: NextResponse) {
  const { getPostsListMetadata } = usePosts();

  const { searchParams } = new URL(req.url);
  const offsetFromParams = searchParams.get("offset");
  const limitFromParams = searchParams.get("limit");

  const offset = offsetFromParams ? parseInt(offsetFromParams) : 0;
  const limit = limitFromParams ? parseInt(limitFromParams) : 10;

  try {
    const postsMetadata = getPostsListMetadata({ offset, limit });
    return NextResponse.json({ data: postsMetadata });
  } catch (error) {
    return NextResponse.error();
  }
}
