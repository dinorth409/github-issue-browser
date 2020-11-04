import React from 'react'
import {Card} from '@material-ui/core'

const Issue = ({title, number, state, login, created, body}) => {
    return (
        <Card>
            <h2>{title}</h2>
            <p>Issue #: {number}</p>
            <p>State: {state}</p>
            <p>Created by user: {login}</p>
            <p>Date created: {created.substring(0,10)}</p>
            <p>Description: {body}</p>
        </Card>
    )
}

export default Issue