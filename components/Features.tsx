"use client"

import { motion } from "framer-motion"

export default function Features(){

return(

<section className="py-24 bg-white">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-3xl font-bold text-gray-900 text-center mb-16">

ประโยชน์ของ Actifmind

</h2>

<div className="grid md:grid-cols-3 gap-10">

<motion.div
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="bg-[#F9F5E7] p-8 rounded-2xl shadow-md hover:shadow-xl transition"
>

<div className="text-4xl mb-4">🧠</div>

<h3 className="text-xl font-bold text-gray-900">

พัฒนาการสมอง

</h3>

<p className="text-gray-700 mt-3">

เสริมการเชื่อมต่อของเซลล์ประสาท

</p>

</motion.div>


<motion.div
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
className="bg-[#F9F5E7] p-8 rounded-2xl shadow-md hover:shadow-xl transition"
>

<div className="text-4xl mb-4">🎯</div>

<h3 className="text-xl font-bold text-gray-900">

เพิ่มสมาธิ

</h3>

<p className="text-gray-700 mt-3">

ช่วยโฟกัสกับการเรียนได้นานขึ้น

</p>

</motion.div>


<motion.div
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:1}}
className="bg-[#F9F5E7] p-8 rounded-2xl shadow-md hover:shadow-xl transition"
>

<div className="text-4xl mb-4">👨‍⚕️</div>

<h3 className="text-xl font-bold text-gray-900">

รองรับ ADHD

</h3>

<p className="text-gray-700 mt-3">

ช่วยปรับสมดุลสมาธิ

</p>

</motion.div>

</div>

</div>

</section>

)

}