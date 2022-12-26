import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';



const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
var itemWidth = 700;
if (vw < 800) {
    itemWidth = 300;
}


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    borderRadius: 10,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: itemWidth,
    display: "flex"
}));

export default Item;