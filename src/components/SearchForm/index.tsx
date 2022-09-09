import { SearchFormContainer } from "./styles";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

const searchFormScheme = zod.object({
  query: zod.string()
})

type SearchFormInputs = zod.infer<typeof searchFormScheme>

export function SearchForm() {
  const {register, handleSubmit} = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormScheme)
  })

  function handleSearchPost() {

  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPost)}>
      <header>
        <strong>Publicações</strong>
        <span>7 publicações</span>
      </header>

      <input 
        type="text" 
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </SearchFormContainer>
  )
}