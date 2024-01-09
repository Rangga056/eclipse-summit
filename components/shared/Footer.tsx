import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image src="/assets/images/eclipse.svg" alt="logo" width={128} height={38} className='ml-7 sm:ml-0'/>
        </Link>

        <p className="">2024 Eclipse Summit. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer