import { BackPage } from "../BackPage";
import { ExternalLink } from "../ExternalLink";
import { SummaryArticleContainer } from "./styles";

export function SummaryArticle() {
  return (
    <SummaryArticleContainer>
      <header>
        <BackPage text="Voltar"/>
        <ExternalLink text="Ver no Github"/>
      </header>
    </SummaryArticleContainer>
  )
}