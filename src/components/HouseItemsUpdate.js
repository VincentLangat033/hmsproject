import React from 'react'

function HouseItemsUpdate({house}) {
    const houses = house.map((h)=>(
        <li> h.name</li>
        <li>h.about</li>
    ))

  return (
    <div> {houses}
        
    </div>
  )
}

export default HouseItemsUpdate;