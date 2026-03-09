type Props = {

title:string
text:string

}

export default function FeatureCard({title,text}:Props){

return(

<div className="bg-[#f3e7c7] p-8 rounded-xl shadow-md text-center">

<h3 className="font-bold text-lg mb-3">
{title}
</h3>

<p className="text-gray-700">
{text}
</p>

</div>

)

}