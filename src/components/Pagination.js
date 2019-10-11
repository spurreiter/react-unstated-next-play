import React from 'react'

const Pagination = React.memo(({ prev, page, next, handlePrev, handleNext }) => (
  <div className='Pagination'>
    <button disabled={!prev} onClick={handlePrev}>&lt;{prev}</button>
    <span className='Pagination__Page'>{ page || '' }</span>
    <button disabled={!next} onClick={handleNext}>{next}&gt;</button>
  </div>
))

export default Pagination
