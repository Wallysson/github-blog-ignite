import { ExternalLink } from "../ExternalLink";
import { SocialLinks } from "../SocialLinks";
import { ProfileAvatar, ProfileContainer, ProfileInfo } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileAvatar src="https://avatars.githubusercontent.com/u/50278324?v=4"/>
      <ProfileInfo>
        <header>
          <h1>Cameron William</h1>
          <ExternalLink text="Github" href="https://ge.globo.com/" target="_blank"/>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </p>

        <SocialLinks />
      </ProfileInfo>
    </ProfileContainer>
  )
}

