import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    nav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    ul: {
        listStyleType: 'none',
        textDecoration: 'none',
        color: 'white',
        fontFamily: 'Nunito',
        justifyContent: 'center',
        flexDirection: 'row',
        display: 'flex',
    },
    li: {
        marginLeft: '2em',
        marginRight: '2em',
        fontSize: '2em'
    },
    a: {
        textDecoration: 'none',
        color: 'black',
        '&:hover': {
            color: '#82B7DC',
        },
    },
}))

export default useStyles