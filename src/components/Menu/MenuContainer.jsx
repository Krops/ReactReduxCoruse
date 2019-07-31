import React from 'react';
import MenuComponent from './MenuComponent'
import {connect} from 'react-redux'


class MenuContainer extends React.Component {
    render() {
      return <MenuComponent/>
    }
  };

const mapStateToProps = () => {
    return {};
}
  
const mapDispatchToProps = () => {
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer)