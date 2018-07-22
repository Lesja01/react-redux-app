import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) => ({
    categories: state.categories,
   
});
const mapDispatchToProps = (dispatch) => ({
    choiceCategory: bindActionCreators(actions.choiceCategory, dispatch),
});

 class Categories extends React.Component {

    choiceCategory(i){        
        
        let choiseGoodTipe = this.props.categories[i].category_name;       
        this.props.choiceCategory(choiseGoodTipe);
        
    }
    //отрисовка компонента
    render() {    

        let {categories} = this.props; // destruction нужных свойств из объекта this.props
       console.log(this);
        let category = categories.map((cat, i) =>{
           return (
                        <div key={i}>
                            <span>
                                <button onClick={this.choiceCategory.bind(this,i)}>{cat.category_name}</button>
                            </span>
                        </div>

                    )
        }
        ); 
        
          return (
                    <div className="categories">
                        <h1>КАТЕГОРИИ</h1>
                        {category}
                    </div>
                    );
                            
            }
            
         };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);    