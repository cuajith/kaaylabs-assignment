import React from 'react'
import { useParams } from 'react-router-dom';
import ShowTable from './ShowTable';

const Pagination = ({ items, itemsPerPage }) => {
  const { page } = useParams();
  const currentPage = parseInt(page) || 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items && items.slice(startIndex, endIndex);

  const totalPages = Math.ceil(items && items.length / itemsPerPage);

  return (
    <div>
      {/* paginated content  */}
        {currentItems && currentItems.map((item, index) => (
          <ShowTable key={index} data={item} />
        ))}
      
      {/* Pagination links */}
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <span key={index}>
            <a href={`/pagination/${index + 1}`}>{index + 1}</a>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Pagination