import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"

export default function Home(){

return(

<div>

<Navbar/>

<main className="md:pt-15 lg:pt-24">

<Hero/>

<Features/>

</main>

</div>

)

}