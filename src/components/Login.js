import React, { useState } from "react";
import axios from "axios"

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleLogin = async () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        await axios.post(process.env.REACT_APP_SERVER_ENDPOINT + "/auth/login", {
            email,
            password
        }).then((response)=>{
            console.log(response)
        })
        .catch(err=>{
            console.log(err)
        })

    };

    const handleRegister = async() => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const address = document.getElementById("address").value;

        await axios.post(process.env.REACT_APP_SERVER_ENDPOINT + "/api/v1/auth/register",{
            role: "user",
            name:name,
            email:email,
            password:password,
            address:address,
            phone:phoneNumber,
        }).then((response)=>{
            console.log(response)
        })
        .catch(err=>{
            console.log(err)
        })

        console.log("Registering with Name:", name);
        console.log("Registering with Email:", email);
        console.log("Registering with Password:", password);
        console.log("Registering with Phone Number:", phoneNumber);
        console.log("Registering with Address:", address);

    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded shadow-md w-80">
                <h2 className="text-2xl font-bold mb-4">{isLogin ? "Login" : "Register"}</h2>
                {!isLogin && (
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input id="name" className="border border-gray-300 px-3 py-2 rounded w-full" type="text" />
                    </div>
                )}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input id="email" className="border border-gray-300 px-3 py-2 rounded w-full" type="email" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input id="password" className="border border-gray-300 px-3 py-2 rounded w-full" type="password" />
                </div>
                {!isLogin && (
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                            Phone Number
                        </label>
                        <input id="phoneNumber" className="border border-gray-300 px-3 py-2 rounded w-full" type="tel" />
                    </div>
                )}
                {!isLogin && (
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                            Address
                        </label>
                        <input id="address" className="border border-gray-300 px-3 py-2 rounded w-full" type="text" />
                    </div>
                )}
                {isLogin ? (
                    <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
                        Login
                    </button>
                ) : (
                    <button onClick={handleRegister} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
                        Register
                    </button>
                )}
                <button onClick={toggleForm} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    {isLogin ? "Register" : "Login"}
                </button>
            </div>
        </div>
    );
};

export default Login;
