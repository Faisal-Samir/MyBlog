import React, { useContext } from 'react';
import useTitle from '../../Hooks/useTitle';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const navigate = useNavigate();
    const { createAccount, updateUserDetails, logout } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    useTitle("Register");

    const onSubmit = (data) => {
        console.log(data);
        createAccount(data.email, data.password)
            .then((result) => {
                const createUser = result.user;
                console.log(createUser);
                reset();
                updateUserDetails(data.name, data.photo)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, photo: data.photo };
                        console.log(saveUser);
                    })
                logout()
                    .then(() => {
                        navigate('/login');
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
    };

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className={`bg-gray-50 border ${errors.name ? "border-red-500" : "border-gray-300"} text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                        placeholder="enter your name"
                                        {...register("name", { required: "Name is required" })}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className={`bg-gray-50 border ${errors.email ? "border-red-500" : "border-gray-300"} text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                        placeholder="name@company.com"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                message: "Invalid email address",
                                            },
                                        })}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className={`bg-gray-50 border ${errors.password ? "border-red-500" : "border-gray-300"} text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 8,
                                                message: "Password must be at least 8 characters",
                                            },
                                            pattern: {
                                                value: /^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$/,
                                                message: "Password must contain at least one uppercase letter and one number",
                                            },
                                        })}
                                    />
                                    {errors.password && (
                                        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="phnNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your photo url</label>
                                    <input
                                        type="text"
                                        name="photo"
                                        id="photo"
                                        className={`bg-gray-50 border ${errors.photo ? "border-red-500" : "border-gray-300"} text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                        placeholder="enter your photo url"
                                        {...register("photo", { required: "photo url is required" })}
                                    />
                                    {errors.photo && (
                                        <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Create an account
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
