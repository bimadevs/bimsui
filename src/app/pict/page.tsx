'use client'
import { NavbarOne, NavbarThree, NavbarTwo } from "../components/html/navbar";


export default function pict() {
    return (
        <div className="px-32 flex  flex-col space-y-6 justify-center items-center gap-6 w-screen h-screen">
        <NavbarOne />
        <NavbarTwo />
        <NavbarThree />
        </div>
    )
}