'use client'
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Login = ({ }) => {
    const router = useRouter()
    const [data, setData] = useState({ email: "admin@gmail.com", password: "123123" })
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const res = await signIn("credentials", {
            ...data,
            redirect: false,
        })

        setIsLoading(false)
        if (res.status !== 200) return alert(res.error)
        return router.push('/admin')
    }

    return (
        <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    value={data.email}
                    onChange={e => setData({ ...data, email: e.target.value.trim() })}
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    className="input input-bordered"
                    required
                />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    className="input input-bordered"
                    label="Password"
                    required
                    value={data.password}
                    onChange={e => setData({ ...data, password: e.target.value.trim() })}
                />
                <label className="label">
                    <Link href="/" className="label-text-alt link link-hover">Go to homepage</Link>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-accent">
                    {isLoading ?
                        <>
                            <span className="loading loading-spinner"></span>
                            loading
                        </>
                        : "Login"}
                </button>
            </div>
        </form>
    )
}

export default Login