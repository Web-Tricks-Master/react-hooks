import React from 'react'
import CheckboxTheme from './CheckboxTheme'

function Header() {

    return (
        <header className="blog-header">
            <div className="layout layout-header" >
                <div className="blog-logo">
                    <a href="/">IT Блог</a>
                </div>
               <CheckboxTheme />
            </div> 
        </header>
    )
}

export default Header