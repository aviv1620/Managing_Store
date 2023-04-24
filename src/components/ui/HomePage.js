import { Typography, Button, Stack, Divider } from '@mui/material';

/*
 * [button:{
 *      label:String
 *      onClick:Any
 * }]
*/
export const HomePage = ({logoSrc,contents,buttons}) => {
    
    return (
        <Stack direction='column' spacing={6} sx={{ maxWidth: 'lg', marginLeft: 'auto', marginRight: 'auto',marginTop: 5 }}>

            <img src={logoSrc} className="App-logo" alt="logo" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />

            <Divider />

            <Typography textAlign="center" >{contents}</Typography>

            <Divider />

            <Stack direction="row" spacing={1} justifyContent="space-around" divider={<Divider orientation="vertical" flexItem />}>
                {buttons.map((button,index)=><Button key={index} variant="contained" onClick={button.onClick}>{button.label}</Button>)}                
            </Stack>

        </Stack>
    )
}
