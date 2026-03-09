"use client"

import { motion } from "framer-motion"

export default function Hero(){

return(

<section className="bg-[#EFE6C6] py-16 md:py-24">

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

{/* TEXT */}

<div className="text-center md:text-left">

<h1 className="text-3xl mt-10 md:mt-0 md:text-5xl font-bold text-gray-900 leading-tight">

เสริมสร้างสมองวัยเรียน
<br/>

ปลดล็อกศักยภาพทางการศึกษา

</h1>

<p className="text-gray-700 mt-6 text-base md:text-lg">

ตัวช่วยสำหรับนักเรียน นักศึกษา
และผู้ที่ต้องการเพิ่มสมาธิในการเรียน

</p>

<div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">

<button className="border border-green-700 text-green-700 px-6 py-3 rounded-full hover:bg-green-50 transition">

ดูรายละเอียดเพิ่มเติม

</button>

<a
href="https://line.me"
className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
>

สั่งซื้อผ่าน LINE

</a>

</div>

</div>


{/* BRAIN IMAGE */}

<div className="relative flex justify-center mt-10 md:mt-0">

<motion.img
src="/images/brain.png"
className="w-100 md:w-300 lg:w-[900px] drop-shadow-2xl"
animate={{
scale:[1,1.1,1],
opacity:[0.7,1,0.7]
}}
transition={{
duration:3,
repeat:Infinity
}}
/>

</div>

</div>

</section>

)

}