import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts(props) {
    const severityType = props.type;
    let componentAlert;

    if (severityType === 'error') {
        componentAlert = <Alert severity="error">{props.children}</Alert>
    } else if (severityType === 'warning') {
        componentAlert =  <Alert severity="warning">{props.children}</Alert>
    } else if (severityType === 'info') {
        componentAlert =  <Alert severity="info">{props.children}</Alert>
    } else {
        componentAlert = <Alert severity="success">{props.children}</Alert>
    }

    return (
        <Stack  sx={{ width: '100%', marginBottom: '1.5rem' }} spacing={2}>
            {componentAlert }
        </Stack>
    );
}