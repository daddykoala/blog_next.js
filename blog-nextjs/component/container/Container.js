import Link from 'next/link'

import React from 'react'
//je dois donner les props à mon composant
export default function Container({children}) {
  return (
    <>
    <nav className='navbar dark navbar-dark bg-primary'>
        <div className="container-fluid justify-content-center">
            <Link href="/" className='navbar-brand mx-4'>Acceuil</Link>
            <Link href="/blog" className='navbar-brand mx-4'>Blog</Link>
            <Link href="/utilisateurs" className='navbar-brand mx-4'>Liste</Link>

        </div>
    </nav>
    {/* je dois mettre les props en desous du composant */}
    {children}
    </>
  )
}
