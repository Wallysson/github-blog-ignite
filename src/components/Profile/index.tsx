import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { ExternalLink } from "../ExternalLink";
import { SocialLinks } from "../SocialLinks";
import { ProfileAvatar, ProfileContainer, ProfileInfo } from "./styles";

const username = 'Wallysson'

interface ProfileData {
  name: string
  html_url: string
  bio: string
  avatar_url: string
  login: string
  company: string
  followers: number
}


export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)

  const fetchProfileData = useCallback(async () => {
    const response = await api.get(`users/${username}`)
    setProfileData(response.data)
  }, [profileData])

  useEffect(() => {
    fetchProfileData()
  }, [])

  return (
    <ProfileContainer>
      <ProfileAvatar src={profileData.avatar_url}/>
      <ProfileInfo>
        <header>
          <h1>{profileData.name}</h1>
          <ExternalLink text="Github" href={profileData.html_url} target="_blank"/>
        </header>
        <p>
          {profileData.bio}
        </p>

        <SocialLinks login={profileData.login} company={profileData.company} followers={profileData.followers}/>
      </ProfileInfo>
    </ProfileContainer>
  )
}

