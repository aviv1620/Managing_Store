import {  Paper, Stack } from "@mui/material"
import { ShowProperty } from "./ShowProperty"
import { Action } from "./Action"

/**
 * [property:{
 *      label:String;
 *      value:String;
 * }]
 * 
 * action:{
 *      title: string;
 *      onClick: Function;
 *      icon: Any; //icon component from @mui/icons-material
 * }
 * 
 */
export const CardItem = ({ children, properties, action }) => {

    return (
        <Paper elevation={10} >
            <Stack direction='column'>
                <Stack direction='row' justifyContent="space-between" alignItems="flex-start">
                    <Stack direction={{ lg: 'row' }} spacing={2} justifyContent="flex-start" sx={{ margin: { lg: 2 } }}>
                        {properties.map((property, index) => <ShowProperty key={index} label={property.label} value={property.value} />)}
                    </Stack>

                    <Action title={action.title} onClick={action.onClick} icon={action.icon}/>

                </Stack>

                {children}

            </Stack>
        </Paper  >
    )
}
