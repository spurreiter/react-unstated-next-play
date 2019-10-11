import React from 'react'

const Post = React.memo(({ created_at, title, story_title, url }) => {
  const _title = title || story_title
  return _title
    ? (
      <div className='Post'>
        <div>{created_at}</div>
        {url
          ? <a href={url} target='_blank'>{_title}</a>
          : _title
        }
      </div>
    )
    : null
})

export default Post
