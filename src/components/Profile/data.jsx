import React from 'react'
import employeeModel from '@/backend/models/employees/employee'


const data = () => {
  return (
    <div>
       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {employees.map((employee) => (
          <div key={employee._id} className="bg-gray-800 p-4 rounded-md">
            <h2 className="text-xl text-white">{employee.firstName} {employee.lastName}</h2>
            <p className="text-gray-400">{employee.email}</p>
            <p className="text-gray-400">{employee.phoneNumber}</p>
            <p className="text-gray-400">{employee.jobTitle}</p>
            <p className="text-gray-400">{employee.hireDate}</p>
            <p className="text-gray-400">{employee.dob}</p>
            <p className="text-gray-400">{employee.address.house}, {employee.address.street}, {employee.address.area}, {employee.address.postalCode}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default data
