import React from 'react'
import Like from './Like'

function Post({title, body, count}) {

    return (
        <div className="article-content">
            <div className="article-title">
               <a href="/">{title}</a>
            </div>
            <p className="article-text">
                {body}
            </p>
            <Like />
        </div>
    )
}

export default Post