import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <header>
        <strong>Publicações</strong>
        <span>7 publicações</span>
      </header>

      <input 
        type="text" 
        placeholder="Buscar conteúdo"
      />
    </SearchFormContainer>
  )
}