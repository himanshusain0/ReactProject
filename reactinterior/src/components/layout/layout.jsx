import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white   ">
      {/* Fixed Header */}
      <Header/>
      
      {/* Main Content - Header ke height ka padding diya */}
      <main className="flex-1 pt-20">
        {children}
      </main>
      
      {/* Footer automatically bottom pe */}
      <Footer/>
    </div>
  )
}

export default Layout