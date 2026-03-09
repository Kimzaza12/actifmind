"use client"

import { motion } from "framer-motion"

export default function Hero(){

return(

<section className="bg-[#EFE6C6] py-24">

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

{/* TEXT */}

<div>

<h1 className="text-5xl font-bold text-gray-900 leading-tight">

เสริมสร้างสมองวัยเรียน
<br/>

ปลดล็อกศักยภาพทางการศึกษา

</h1>

<p className="text-gray-700 mt-6 text-lg">

ตัวช่วยสำหรับนักเรียน นักศึกษา
และผู้ที่ต้องการเพิ่มสมาธิในการเรียน

</p>

<div className="mt-8 flex gap-4">

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


{/* PRODUCT */}

<div className="relative flex justify-center">

<motion.img
src="https://cdn-icons-png.flaticon.com/512/4812/4812430.png"
className="absolute w-40 -top-20 opacity-80"
animate={{
scale:[1,1.1,1],
opacity:[0.7,1,0.7]
}}
transition={{
duration:3,
repeat:Infinity
}}
/>

<img
src="https://dummyimage.com/260x340/2f6b4f/ffffff&text=Actifmind"
className="w-64 rounded-xl shadow-lg"
/>

</div>

</div>

</section>

)

}