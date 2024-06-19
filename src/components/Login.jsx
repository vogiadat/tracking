'use client'
import { signIn } from "next-auth/react"
import { useState } from "react"

const Login = ({ }) => {
    const [data, setData] = useState({ email: "", password: "" })
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
        //   .then((callback) => {
        //     setIsLoading(false);
        //     if (callback?.ok) {
        //       toast.success("Thành công");
        //       router.refresh();
        //       loginModal.onClose();
        //     }

        //     if (callback?.error) {
        //       toast.error(callback.error);
        //     }
        //   })
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