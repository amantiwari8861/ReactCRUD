// const C = (prop) => {
//     const {theme}=prop;
import D from './D'
import PropTypes from "prop-types";

const C = ({theme}) => {
    return (
        <div>
        <h1>C Componnent : {JSON.stringify(theme)} </h1>
        <D theme={theme}/>
    </div>
  )
}
C.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default C