import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types'; // ES6


const mapStateToProps = (state) => ({
    
    categories:state.categories,
    item_id: Date.now()
});

const mapDispatchToProps = (dispatch) => ({
    addItem: bindActionCreators(actions.addItem, dispatch),
});





class AddItem extends React.Component {

    //создание категории
    addItem() {
        let it_id = this.props.item_id+1;
        let it_category = ReactDOM.findDOMNode(this.refs.category_belongs).text;
        let it_name = ReactDOM.findDOMNode(this.refs.item_add).value;
        let it_about = ReactDOM.findDOMNode(this.refs.item_about).value;
        let it_temp = false;
        this.props.addItem(it_id, it_category, it_name, it_about, it_temp);        
    }

    //отрисовка компонента
    render() {
         // destruction нужных свойств из объекта this.props
        let {categories} = this.props;
                
        let category = categories.map((item, i) =>{
                   return (
                        <option key={i} ref="category_belongs">                            
                            {item.category_name}
                        </option>

                   )
            }
        );
        console.log(this);
        return (
            <div className="AddItem">            
                
                     <h2>Добавить товар:</h2>
                      <p>
                        <label>Категория<br/>
                            <select  type="text" defaultValue="">
                                {category}                          
                            </select>
                        </label>
                    </p>
                    <p>
                        <label>Название товара<br/>
                            <input ref="item_add" size="20" type="text" defaultValue="" />
                        </label>
                    </p>
                    <p>
                        <label>описание<br/>
                            <textarea ref="item_about" type="text" defaultValue=""/>
                        </label>
                    </p>
                    
                    <p>
                        <input ref="item_submit" onClick={this.addItem.bind(this)} type= "submit" value="Добавить" />
                    </p>
                   
            </div>

        )
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);