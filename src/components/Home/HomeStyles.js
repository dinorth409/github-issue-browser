import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    gridList: {
        backgroundColor: '#114084',
        justifyContent: 'center',
        paddingTop: '25px',
        paddingLeft: '25px',
        paddingRight: '25px',
        paddingBottom: '0px',
        marginTop: '500em',
        width: '60em',
        borderRadius: '4em',
    },
    tile: {
        justifyContent: 'center !important',
        alignItems: 'center !important',
    },
    card: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#F1F1F1',
        paddingTop: '1em',
        paddingBottom: '1em'
    },
    title: {
        fontSize: '18px',
        fontFamily: 'Nunito',
        underline: 'none',
        color: '#1B1B1B',
        '&:hover': {
            color: '#808080',
            transform: 'scale(1.01)'
        },
    },
    titleChecked: {
        color: 'white',
        textDecoration: 'line-through',
        fontSize: '18px',
        fontFamily: 'Nunito'
    },
    header: {
        color: '#f5bb1d',
        fontFamily: 'Enriqueta',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#946637',
        borderRadius: '15px',
        padding: '0 20px'
    },
    listContainer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'gray',
        borderRadius: '15px',
        marginLeft: '30px',
    },
    gridContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '2em',
        paddingBottom: '2em'
    },
    ul: {
        listStyleType: 'none',
        color: 'white',
        fontFamily: 'Nunito'
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        fontFamily: 'Nunito'
    },
    text: {
        fontFamily: 'Nunito'
    }
}))

export default useStyles