// const A = (prop) => {
//     const {theme}=prop;
import B from './B'
import PropTypes from "prop-types";

const A = ({theme}) => {
    return (
        <div>
        <h1>A Componnent : {JSON.stringify(theme)} </h1>
        <B theme={theme}/>
    </div>
  )
}
A.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default A