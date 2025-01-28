// import { useState } from "react"

// const Login = () => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [emailErr, setEmailErr] = useState('');
//     const [passErr, setPassErr] = useState('');

//     const submitHandler = (e) => {
//         e.preventDefault();
//         console.log("Submitting form...", email, password);

//         if (email === '' || email === null) {
//             setEmailErr("pls fill out email!");
//         }
//         if (password === '' || password === null) {
//             setPassErr("pls fill out password !");
//         }
//         else if (password.length<6) {
//             setPassErr("password must be greater than 6!");
//         }
//     }
//     return (
//         <div className="bg-white min-h-svh">
//             <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
//                 <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//                     <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
//                     <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
//                 </div>

//                 <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//                     <form className="space-y-6" onSubmit={submitHandler}>
//                         <div>
//                             <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
//                             <div className="mt-2">
//                                 <input type="email"
//                                     name="email"
//                                     id="email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                             </div>
//                             <p>{emailErr && <span className="text-red-500">{emailErr}</span>}</p>
//                         </div>

//                         <div>
//                             <div className="flex items-center justify-between">
//                                 <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
//                                 <div className="text-sm">
//                                     <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
//                                 </div>
//                             </div>
//                             <div className="mt-2">
//                                 <input type="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     name="password" id="password" autoComplete="current-password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                             </div>
//                             <p>{passErr && <span className="text-red-500">{passErr}</span>}</p>
//                         </div>

//                         <div>
//                             <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
//                         </div>
//                     </form>

//                     <p className="mt-10 text-center text-sm/6 text-gray-500">
//                         Not a member?
//                         <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login



// import { useState } from "react"

// const Login = () => {

//     const [formData,setFormData]=useState({
//         email:'',
//         password:''
//     });
//     const [formErr,setFormErr]=useState({
//         emailErr:'',
//         passwordErr:''
//     });

//     const handleInpChange=(e)=>{
//         // console.dir(e.target);
//         const {name,value}=e.target;
//         console.warn(name,value);
//         setFormData({
//             ...formData,
//             [name]:value
//         });
//     }

//     const submitHandler = (e) => {
//         e.preventDefault();
//         console.log("Submitting form...", formData);
//         const {email,password}=formData;
//         if (email === '' || email === null) {
//             setFormErr({...formErr,"emailErr":"pls fill out email!"});
//              toast.error("pls fill out email!");
//             return;
//         }
//         if (password === '' || password === null) {
//             setFormErr({...formErr,"passErr":"pls fill out email!"});
//             return;
//         }
//         else if (password.length<6) {
//             setFormErr({...formErr,"passErr":"password must be greater than 6!"});
//             return;
//         }
//         console.log("Submitted ...", formData);
//     }
//     return (
//         <div className="bg-white min-h-svh">
//             <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
//                 <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//                     <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
//                     <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
//                 </div>

//                 <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//                     <form className="space-y-6" onSubmit={submitHandler}>
//                         <div>
//                             <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
//                             <div className="mt-2">
//                                 <input type="email"
//                                     name="email"
//                                     id="email"
//                                     value={formData.email}
//                                     onChange={handleInpChange}
//                                     autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                             </div>
//                             <p>{formErr.emailErr && <span className="text-red-500">{formErr.emailErr}</span>}</p>
//                         </div>

//                         <div>
//                             <div className="flex items-center justify-between">
//                                 <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
//                                 <div className="text-sm">
//                                     <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
//                                 </div>
//                             </div>
//                             <div className="mt-2">
//                                 <input type="password"
//                                     value={formData.password}
//                                     onChange={handleInpChange}
//                                     name="password" id="password" autoComplete="current-password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
//                             </div>
//                             <p>{formErr.passErr && <span className="text-red-500">{formErr.passErr}</span>}</p>
//                         </div>

//                         <div>
//                             <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
//                         </div>
//                     </form>

//                     <p className="mt-10 text-center text-sm/6 text-gray-500">
//                         Not a member?
//                         <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Login




import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {

    const navigate = useNavigate();

    const validateUser=async(user) => {
        
        try {
            const res=await axios.get(import.meta.env.VITE_USERS_URL);
            const users=await res.data;

            console.log("all users in backend:",users);
            
           const validatedUser=users.filter(u=>u.email===user.email && u.password===user.password);
           console.log("got user",validatedUser);
            
           sessionStorage.setItem("principle",JSON.stringify(validatedUser));
            if (validatedUser[0]!==undefined) 
            {
                toast.success("login succesfully!");
                setTimeout(() => {
                    navigate("/admin");
                }, 2000);
            } 
            else 
            {
                toast.error("invalid credentials!");
            }

        } catch (error) {
            toast.error("an Error occured!");
            console.error(error);
        }
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const submitHandler = (data) => {
        console.log("data got from form...", data);
        validateUser(data);
    }

    return (
        <div className="bg-white min-h-svh">
            <ToastContainer />
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input type="email"
                                    name="email"
                                    id="email"
                                    {...register("email", { required: "pls fill out this field!" })}
                                    autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                            <p>{errors.email && <span className="text-red-500">{errors.email.message}</span>}</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input type="password"
                                    {...register("password", {
                                        required: "pls fill out this field!",
                                        //     minLength:{
                                        //     value:6,
                                        //     message:"minimum length is 6"
                                        // },
                                        // pattern: {
                                        //     value: /^[A-Za-z0-9 .$@]{6,20}$/i,
                                        //     message: "password must contain only alphabets,space,.$@"
                                        // }
                                    })}
                                    name="password" id="password" autoComplete="current-password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                            <p>{errors.password && <span className="text-red-500">{errors.password.message}</span>}</p>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login