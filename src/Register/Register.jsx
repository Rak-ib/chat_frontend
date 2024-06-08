import axios from "axios";
import { Link } from "react-router-dom";


const Register = () => {
    const handleRegister=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const number=e.target.mobile.value;
        const role=e.target.role.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const image=e.target.image.files[0]
        
        const formData = new FormData();
        formData.append("file", image);
        formData.append("name", name);
        formData.append("mobile", number);
        formData.append("role", role);
        formData.append("email", email);
        formData.append("password", password);
        // fetch('http://localhost:3000/',{
        //     method:"POST",
        //     content-type
        // })
        // const user={email,password,name,number,role,file}
        console.log(formData.get("name"));
        axios.post('http://localhost:3000/user/',formData)
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.error(err)
        })
        
        
    }



    return (
        <div className="hero min-h-screen w-[80vw] bg-green-400">
            <div className="hero-content flex-col lg:flex-row justify-around gap-48">
                <div className="text-center max-w-4xl lg:text-left">
                    <h1 className="text-9xl font-bold text-white">Register</h1>

                </div>
                <div className="card shrink-0 w-full max-w-4xl shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body" encType="multipart/form-data">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-500">Name</span>
                            </label>
                            <input  placeholder="email" name="name" className="input input-bordered text-green-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-500">Mobile</span>
                            </label>
                            <input  placeholder="email" name="mobile" className="input input-bordered text-green-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-500">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered text-green-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-500">Role</span>
                            </label>
                            <input  placeholder="type user or admin" name="role" className="input input-bordered text-green-500" required />
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-green-500">Avatar</span>
                            </label>
                            <input className="input input-bordered text-green-500" required type="file" name="image" id="" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 flex flex-col gap-7 justify-start">
                            <button className="btn btn-primary bg-green-500 hover:bg-green-800">Login</button>
                            <div className="label-text ml-0 pl-0">
                                <p>if have an account then click <span className="text-green-500 font-bold"><Link to={"/"}>Login</Link></span> </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;