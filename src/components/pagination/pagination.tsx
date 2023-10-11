import React from "react";

interface PaginationProps {
    golpesPerPage: number;
    totalGolpes: number;
}

export default function Pagination({golpesPerPage, totalGolpes}: PaginationProps) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalGolpes / golpesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (

        <nav className="flex justify-center" aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-base h-10">
                <li>
                    <button className="flex items-center justify-center
                     px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border
                     border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700i
                      dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
                       dark:hover:bg-gray-700 dark:hover:text-white">Previous
                    </button>
                </li>
                {pageNumbers.map((number) => (
                        <li key={number}>
                            <li>
                                <button
                                    className="flex items-center
                                    justify-center px-4 h-10 leading-tight
                                     text-gray-500 bg-white border border-gray-300
                                      hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800
                                      dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700
                                      dark:hover:text-white">{number}</button>
                            </li>
                        </li>
                    )
                )
                }
                <li>
                    <button
                        className="flex items-center justify-center
                         px-4 h-10 leading-tight text-gray-500 bg-white
                          border border-gray-300 rounded-r-lg hover:bg-gray-100
                           hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700
                            dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next
                    </button>

                </li>
            </ul>
        </nav>
    )
}