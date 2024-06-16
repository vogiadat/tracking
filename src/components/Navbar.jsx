import Link from 'next/link'
import SearchInput from './SearchInput'

const Navbar = () => {
    return (
        <div className="navbar fixed z-50 top-0 bg-accent bg-opacity-60">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">Your Delivery</Link>
            </div>
            <div className="flex-none gap-2">
                <SearchInput />
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full"></div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar