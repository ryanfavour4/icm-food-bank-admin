"use client";

import Input from "@/components/input";
import { IInputState } from "@/components/input/useInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
    const [password, setPassword] = useState<IInputState>({ value: "" });
    const [email, setEmail] = useState<IInputState>({ value: "" });
    const route = useRouter();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ adminEmail: email.value, adminPassword: password.value });
        if (email.value != "" && password.value != "") {
            route.push("/dashboard");
        } else {
            toast.error("Please fill all the fields");
        }
    };

    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Link href={"/dashboard"}>ICM FOOD BANK </Link>
                    <h2 className="text-center text-2xl/9 font-bold tracking-tight">
                        Login
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm/6 font-medium"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <Input
                                    setState={setEmail}
                                    state={email}
                                    name="email"
                                    type="email"
                                    required={true}
                                    placeholder="Email address"
                                    autoComplete="email"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm/6 font-medium"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <Link
                                        href="/forgot-password"
                                        className="font-semibold text-primary hover:text-primary/80"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <Input
                                    setState={setPassword}
                                    state={password}
                                    name="password"
                                    type="password"
                                    required
                                    minLength={5}
                                    placeholder="Password"
                                    autoComplete="current-password"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="btn-primary flex items-center gap-2"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

