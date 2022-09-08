import { SocialLinksContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

interface SocialLinksProps {
  login: string
  company?: string
  followers: number
}

export function SocialLinks({login, company, followers}: SocialLinksProps) {
  return (
    <SocialLinksContainer>
      <li>
        <FontAwesomeIcon icon={faGithub} />
          {login}
      </li>
      <li>
          <FontAwesomeIcon icon={faBuilding} />
          {company}
      </li>
      <li>
          <FontAwesomeIcon icon={faUserGroup} />
          {followers} seguidores
      </li>
  </SocialLinksContainer>
  )
}