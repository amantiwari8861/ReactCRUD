import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const RegisterUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async data => {
        console.log("submitting..", data);
        try {
            const response = await axios.post(import.meta.env.VITE_USERS_URL, data);
            console.log(response);
            toast.success("user registered succesfully!");
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        }
        catch (error) {
            toast.error("unable to register!");
            console.error(error);
        }
    }
    return (
        <div className="bg-white min-h-[90vh] ">
            <ToastContainer/>
            <form className="p-3 w-[60%] mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-3">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

                        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">First name</label>
                                <div className="mt-2">
                                    <input type="text" name="first-name" id="first-name" {...register("fname", {
                                        required: "This field is required", minLength: {
                                            value: 2,
                                            message: "atleast 2 characters are required!"
                                        },
                                        pattern: {
                                            value: /^[A-Za-z]+$/i,
                                            message: "no digits or special characters are allowed"
                                        }
                                    })} autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    {errors.fname && <span className="text-red-600">{errors.fname?.message}</span>}
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">Last name</label>
                                <div className="mt-2">
                                    <input type="text" name="last-name" id="last-name" {...register("lname", { required: "This field is required" })} autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    {errors.lname && <span className="text-red-600">{errors.lname?.message}</span>}

                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" {...register("email", { required: "This field is required" })} autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    {errors.email && <span className="text-red-600">{errors.email?.message}</span>}

                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" {...register("password", { required: "This field is required" })} autoComplete="password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    {errors.password && <span className="text-red-600">{errors.password?.message}</span>}
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">Full Address</label>
                                <div className="mt-2">
                                    <input type="text" name="street-address" id="street-address" {...register("address", { required: "This field is required" })} autoComplete="street-address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    {errors.address && <span className="text-red-600">{errors.address?.message}</span>}

                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">City</label>
                                <div className="mt-2">
                                    <input type="text" name="city" id="city" {...register("city", { required: "This field is required" })} autoComplete="address-level2" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    {errors.city && <span className="text-red-600">{errors.city?.message}</span>}

                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">State / Province</label>
                                <div className="mt-2">
                                    <input type="text" name="region" id="region" {...register("state", { required: "This field is required" })} autoComplete="address-level1" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    {errors.state && <span className="text-red-600">{errors.state?.message}</span>}

                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">ZIP / Postal code</label>
                                <div className="mt-2">
                                    <input type="text" name="postal-code" id="postal-code" {...register("pincode", { required: "This field is required" })} autoComplete="postal-code" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    {errors.pincode && <span className="text-red-600">{errors.pincode?.message}</span>}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm/6 font-semibold text-gray-900">Cancel</button>
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterUser