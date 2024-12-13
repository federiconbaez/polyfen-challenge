import React, { useState, useEffect, useCallback } from 'react';
import api from './utils/api';
import { API_ROUTES } from './config';
import ProspectTable from './components/ProspectTable';
import Pagination from './components/Pagination';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [prospects, setProspects] = useState([]);
  const [sortBy, setSortBy] = useState('score');
  const [order, setOrder] = useState('desc');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProspects = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.get(API_ROUTES.PROSPECTS, {
        params: { sortBy, order, page, limit: 10 }
      });
      setProspects(response.data.prospects);
      setTotalPages(response.data.totalPages);
    } catch (err) {
      setError('An error occurred while fetching data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [sortBy, order, page]);

  useEffect(() => {
    fetchProspects();
  }, [fetchProspects]);

  const handleSort = (field) => {
    if (field === sortBy) {
      setOrder(order === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setOrder('desc');
    }
    setPage(1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sales Prospects</h1>
      <ErrorMessage error={error} />
      <ProspectTable 
        prospects={prospects} 
        sortBy={sortBy} 
        order={order} 
        onSort={handleSort}
        isLoading={isLoading}
      />
      <Pagination 
        currentPage={page} 
        totalPages={totalPages} 
        onPageChange={setPage}
      />
    </div>
  );
}

export default App;

