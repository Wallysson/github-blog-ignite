import { SearchFormContainer } from "./styles";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

const searchFormScheme = zod.object({
  query: zod.string()
})

type SearchFormInputs = zod.infer<typeof searchFormScheme>

interface SearchFormProps {
  postsLength: number
  fetchPosts: (query?: string) => Promise<void>
}

export function SearchForm({postsLength, fetchPosts}: SearchFormProps) {
  const {register, handleSubmit} = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormScheme)
  })

  async function handleSearchPost(data: SearchFormInputs) {
    await fetchPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPost)}>
      <header>
        <strong>Publicações</strong>
        <span>{postsLength} publicações</span>
      </header>

      <input 
        type="text" 
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </SearchFormContainer>
  )
}