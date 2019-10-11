import React from 'react'

const Post = React.memo(({ created_at, title, story_title, url }) => {
  const _title = title || story_title
  return !_title
    ? null
    : (
      <div className='Post'>
        <div>{created_at}</div>
        {url && url !== ''
          ? <a href={url} target='_blank'>{_title}</a>
          : _title
        }
      </div>
    )
})

export default Post
