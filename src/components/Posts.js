import React from 'react'
import Post from './Post'
import Pagination from './Pagination'
import PostsStore from '../stores/PostsStore'

const Posts = React.memo(({ posts = [], query, handleSearch, page, next = '', prev = '' }) => {
  const paginationProps = {
    prev,
    page,
    next,
    handlePrev: () => handleSearch(query, prev || 0),
    handleNext: () => handleSearch(query, next || 0)
  }
  const handleChange = (event) => handleSearch(event.target.value)

  const pagination = page ? <Pagination {...paginationProps} /> : null

  return (
    <div>
      <input type='text' placeholder='search...' value={query || ''} onChange={handleChange} />
      {pagination}
      {posts.map((item, i) => (<Post {...item} key={i} />))}
      {pagination}
    </div>
  )
})

Posts.Connected = function PostsConnected (props) {
  const posts = PostsStore.useContainer()
  return (
    <Posts {...props} {...posts} />
  )
}

export default Posts
