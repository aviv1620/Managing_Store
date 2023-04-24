
import { MainTable } from './MainTable'
import { CollapseOnMobile } from './CollapseOnMobile'

/*
 * head: {
 *      col0:String;
 *      col1:String;
 *      col2:String;
 * }
 */
export const MainTableCollapseOnMobile = ({ ariaLabel, head ,children }) => {
    return (
        <CollapseOnMobile>
           <MainTable label={ariaLabel} head={head}>
                {children}               
           </MainTable>
        </CollapseOnMobile>)
}

