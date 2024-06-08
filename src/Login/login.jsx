import axios from "axios";
import { Link } from "react-router-dom";


const Login = () => {
    const handleLogin=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        const user={email,password}
        axios.post("http://localhost:3000/",user,{withCredentials:true})
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err.message);
        })
        // console.log(user);
    }
    return (
        <div className="hero min-h-screen bg-green-400">
            <div className="hero-content flex-col lg:flex-row justify-end">
                <div className="text-center  lg:text-left">
                    <h1 className="text-5xl font-bold text-white">Login now</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form  onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-500">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered text-green-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-500">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered text-green-500" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 flex flex-col gap-7 justify-start">
                            <button className="btn btn-primary bg-green-500 hover:bg-green-800">Register</button>
                            <div className="label-text ml-0 pl-0">
                                <p>if have an account then click <span className="text-green-500 font-bold"><Link to={"/register.jsx"}>Register</Link></span> </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

