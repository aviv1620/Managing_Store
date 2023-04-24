import { ButtonGroup } from "@mui/material"
import { Action } from "./Action"

/*
 * [action:{
 *      title: string;
 *      onClick: Function;
 *      icon: Any; //icon component from @mui/icons-material
 * }]
 */
export const Actions = ({actions}) => {
    return (
        <ButtonGroup>
            {actions.map((action,index)=><Action key={index} title={action.title} onClick={action.onClick} icon={action.icon}/>)}
        </ButtonGroup>
    )
}
