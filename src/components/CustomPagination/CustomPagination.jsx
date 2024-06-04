import { Pagination } from "react-bootstrap"
import { useState } from "react"

export default function CustomPagination({ itemsPerPage, totalItems, paginate }) {
    const pageNumbers = [];
    const [currentPage, setCurrentPage] = useState(1)

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        paginate(pageNumber);
    }

    return (
        <Pagination className="justify-content-center">
            <Pagination.First onClick={() => handleClick(1)} disabled={currentPage === 1} />
            <Pagination.Prev onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1} />
            {pageNumbers.map(number => (
                <Pagination.Item key={number} active={number === currentPage} onClick={() => handleClick(number)}>
                    {number}
                </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => handleClick(currentPage + 1)} disabled={currentPage === pageNumbers.length} />
            <Pagination.Last onClick={() => handleClick(pageNumbers.length)} disabled={currentPage === pageNumbers.length} />
        </Pagination>
    )

}