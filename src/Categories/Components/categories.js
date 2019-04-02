import React from 'react';
import Category from './category';
import Search from '../../widget/containers/search';
import './categories.css';


function Categories(props) {
    // console.log('Lo que pillo en categories ')
    // console.log(props);
    return (
        <div className="Categories">
            <Search />
            {
                props.categories.map( 
                    (item) => {
                        // console.log(`Mapeando props.children.categories en categories ${item.id}`);
                        // console.log(item);
                    return (<Category key={item.id} {...item} 
                        handleClick={props.handleOpenModal}

                        />)
                })
            }
        </div>
    )
}
export default Categories