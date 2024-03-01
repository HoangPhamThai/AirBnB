import React from 'react'
import { labelFarmNature, labelLiveEverywhere, labelPetsAllowance, labelUniquePlace, labelWholeHouse } from '../../../constants/constants'

export default function LiveEverywhere() {

    const renderItem = (imgSrc, title) => {
        return <div className='text-center'>
        <img src={imgSrc} className='rounded-lg h-[250px] w-full' alt=''/>
        <h1 className='mt-2'>{title}</h1>
    </div>
    }
  return (
    <div>
        <h1 className="font-bold text-xl mb-3">{labelLiveEverywhere}</h1>
        <div className='grid grid-cols-4 gap-5'>
            {renderItem("https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg", labelWholeHouse)}
            {renderItem("https://images.pexels.com/photos/9389353/pexels-photo-9389353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", labelUniquePlace)}
            {renderItem("https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg", labelFarmNature)}
            {renderItem("https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", labelPetsAllowance)}
            

        </div>
    </div>
  )
}
