import { IPost } from "../../pages/Blog";
import { PublicationPeriodFormatter } from "../../utils/formatter";
import { PostContainer } from "./styles";

interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {
  const formattedDate = PublicationPeriodFormatter(post.created_at)

  return (
    <PostContainer to={`/publication/${post.number}`} >
      <header>
        <strong>{post.title}</strong>
        <span>{formattedDate}</span>
      </header>
      <p>{post.body}</p>
    </PostContainer>
  )
}