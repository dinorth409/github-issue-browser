import React from 'react'
import useStyles from './PaginationStyles'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    const classes = useStyles()

    return (
        <nav className={classes.nav}>
            <ul className={classes.ul}>
                {pageNumbers.map(number => (
                    <li key={number} className={classes.li}>
                        <a className={classes.a} onClick={() => paginate(number)} href='/#'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination