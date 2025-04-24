import React, { useEffect, useState } from 'react'

const Company = () => {

    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await fetch('https://fake-json-api.mock.beeceptor.com/companies');
                if(!response.ok){
                    throw new Error(`'HTTP error status: ' {response.status}`);
                }
                const data = await response.json();
                console.log(data)
                setCompanies(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCompanies();
        
    }, []);
    if (loading) return <p>loading...</p>
    if (error) return <p>Error : {error}</p>
  return (
    <div>
      <h1>Company List</h1>
      {companies.map((company, index) => (
        <div key={index} style={{ border: '1px solid #ccc', marginBottom: '1em', padding: '1em' }}>
        <p><strong>ID:</strong> {company.id}</p>
        <p><strong>Name:</strong> {company.name}</p>
        <p><strong>Address:</strong> {company.address}</p>
        <p><strong>Zip:</strong> {company.zip}</p>
        <p><strong>Country:</strong> {company.country}</p>
        <p><strong>Employee Count:</strong> {company.employeeCount}</p>
        <p><strong>Industry:</strong> {company.industry}</p>
        <p><strong>Market Cap:</strong> {company.marketCap}</p>
        <p><strong>Domain:</strong> {company.domain}</p>
        <p><strong>Logo:</strong> {company.logo}</p>
        <p><strong>Ceo Name:</strong> {company.ceoName}</p>
      </div>
      ))}
    </div>
  )
}

export default Company