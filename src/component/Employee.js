import React, { useEffect, useState } from 'react';

export const Employee = React.memo(
    ({page}) => {

    const [employees, setEmployees] = useState([]);

    const getEmployees = async (page) => {

        console.log("RENDER EMPLOYEES2");
        console.log("Page: " + page)
        try {
            const request = await fetch(`https://reqres.in/api/users?page=${page}`)
            const { data: empleados } = await request.json()
            setEmployees(empleados);
            console.log(empleados)
        } catch (error) {
            console.log(`Error getting employees: ${error}`)
        }
    }

    useEffect(() => {
        getEmployees(page);
    }, [page])

    return (
        <div className='employeeRender'>
            <div>
                <p>Mostrando página: {page}</p>
            </div>
            <div className='employeeContainer'>
                {employees.slice().map((employee) => (
                    <a href="#" key={employee.id} className="employeeView">
                        <p>
                            {employee.first_name} {employee.last_name}
                        </p>
                        <p className='email'>
                            {employee.email}
                        </p>
                        <p>
                            <img src={employee.avatar} alt={employee.first_name} />
                        </p>
                    </a>
                ))}
            </div>
        </div>
    )
}
);
