import React from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import { setFilter } from '../actions'
import { VISIBILITY_FILTERS } from '../constants'

const VisibilityFilters = ({ activeFilter, changeFilter }) => {
  return (
    <div className='visibility-filters'>
      {
        Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey]
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              'filter',
              currentFilter === activeFilter && 'filter--active'
            )}
            onClick={() => {
              changeFilter(currentFilter)
            }}
          >
            {currentFilter}
          </span>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter }
}

const mapDispatchToProps = dispatch => ({
  changeFilter: (currentFilter) =>  dispatch(setFilter(currentFilter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityFilters)
