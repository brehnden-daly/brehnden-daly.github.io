import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    overflow: 'auto',
    borderRadius: 10,
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '75%',
    maxHeight: '75%',
    transform: 'translate(-50%, -50%)'
}));

export default Item;