import CompanyTable from '@/components/Table/Company/CompanyTable';
import React from 'react';

async function getData() {
    try {
        const req = await fetch('http://localhost:3000/api/company', {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: process.env.AUTHORIZATION_KEY,
            }
        });
        const res = await req.json();
        console.log(res.message[0].companyCeo);
        return res.message;
    } catch (error) {
        console.log(error.message);
    }
}

const page = async () => {
    const  Data = await getData();

    return (
        <>
            <CompanyTable finaldata={Data} />
        </>
    );
};

export default page;
