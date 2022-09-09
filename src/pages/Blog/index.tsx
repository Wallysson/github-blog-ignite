import { useCallback, useEffect, useState } from "react";
import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { api } from "../../lib/axios";
import { BlogContainer, EmptyPost, PostListContainer } from "./styles";

const username = 'Wallysson'
const repoName = 'github-blog-ignite'

export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
}


export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([])

  const fetchPosts = useCallback(async(query: string = "") => {
    const response = await api.get("/search/issues", {
      params: {
        q: `repo:${username}/${repoName} ${query}`
      }
    })
    console.log(response.data.items)
    setPosts(response.data.items)
  }, [posts])

  useEffect(() => {
    fetchPosts()
  }, [])

  console.log(posts)

  return (
    <BlogContainer>
      <Profile />

      <SearchForm />
        {posts.length > 0 ? (
          <PostListContainer>
            {posts.map((post) => (
              <Post key={post.number} post={post} />
            ))}
          </PostListContainer>
        ) : (
          <EmptyPost>Nenhuma publicação</EmptyPost>
        )}


    </BlogContainer>
  )
}