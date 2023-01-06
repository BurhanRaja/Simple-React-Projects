import React from 'react'

function Quote({quote, author}) {
  return (
    <div>
        <div className="quote-container">
          <p className="quote">
            "{quote}"
          </p>
          <p>
            - {author}
          </p>
        </div>
    </div>
  )
}

export default Quote