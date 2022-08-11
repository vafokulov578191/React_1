import React from 'react'
import './header.css'

function Header() {
  return (
    <header className='header'>
      <div className="header_top">
          <span className='text'>GIGY BLOG</span>
          <h1 className='h1'>Get the latest news, articles and stories from Gigy</h1>
      </div>
      <div className="header_bottom">
          <button className='btn'>All</button>
          <button className='button'>News</button>
          <button className='button'>Articles</button>
          <button className='button'>Stories</button>
      </div>
    </header>
  )
}

export default Header