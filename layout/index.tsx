"use client"

import Link from "next/link";
import { dataStore } from "@/store/datastore";
/*
    Komponen ./layout/index.js menerima prop berupa children dari komponen induk, dan memberikan kembalian berupa komponen
    yang sudah disatukan dengan prop tersebut

    *gotta have to delve into ts more lol, never touched it b4
    - type :? membuat props yang dipassing menjadi opsional
    - && condition check, kalo memenuhi jalani komponen setelahnya, mirip ternary operator, tapi ada di JSX
*/

export default function MainLayout({ children } : { children: React.ReactNode }) {
    const { count } = dataStore();

    return (
        <div>
            <div className="flex flex-col h-screen">
                <header className='bg-blue-600 text-white'>
                    <div className="container flex mx-auto justify-between items-center min-h-[100px]">
                        <h1 className="text-xl font-bold">Next.js App</h1>
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </header>

                <main className="flex-1 container mx-auto p-4">
                    <p>{`Count Zustrand: ${count}`}</p>
                    <div>{ children }</div>
                </main>

                <footer className="bg-gray-800 text-white p4 text-center">
                  <p>&copy; { new Date().getFullYear() } My personal Website</p>  
                </footer>
            </div>
        </div>
    );
}