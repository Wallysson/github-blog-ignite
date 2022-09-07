import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { BlogContainer, PostListContainer } from "./styles";

export function Blog() {
  return (
    <BlogContainer>
      <Profile />

      <SearchForm />
      <PostListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
      </PostListContainer>
    </BlogContainer>
  )
}