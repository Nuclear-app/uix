'use client';

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface LoginPageProps {
    image: string;
}

export default function LoginPage({ image }: LoginPageProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">


            {/* Login Form Box */}
            <div className="flex items-center justify-center p-8 md:p-12">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold text-center">Welcome back</h2>
                        <p className="mt-2 text-center text-gray-600">
                            Please sign in to your account
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-primary hover:text-primary/80">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            variant="dark"
                        >
                            Sign in
                        </Button>
                    </form>
                </div>
            </div>
            {/* Image Box */}
            <div className="hidden md:block bg-gray-100">
                <img
                    src={image} // Replace with your actual image path
                    alt="Login"
                    className="w-full h-full object-cover bg-red"
                />
            </div>
        </div>
    );
}
