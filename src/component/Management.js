import React, { useEffect, useState } from 'react'
import { Employee } from './Employee'

export const Management = () => {

  const [managerName, setManagerName] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const setManager = e => {
    setManagerName(e.target.value)
  }

  useEffect(() => {
    console.log(`Change ocurred in: ${managerName} or ${currentPage}`)
  }, [managerName, currentPage]);

  return (
    <div className='mainContent'>
      <h1>Gestor: {managerName}</h1>
      <input type="text" onChange={setManager} placeholder="Nombre" />
      <div>
        <button onClick={() => { setCurrentPage(1) }}>Page 1</button>
        <button onClick={() => { setCurrentPage(2) }}>Page 2</button>
      </div>
      <h2>
        Listado empleados gestinados por {managerName}:
        <Employee page={currentPage} />
      </h2>
    </div>
  )
};