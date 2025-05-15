'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Input } from "./ui/input";
import React from "react";

interface LoginPageProps {
    image: string;
    signUpLink: string;
    handleSubmit?: (email: string, password: string, error: string) => void;
}

export default function LoginPage({ image, signUpLink, handleSubmit }: LoginPageProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const formRef = React.useRef<HTMLFormElement>(null);



    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">


            {/* Login Form Box */}
            <div className="flex items-center justify-center p-8 md:p-12 rounded-3xl bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-600 via-purple-600 to-orange-600">
                {/* <div className=""> */}
                {/* Black overlay */}
                <div className="fixed inset-0 bg-black/50 z-10 pointer-events-none rounded-[48px]" />
                {/* Grain overlay */}
                <div className="fixed inset-0 opacity-30 z-20 pointer-events-none">
                    <Image
                        src="/images/grainoverlay.png"
                        alt="Grain Overlay"
                        fill
                        className="object-cover w-full h-full rounded-none"
                        priority
                    />
                </div>
                {/* Form */}
                <div className="w-full max-w-md space-y-8 z-30">
                    <div>
                        <h2 className="text-7xl font-bold text-center text-foreground">Bienvenue</h2>
                        <p className="mt-2 text-center text-foreground">
                            New here? <span><Link href={signUpLink}>Create account</Link></span>
                        </p>
                    </div>

                    <form
                        ref={formRef}
                        onSubmit={(e) => {
                            console.log("Form Submitted");
                            e.preventDefault();
                            if (handleSubmit) {
                                handleSubmit(email, password, "All good!");

                            }
                        }}
                        className="mt-8 space-y-6"
                    >
                        <div className="space-y-4 ">
                            <div className="flex flex-col ">
                                <label htmlFor="email" className="py-3  block text-2xl font-medium text-foreground">
                                    Email
                                </label>

                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="w-full  placeholder:text-gray-500"
                                    placeholder="you@example.com"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="pb-3 block text-2xl font-medium text-foreground">
                                    Password
                                </label>
                                <div className="flex text-background bg-foreground/80 items-center p-5 flex-1 rounded-3xl border border-input text-2xl shadow-sm transition-colors focus-within:ring-1 focus-within:ring-ring">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="flex-1 outline-none bg-transparent border-none text-2xl placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 w-full placeholder:text-gray-500"
                                        value={password}
                                        placeholder="Your Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        type="submit"
                                        className="flex text-foreground items-center justify-center rounded-2xl bg-background text-xl font-bold hover:bg-accent transition-colors w-12 h-12"
                                        style={{ aspectRatio: "1 / 1" }}
                                    >
                                        Go
                                    </button>
                                </div>
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-primary hover:text-primary/80">
                                        Forgot Password? Reset here.
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <Button
                                type="submit"
                                className=" h-20 bg-foreground/80"
                                variant="btnLight"
                                image="/logos/github.svg"
                            />
                            <Button
                                type="submit"
                                className=" h-20 bg-foreground/80"
                                variant="btnLight"
                                image="/logos/discord.svg"
                            />
                            <Button
                                type="submit"
                                className="h-20 bg-foreground/80"
                                variant="btnLight"
                                image="/logos/google.svg"
                            />
                        </div>
                    </form>
                    {/* </div> */}
                </div>
            </div>
            {/* Image Box */}
            <div className="hidden md:block rounded-3xl w-full h-full relative overflow-hidden">
                <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover rounded-3xl"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority
                />
                {/* Centered bold text */}
                <div className="absolute inset-0 flex items-center justify-center z-30">
                    <span
                        className="text-7xl font-bold text-foreground text-center"
                        style={{
                            textShadow: "0px 0px 200px #180600, 0px 0px 200px #180600"
                        }}
                    >
                        We're better than paper.
                    </span>
                </div>
                {/* Bottom center text */}
                <div className="z-30 absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
                    <span
                        className="text-3xl font-black text-background text-center"
                        style={{
                            textShadow: "0px 0px 200px #180600, 0px 0px 200px #180600"
                        }}
                    >
                        Nuclear.
                    </span>
                </div>
            </div>
        </div>
    );
}
