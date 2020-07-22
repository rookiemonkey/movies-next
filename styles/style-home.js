import { makeStyles } from '@material-ui/core/styles'

const homeStyles = makeStyles(theme => ({
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}))

export default homeStyles