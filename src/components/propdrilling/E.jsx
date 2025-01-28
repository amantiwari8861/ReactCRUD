// const E = (prop) => {
//     const {theme}=prop;
import PropTypes from "prop-types";

const E = ({theme}) => {
    return (
        <div>
        <h1>E Componnent : {JSON.stringify(theme)} </h1>
    </div>
  )
}
E.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default E