import { useCallback, useEffect, useState } from "react";
import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { Spinner } from "../../components/Spinner";
import { api } from "../../lib/axios";
import { BlogContainer, EmptyPost, PostListContainer } from "./styles";

const username = 'Wallysson'
const repoName = 'github-blog-ignite'

export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: string
  user: {
    login: string
  }
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchPosts = useCallback(async(query: string = "") => {
    try {
      setIsLoading(true)
      const response = await api.get("/search/issues", {
        params: {
          q: `repo:${username}/${repoName} ${query}`
        }
      })
      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [posts])

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <BlogContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
        <Profile />
        <SearchForm postsLength={posts.length} fetchPosts={fetchPosts}/>
          {posts.length > 0 ? (
            <PostListContainer>
              {posts.map((post) => (
                <Post key={post.number} post={post} />
              ))}
            </PostListContainer>
          ) : (
            <EmptyPost>Nenhuma publicação</EmptyPost>
          )}
        </>
      )}


    </BlogContainer>
  )
}