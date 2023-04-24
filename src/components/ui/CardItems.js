import { Box, Paper, Stack } from '@mui/material'
import {ShowProperty} from './ShowProperty'
import { PageTitle } from './PageTitle'

/**
 * property:{
 *      label:String;
 *      value:String;
 * }
 */
export const CardItems = ({children,title,properties}) => {
    

    return (
        <Box sx={{backgroundColor: 'grey.400',minHeight: '100%'}}>          
          <Stack direction='column' spacing={{lg:4,xs:2}} sx={{ maxWidth: 'lg', marginLeft: 'auto', marginRight: 'auto'}}>    
            <Paper elevation={10}>
              <PageTitle title={title}/>             

              {properties.map((property,index)=><ShowProperty key={index} label={property.label} value={property.value}/>)}                           
            </Paper>
    
            {children}
          </Stack>
        </Box>
    
      )
}
