import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { BlogContainer } from "./styles";

export function Blog() {
  return (
    <BlogContainer>
      <Profile />

      <SearchForm />
    </BlogContainer>
  )
}