import { SocialLinkPublicationContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faComment, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { PublicationPeriodFormatter } from "../../../../utils/formatter";

interface SocialLinkPublicationProps {
  postLogin: string
  postComment: string
  postCreated: string
}

export function SocialLinkPublication({postLogin, postComment, postCreated}: SocialLinkPublicationProps) {
  const formattedDate = PublicationPeriodFormatter(postCreated)

  return (
    <SocialLinkPublicationContainer>
      <li>
        <FontAwesomeIcon icon={faGithub} />
          {postLogin}
      </li>
      <li>
          <FontAwesomeIcon icon={faCalendar} />
          {formattedDate}
      </li>
      <li>
          <FontAwesomeIcon icon={faComment} />
          {postComment} comentários
      </li>
  </SocialLinkPublicationContainer>
  )
}