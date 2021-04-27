import { ReactNode } from "react"
import generateRange from "../../utils/generateRange"
import { usePagination } from "./usePagination"

interface ChildrenPaginationProps {
  pages: Set<number>
  currentPage: number
  previousEnabled: boolean
  nextEnabled: boolean
  setNextPage: () => void
  setPreviousPage: () => void
  setPage: (page: number) => void
}

interface PaginationProps {
  initialPage: number
  totalPages: number
  paginationWindow: number
  children: (props: ChildrenPaginationProps) => ReactNode
}

export function Pagination({
  initialPage = 1,
  totalPages = 1,
  paginationWindow = 5,
  children,
}: PaginationProps) {
  const {
    currentPage,
    previousEnabled,
    nextEnabled,
    setNextPage,
    setPreviousPage,
    setPage,
  } = usePagination(initialPage, totalPages)

  const pages = generateRange(
    currentPage - paginationWindow,
    currentPage + paginationWindow
  )

  children({
    pages,
    currentPage,
    previousEnabled,
    nextEnabled,
    setNextPage,
    setPreviousPage,
    setPage,
  })
}
