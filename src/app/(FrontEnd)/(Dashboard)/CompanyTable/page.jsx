import CompanyTable from '@/components/Table/Company/CompanyTable'
import React from 'react'

async function getData(){
    try {
        const req = await fetch('http://localhost:3000/api/company',{
            method: 'GET',
            headers: {
                Accept: "application.json",
                ContenType: "application.json",
                Authorization: process.env.AUTHORIZATION_KEY,
            }
        })
        const res = await req.json();
        return res;
    } catch (error) {
        console.log(error.message)
    }
}

const page = async () => {
    const data = await getData();
    console.log(data)
  return (
    <>
        <CompanyTable finaldata = {data.message}/>
    </>
  )
}

export default page