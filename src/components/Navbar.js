'use client'

import Link from 'next/link'
import { HomeIcon, Menu, TruckIcon } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import { useState } from 'react'
import { resetCache } from '@/app/admin/tracking/cache/api'

const Navbar = () => {
  const { data } = useSession()
  const [search, setSearch] = useState('')
  const user = data?.user ?? false

  return (
    <div className='navbar fixed z-20 top-0 bg-accent'>
      <div className='flex-1'>
        {user ? (
          <div className='drawer h-full'>
            <input id='my-drawer' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content'>
              <label
                htmlFor='my-drawer'
                className='btn btn-ghost text-base-100 drawer-button bg-base-300/55'
              >
                <Menu />
              </label>
            </div>
            <div className='drawer-side'>
              <label htmlFor='my-drawer' aria-label='close sidebar' className='drawer-overlay ' />
              <ul className='menu bg-base-200 text-base-content min-h-full min-w-40'>
                {/* Sidebar content here */}
                <li className='btn btn-accent text-base-100 text-lg font-bold'>Your Delivery</li>
                <li className='text-lg font-bold'>
                  <Link href='/'>
                    <HomeIcon />
                    Home
                  </Link>
                </li>
                <li className='text-lg font-bold'>
                  <Link href='/admin/tracking'>
                    <TruckIcon />
                    Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link href='/' className='btn btn-ghost text-base-100 text-xl max-sm:hidden'>
            Your Delivery
          </Link>
        )}
      </div>
      <div className='flex-none gap-2 max-sm:w-full'>
        <div className='max-sm:min-w-full'>
          <label className='input input-bordered input-accent flex items-center gap-2 '>
            <input
              type='text'
              className='grow text-zinc-700'
              placeholder='Search by tracking number'
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link
              href={`/tracking/${search}`}
              className='btn btn-sm btn-accent text-base-100'
              onClick={() => resetCache(true)}
            >
              Tracking
            </Link>
          </label>
        </div>
        {user && (
          <>
            <div className='dropdown dropdown-end'>
              <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
                <div className='w-10 rounded-full place-content-center bg-base-300/55'>
                  <span className='text-base-100'>{user.name}</span>
                </div>
              </div>
              <ul
                tabIndex={0}
                className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
              >
                <li>
                  <button type='button' onClick={signOut}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
