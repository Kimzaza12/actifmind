"use client"

import Reveal from "./Reveal"

export default function Research(){

return(

<section className="py-28 bg-[#efe6c6]">

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

<Reveal>

<img
src="/brain.png"
className="rounded-xl shadow-xl"
/>

</Reveal>

<Reveal>

<div>

<h2 className="text-3xl font-bold mb-6">

เรื่องราวของ Bacopa Monnieri

</h2>

<p className="text-gray-700 leading-relaxed">

สมุนไพรจากอินเดียที่ใช้มากกว่า
3,000 ปี เพื่อช่วยเสริมความจำ
และการทำงานของสมอง

</p>

</div>

</Reveal>

</div>

</section>

)

}