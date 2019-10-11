import { useReducer } from 'react'
import { createContainer } from 'unstated-next'

const URL = 'https://hn.algolia.com/api/v1/search'

export const ACTIONTYPE_QUERY = 'query'
export const ACTIONTYPE_SEARCH = 'search'

// allows testability of reducer - may implement business logic
export const reducer = (state, action) => {
  const { type, query, body = {}, error } = action
  switch (type) {
    case ACTIONTYPE_QUERY: {
      // always return a new object - same state object does not emit change
      return Object.assign({}, state, { query, isLoading: true })
    }
    case ACTIONTYPE_SEARCH: {
      const { page, nbPages, hits: posts } = body || {}
      const prev = Math.max(0, page)
      const next = page === nbPages ? 0 : Math.min(nbPages, page + 2)
      return Object.assign({}, state, { isLoading: false, prev, page: page + 1, next, posts, error })
    }
  }
  // ensure to return null if no update is there
  return null
}

async function queryPosts (query, page = 0) {
  const _page = Math.max(0, page - 1)
  return fetch(`${URL}?query=${encodeURIComponent(query)}&page=${_page}`)
    .then(res => res.json())
    .then(body => ({ body }))
    .catch(error => ({ error }))
}

function useQuery () {
  const [state, dispatch] = useReducer(reducer, {})

  const handleSearch = (query, page) => {
    dispatch({ type: ACTIONTYPE_QUERY, query })
    if (query) {
      queryPosts(query, page).then(({ body, error }) => {
        dispatch({ type: ACTIONTYPE_SEARCH, body, error })
      })
    } else {
      dispatch({ type: ACTIONTYPE_SEARCH, body: null, error: null })
    }
  }

  console.log(state)
  return { ...state, handleSearch }
}

const PostsStore = createContainer(useQuery)
export default PostsStore
