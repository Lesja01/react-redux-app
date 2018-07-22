import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) => ({    
    items: state.items
});

 class Header extends React.Component {

    //отрисовка компонента
    render() {  
                
          return (
                    <div className="header">
                        <h1>REACT-REDUX</h1>                        
                    </div>
                    );                            
            }            
         };

export default connect(mapStateToProps)(Header);    