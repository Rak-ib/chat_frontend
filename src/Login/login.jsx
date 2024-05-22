import { Link } from "react-router-dom";


const login = () => {
    return (
        <div className="hero min-h-screen bg-green-400">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-white">Register now</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-500">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered text-green-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-500">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered text-green-500" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 flex flex-col gap-7 justify-start">
                            <button className="btn btn-primary bg-green-500 hover:bg-green-800">Register</button>
                            <div className="label-text ml-0 pl-0">
                                <p>if have an account then click <span className="text-green-500 font-bold"><Link>login</Link></span> </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default login;