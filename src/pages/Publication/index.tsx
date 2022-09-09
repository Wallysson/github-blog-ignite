import { PublicationHeader } from "./components/PublicationHeader";
import { useCallback, useEffect, useState } from "react";
import { IPost } from "../Blog";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { PublicationContent } from "./components/PublicationContent";

const username = 'Wallysson'
const repoName = 'github-blog-ignite'

export function Publication() {
  const [postData, setPostData] = useState<IPost>({} as IPost)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const getPostArticle = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/repos/${username}/${repoName}/issues/${id}`)
      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }

  }, [postData])

  useEffect(() => {
    getPostArticle()
  }, [])

  return (
    <>
      <PublicationHeader postData={postData} isLoading={isLoading}/>
      {!isLoading && <PublicationContent content={postData.body}/>}
    </>
  )
}