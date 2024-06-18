import React from 'react'

function ItemList() {
    const items = ["item 1","item 2","item 3","item 4","item 5"]
  return (
        <ul>
            {items.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
  )
}

export default ItemList