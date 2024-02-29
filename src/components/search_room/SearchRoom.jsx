import React from 'react'
import DateBooking from './DateBooking'
import GuestSelection from './GuestSelection'
import LocationSelection from './LocationSelection'

export default function SearchRoom() {

  const renderSearchIcon = () => {
    return <i className="fas fa-search bg-pink-400 rounded-2xl p-2 cursor-pointer" onClick={()=>{}}></i>
  }

  return (
    <div className='flex border rounded-2xl items-center pl-1 '>
        <LocationSelection/>
        <DateBooking/>
        <GuestSelection/>
        {renderSearchIcon()}
    </div>
  )
}
