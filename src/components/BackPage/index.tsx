import { ComponentProps } from "react";
import { BackPageContainer } from "./styles";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type BackPageProps = ComponentProps<typeof BackPageContainer> & {
  text: string
}

export function BackPage({text, ...rest}: BackPageProps) {
  return (
    <BackPageContainer {...rest}>
      <FontAwesomeIcon icon={faChevronLeft}/>
      {text}
    </BackPageContainer>
  )
}