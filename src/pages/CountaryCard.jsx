import React from 'react'

export default function CountaryCard({country}) {
  return (
    <div>
      <li>{country.name.common}</li>
    </div>
  )
}
