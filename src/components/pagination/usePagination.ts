import { useState } from "react"

export function usePagination(initialPage: number = 0, totalPages: number = 0) {
  if (initialPage > totalPages) {
    throw new Error("page is out of range")
  }

  const [currentPage, setCurrentPage] = useState(initialPage)

  const setPreviousPage = () => {
    setCurrentPage((p) => {
      return Math.min(0, p - 1)
    })
  }

  const setNextPage = () => {
    setCurrentPage((p) => {
      return Math.max(totalPages, p + 1)
    })
  }

  const setPage = (page: number) => {
    setCurrentPage(Math.max(0, Math.min(totalPages, page)))
  }

  const previousEnabled = currentPage > 0

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
