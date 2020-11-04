import React from 'react'
import {Card, GridList, Typography, GridListTile} from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './HomeStyles'


const Home = ({issues}) => {

    const classes = useStyles()

    return (
      <div className={classes.gridContainer}>
        <GridList cols={3} spacing={20} className={classes.gridList}>
        {issues.map((issue, i) => {
          return (
            <GridListTile cols={1} key={i} className={classes.tile} >
            <Card key={i} className={classes.card}>
              <Link style={{ textDecoration: 'none' }} to={`/${issue[3]}`} className={classes.title}>{issue[0]}</Link>
              <Typography className={classes.text}>Issue #: {issue[1]}</Typography>
              <Typography className={classes.text}>State: {issue[2]}</Typography>
            </Card>
            </GridListTile>
          )
        })}
        
      </GridList>
      </div>
    )
}

export default Home