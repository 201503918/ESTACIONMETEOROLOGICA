import React from "react";
import { Grid, CardContent, Typography, IconButton, Card } from "@material-ui/core";
import { FilterDrama, ClearAll, WbSunny, Visibility } from "@material-ui/icons";

export const StatusLightComponent = ({ media = [] }) => {
  return (
    <>
      <Grid item xs={12} md={4} lg={3}>
        <Card>
          <CardContent>
            <Typography
              component="p"
              align="center"
              component="h1"
              variant="h5"
            >
              Visibilidad: {media.Visibilidad}
            </Typography>
          </CardContent>
          <div align="center" size="large">
            <IconButton>
              <Visibility />
            </IconButton>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Card>
          <CardContent>
            <Typography
              component="p"
              align="center"
              component="h1"
              variant="h5"
            >
              Velocidad del Viento: {media.Velocidadviento}
            </Typography>
          </CardContent>
          <div align="center" size="large">
            <IconButton>
              <ClearAll />
            </IconButton>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Card>
          <CardContent>
            <Typography
              component="p"
              align="center"
              component="h1"
              variant="h5"
            >
              Lluvia: {media.Lluvia}
            </Typography>
          </CardContent>
          <div align="center" size="large">
            <IconButton>
              <FilterDrama />
            </IconButton>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Card>
          <CardContent>
            <Typography
              component="p"
              align="center"
              component="h1"
              variant="h5"
            >
              Calor: {media.Calor}
            </Typography>
          </CardContent>
          <div align="center" size="large">
            <IconButton>
              <WbSunny />
            </IconButton>
          </div>
        </Card>
      </Grid>
    </>
  );
};
