import { IconButton, Tooltip } from "@mui/material"

export const Action = ({ title,onClick, icon }) => {
    return (
        <Tooltip title={title}>
            <IconButton aria-label={title} onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    )
}
