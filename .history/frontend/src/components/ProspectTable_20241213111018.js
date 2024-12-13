import React from 'react';

const ProspectTable = ({ prospects, sortBy, order, onSort, isLoading }) => {
  const fields = ['name', 'email', 'country', 'jobTitle', 'yearsOfExperience', 'industry', 'companySize', 'score'];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          {fields.map((field) => (
            <th 
              key={field} 
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => onSort(field)}
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
              {sortBy === field && (order === 'asc' ? ' ▲' : ' ▼')}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {prospects.map((prospect) => (
          <tr key={prospect._id}>
            {fields.map((field) => (
              <td key={field} className="border px-4 py-2">{prospect[field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProspectTable;

