import { Card, Typography } from '@mui/material'
import React from 'react'

export default function Content({ children }) {
    return (
        <Card sx={{ padding: 4 }}>
            <Typography>{children}</Typography>
        </Card>
    )
}
