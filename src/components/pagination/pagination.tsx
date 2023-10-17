import React from "react";

interface PaginationProps {
    golpesPerPage: number;
    totalGolpes: number;
    paginate: (number: number) => void;
}

export default function Pagination({golpesPerPage, totalGolpes, paginate}: PaginationProps) {
    const pageNumbers = []
    const [numberSelected, setNnumberSelected] = React.useState(1)
    for (let i = 1; i <= Math.ceil(totalGolpes / golpesPerPage); i++) {
        pageNumbers.push(i)
    }
    const pagination = (number: number) => {
        paginate(number)
        setNnumberSelected(number)
    }
    return (
        <nav className="flex justify-center" aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-base h-10">
                <li>
                </li>
                {pageNumbers.map((number) => (
                        <li key={number}>
                            <li>
                                <button onClick={() => pagination(number)}
                                        className="flex items-center
                                    justify-center px-4 h-10 leading-tight
                                     text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800
                                      dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700
                                      dark:hover:text-white">
                                    <span
                                        className={number === numberSelected ? "font-bold text-white" : ""}>{number}</span>
                                </button>
                            </li>
                        </li>
                    )
                )
                }
            </ul>
        </nav>
    )
}