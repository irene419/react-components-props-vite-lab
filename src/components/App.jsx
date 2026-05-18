import React from "react"
import blogData from "../data/blog"
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"

function App() {
  return (
    <div className="App">
      {/* Pass the blog name to Header */}
      <Header name={blogData.name} />

      {/* Pass image and about text to About */}
      <About image={blogData.image} about={blogData.about} />

      {/* Pass the posts array to ArticleList */}
      <ArticleList posts={blogData.posts} />
    </div>
  )
}

export default App