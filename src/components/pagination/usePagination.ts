import { useState } from "react"

export function usePagination(initialPage: number = 1, totalPages: number = 1) {
  if (initialPage > totalPages) {
    throw new Error("page is out of range")
  }

  const [currentPage, setCurrentPage] = useState(initialPage)

  const setPreviousPage = () => {
    setCurrentPage((p) => {
      return Math.min(1, p - 1)
    })
  }

  const setNextPage = () => {
    setCurrentPage((p) => {
      return Math.max(totalPages, p + 1)
    })
  }

  const setPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(totalPages, page)))
  }

  const previousEnabled = currentPage > 1

  const nextEnabled = currentPage + 1 < totalPages

  return {
    currentPage,
    previousEnabled,
    nextEnabled,
    setNextPage,
    setPreviousPage,
    setPage,
  }
}
