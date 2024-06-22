import React from 'react'
import { navItems } from '@/data/NavItems'
import Link from 'next/link'

const PrimaryNav = () => {
  return (
    <div className="hidden md:flex items-center space-x-6">
        {navItems.map((item, index) => (
            <Link href={item.href} key={index} passHref legacyBehavior>
            <a className="text-gray-800 hover:text-orange-500 transition duration-300">{item.label}</a>
            </Link>
        ))}
    </div>
  )
}

export default PrimaryNav