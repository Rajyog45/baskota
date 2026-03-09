import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navbar = () => {
  return (
    <div>
      <header>
        <nav className='navbar'>
            <div className='logo'>
                <Link href="/">
                    <Image
                        src={"/logo-white.png"}
                        alt='logo'
                        width={300}
                        height={200}
                        className='object-cover m-10'
                    />
                </Link>
            </div>
            
        </nav>
      </header>
    </div>
  )
}

export default navbar
