import { Divider, Tooltip, Collapse, Box } from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function CollapseOnMobile(props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Box sx={{ visibility: { lg: 'collapse', xs: 'visible' } }}>{/* mobile with Collapse*/}
                <Tooltip title="show customers table">
                    <ExpandMoreIcon
                        sx={{ transform: !expanded ? 'rotate(0deg)' : 'rotate(180deg)', }}
                        onClick={() => setExpanded(!expanded)}
                        aria-label="show more" />
                </Tooltip>
                <Collapse in={expanded}>
                    <Divider />
                    {props.children}
                </Collapse>
            </Box>

            <Box sx={{ visibility: { lg: 'visible', xs: 'collapse' } }}> {/* desktop without Collapse*/}
                {props.children}
            </Box>
        </>);
}
