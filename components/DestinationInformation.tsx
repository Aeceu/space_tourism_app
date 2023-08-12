import datas from "@/public/assets/data.json"

interface Props{
    location:number
}

export const DestinationInformation = ({location}:Props) =>{
    return(
        <div className='flex flex-col gap-4 py-4 lg:items-start items-center'>
            <h1 className="text-8xl">{datas.destinations[location].name}</h1>
            <p className="text-sm text-white/70 text-justify">{datas.destinations[location].description}</p>
            <br />
            <span className='w-full border-b-[1px] border-white/50'/>
            <div className='flex gap-16'>
                <span className='flex flex-col text-[10px] text-white/70'>
                    AVG. DISTANCE
                    <h1 className="text-2xl text-white">{datas.destinations[location].distance}</h1>
                </span>
                <span className='flex flex-col text-[10px] text-white/70'>
                EST. TRAVEL TIME
                <h1 className="text-2xl text-white">{datas.destinations[location].travel}</h1>
                </span>
            </div>
        </div>
    )
}