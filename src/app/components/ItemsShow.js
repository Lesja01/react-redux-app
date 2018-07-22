import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';
    

const mapStateToProps = (state) => ({
    items: state.items
});

class ItemsShow extends React.Component {
	render() {

			let {items} = this.props;

        	let ItemTemplate = items.map((item, i) =>{
        	if (item.temp==false) {
        		 return (
                        <div key={i} className="category">
                            <img src="../img/1.jpg" alt="img"/>
                            <span>                            
                                <b>{item.item_name}</b> — {item.item_about}
                                <p id="categor">категория: {item.category_belongs}</p>                                
                            </span>
                        </div>
                    )        
        		}else{}               
                           
           	}
        	);
			console.log(this);
              return(
              		<div className="ItemsShow">
              			<h2>Товары:</h2>
                    	<div>
                    	    {ItemTemplate}
                    	</div>
                    </div>
                    )  
}
}
export default connect(mapStateToProps)(ItemsShow);