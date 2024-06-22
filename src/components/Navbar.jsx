'use client'

import Link from 'next/link'
import SearchInput from './SearchInput'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {
    const { data } = useSession()
    const user = data?.user ?? false

    return (
        <div className="navbar fixed z-50 top-0 bg-accent">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">Your Delivery</Link>
            </div>
            <div className="flex-none gap-2">
                <SearchInput />
                {user
                    && <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full place-content-center bg-base-300/55">
                                <span className='text-base-100'>{user.name}</span>
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <Link href='/admin/tracking/create' className="justify-between">
                                    Create Tracking
                                </Link>
                            </li>
                            <li>
                                <Link href='/admin/tracking/update/HCM123123' className="justify-between">
                                    Update Tracking
                                </Link>
                            </li>
                            <li><button type='button' onClick={signOut}>Logout</button></li>
                        </ul>
                    </div>}
            </div>
        </div>
    )
}

export default Navbar