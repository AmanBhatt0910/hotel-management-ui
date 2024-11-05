import React from 'react'
import Link from "next/link"
import Image from 'next/image'

const FooterLogo = (props) => {
    return (
        <div className="flex flex-col items-center">
            <Link href="/" legacyBehavior>
              <a className="flex items-center">
                <Image src="/logo.png" alt="Parth Hotel" width={120} height={40} className="h-12 w-auto" />
                <span className="text-lg font-semibold ml-2">{props.heading}</span>
              </a>
            </Link>
            <p className="mt-2 text-gray-400 text-center">{props.description}</p>
          </div>
    )
}

export default FooterLogo