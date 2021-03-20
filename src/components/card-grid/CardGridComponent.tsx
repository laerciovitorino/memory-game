import { Grid, makeStyles, Theme } from "@material-ui/core";
import { GridRowComponent as GridRow } from "../grid-row/GridRowComponent";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'block',
        margin: '15vh auto',
        width: '70%'
    }
}));

const CardGridComponent = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid container item md={12} spacing={2}>
                <GridRow />
            </Grid>
            <Grid container item md={12} spacing={2}>
                <GridRow />
            </Grid>
            <Grid container item md={12} spacing={2}>
                <GridRow />
            </Grid>
            <Grid container item md={12} spacing={2}>
                <GridRow />
            </Grid>
            <Grid container item md={12} spacing={2}>
                <GridRow />
            </Grid>
        </Grid>
    );
}

export { CardGridComponent };
