import {connect} from "react-redux";
import AddNumber from "../component/AddNumber";

function mapReduxDispatchToReactProps(dispatch) {
  return {
    onClick: function(size) {
      dispatch({type: 'INCREMENT', size: size})
    },
    onClickMinus: function(size) {
      dispatch({type: 'DECREMENT', size: size})
    }
  };
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber)