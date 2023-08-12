import Image from "next/image"
import datas from "@/public/assets/data.json"
interface Props{
    location:number
}

export  const DestinationImage = ({location}:Props)=>{
    return(
        <Image
        src={datas.destinations[location].images.png}
        width={350}
        height={350}
        alt='image'
        />
    )
}