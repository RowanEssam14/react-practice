import styles from './Pagination.module.css'
import Proptypes from 'prop-types'

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className={styles.paginationContainer}>
      {[...Array(totalPages).keys()].map((page) => (
        <button
          key={page + 1}
          onClick={() => onPageChange(page + 1)}
          className={`${styles.paginationButton} ${currentPage === page + 1 ? styles.activeButton : ''}`}
        >
          {page + 1}
        </button>
      ))}
      {totalPages > 3 && currentPage < totalPages - 2 && <span className={styles.ellipsis}>...</span>}
    </div>
  )
}

Pagination.propTypes = {
  totalPages: Proptypes.number.isRequired,
  currentPage: Proptypes.number.isRequired,
  onPageChange: Proptypes.func.isRequired,
}

export default Pagination
