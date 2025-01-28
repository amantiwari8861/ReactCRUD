// const D = (prop) => {
//     const {theme}=prop;
import E from './E'
import PropTypes from "prop-types";

const D = ({theme}) => {
    return (
        <div>
        <h1>D Componnent : {JSON.stringify(theme)} </h1>
        <E theme={theme}/>
    </div>
  )
}
D.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default D