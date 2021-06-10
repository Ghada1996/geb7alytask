import Link from 'next/link'
import React from 'react'


const Thankspage = () => {
    
    return (
        <div className="container text-center">
        <h1 >Thank You !</h1>
        <hr />
        <Link href="/items">
          <a>Continue to homepage</a>
        </Link>
      </div>
    )
}

export default Thankspage
