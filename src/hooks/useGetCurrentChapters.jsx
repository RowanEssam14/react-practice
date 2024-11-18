import { COMMON } from '../constants'

const useGetCurrentChapters = (currentPage, items) => {
  const totalPages = Math.ceil(items.length / COMMON.resultsPerPage)
  const startIndex = (currentPage - 1) * COMMON.resultsPerPage
  const endIndex = startIndex + COMMON.resultsPerPage
  const currentItems = items.slice(startIndex, endIndex)

  return { currentItems, totalPages }
}

export default useGetCurrentChapters
