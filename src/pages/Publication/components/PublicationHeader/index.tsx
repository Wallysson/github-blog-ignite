import { useNavigate } from "react-router-dom";
import { BackPage } from "../../../../components/BackPage";
import { ExternalLink } from "../../../../components/ExternalLink";
import { Spinner } from "../../../../components/Spinner";
import { IPost } from "../../../Blog";
import { SocialLinkPublication } from "../SocialLinkPublication";
import { PublicationHeaderContainer } from "./styles";

interface PublicationHeader {
  postData: IPost
  isLoading: boolean
}

export function PublicationHeader({postData, isLoading}: PublicationHeader) {
  const navigate = useNavigate() 

  function goBack() {
    navigate(-1)
  }

  return (
    <PublicationHeaderContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <BackPage 
             text="Voltar"
             onClick={goBack}
            />
            <ExternalLink 
              text="Ver no Github"
              href={postData.html_url}
              target="_blank"
            />
          </header>
          <h1>{postData.title}</h1>
          <SocialLinkPublication postLogin={postData.user.login} postComment={postData.comments} postCreated={postData.created_at} />
        </>
      )}
    </PublicationHeaderContainer>
  )
}