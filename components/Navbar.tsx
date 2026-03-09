"use client"

import { useEffect, useState } from "react"

export default function Navbar(){

const [scrolled,setScrolled] = useState(false)

useEffect(()=>{

const handleScroll = () =>{
setScrolled(window.scrollY > 20)
}

window.addEventListener("scroll",handleScroll)

return ()=> window.removeEventListener("scroll",handleScroll)

},[])

return(

<header className={`fixed top-0 w-full z-50 transition 
${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>

<div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">

{/* LOGO */}

<div className="text-2xl font-bold text-green-700">

Actifmind

</div>

{/* MENU */}

<nav className="hidden md:flex gap-8 text-gray-800 font-medium">

<a href="#home" className="hover:text-green-700">
หน้าแรก
</a>

<a href="#benefits" className="hover:text-green-700">
ประโยชน์
</a>

<a href="#research" className="hover:text-green-700">
งานวิจัย
</a>

<a href="#contact" className="hover:text-green-700">
ติดต่อเรา
</a>

</nav>

{/* BUTTON */}

<a
href="https://line.me"
className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition"
>

สั่งซื้อ

</a>

</div>

</header>

)

}