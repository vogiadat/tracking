'use client'
import { useState } from "react"

const Login = ({ }) => {
    const [data, setData] = useState({ email: "", password: "" })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)

    }

    return (
        <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    value={data.email}
                    onChange={e => setData({ ...data, email: e.target.value })}
                    type="email"
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
                    required
                    value={data.password}
                    onChange={e => setData({ ...data, password: e.target.value })}
                />
                {/* <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label> */}
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-accent">Login</button>
            </div>
        </form>
    )
}

export default Login