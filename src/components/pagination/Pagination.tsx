import { ReactNode } from "react"
import { usePagination } from "./usePagination"

interface ChildrenPaginationProps {
  currentPage: number
  previousEnabled: boolean
  nextEnabled: boolean
  setNextPage: () => void
  setPreviousPage: () => void
  setPage: (page: number) => void
}

interface PaginationProps {
  children: (props: ChildrenPaginationProps) => ReactNode
}

export function Pagination({ children }: PaginationProps) {
  const {
    currentPage,
    previousEnabled,
    nextEnabled,
    setNextPage,
    setPreviousPage,
    setPage,
  } = usePagination()

  children({
    currentPage,
    previousEnabled,
    nextEnabled,
    setNextPage,
    setPreviousPage,
    setPage,
  })
}
