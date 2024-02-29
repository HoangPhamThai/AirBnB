import React from 'react'
import { useSelector } from 'react-redux'
import CustomerInfo from './components/CustomerInfo'

export default function Customer() {

    // const currentUser = useSelector((state) => state.userSlice)

  return (
    <div >
        <CustomerInfo/>
    </div>
  )
}
