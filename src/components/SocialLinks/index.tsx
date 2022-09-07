import { SocialLinksContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function SocialLinks() {
  return (
    <SocialLinksContainer>
      <li>
        <FontAwesomeIcon icon={faGithub} />
          sonsonlima
      </li>
      <li>
          <FontAwesomeIcon icon={faBuilding} />
          CEL-Consultoria
      </li>
      <li>
          <FontAwesomeIcon icon={faUserGroup} />
          32 seguidores
      </li>
  </SocialLinksContainer>
  )
}