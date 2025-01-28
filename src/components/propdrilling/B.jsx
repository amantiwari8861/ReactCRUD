// const B = (prop) => {
//     const {theme}=prop;
import { useEffect } from 'react';
import C from './C'
import PropTypes from "prop-types";

const B = ({theme={}}) => {
   
    useEffect(() => {
     theme.bgColor="red";// props are immutable 
     console.log("trying to change prop");
     
    }, [])
    
    return (
        <div>
            
            <h1>B Componnent : {JSON.stringify(theme)} </h1>
            <C theme={theme}/>
        </div>
    )
}
B.propTypes = {
    theme: PropTypes.object.isRequired,
};
// B.defaultProps = {
//     theme: {},
// };

export default B