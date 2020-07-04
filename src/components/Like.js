import React from 'react'

function Like({like, count, change}) {
    return (
        <div 
            className={`like ${like ? 'plus' : ''}`} 
            onClick={change}>
                <span>{count}</span>
        </div>
    )
}

export default Like