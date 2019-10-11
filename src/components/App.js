import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import Counter from './Counter'
import CounterStore from '../stores/CounterStore'
import Posts from './Posts'
import PostsStore from '../stores/PostsStore'

export default function App () {
  return (
    <>
      <style>{`
body { font-family: Arial, Helvetiva, sans-serif; }
.Counter__Count { padding: 0 0.5em; }
.Post { border-top: 1px solid grey; padding: 0.5em; }
.Pagination__Page { padding: 0.5em; }
      `}</style>
      <ErrorBoundary>
        <h2>Counter</h2>
        <CounterStore.Provider>
          <Counter.Connect />
        </CounterStore.Provider>
        <CounterStore.Provider initialState={{ initialCount: 2, step: 2 }}>
          <Counter.Connect />
        </CounterStore.Provider>
        <hr />
        <h2>Posts</h2>
        <PostsStore.Provider>
          <Posts.Connect />
        </PostsStore.Provider>
      </ErrorBoundary>
    </>
  )
}
