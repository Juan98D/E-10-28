import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { makeStyles } from '@material-ui/styles';
import products from '../productData';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "10px",
    },
}));


export default function Products() {
    const classes = useStyles()
  return (
    <div className = {classes.root}>
    <Box>
      <Grid container spacing={2}>
          {
              products.map(product =>(
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Product key={product.id} product={product}/>
                </Grid>
              ))
          },
      </Grid>
    </Box>
    </div>
  );
}
