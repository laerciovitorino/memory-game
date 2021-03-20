import React from "react";

import { Grid } from "@material-ui/core";

import { CardComponent as Card } from "../card/CardComponent";
import Anta from '../../assets/images/anta.jpg';
import AraraAzul from '../../assets/images/arara-azul.jpg';
import MicoLeaoDourado from '../../assets/images/mico-leao-dourado.jpg';
import Tatu from '../../assets/images/tatu.jpg';

const GridRowComponent = () => {
    return (
        <React.Fragment>
            <Grid item md={3}>
                <Card imagePath={Anta} name={'ANTA'} />
            </Grid>
            <Grid item md={3}>
                <Card imagePath={AraraAzul} name={'ARARA AZUL'} />
            </Grid>
            <Grid item md={3}>
                <Card imagePath={MicoLeaoDourado} name={'MICO LEAO DOURADO'} />
            </Grid>
            <Grid item md={3}>
                <Card imagePath={Tatu} name={'TATU'} />
            </Grid>
        </React.Fragment>
    );
}

export { GridRowComponent };