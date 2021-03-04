import React from 'react';
import './filter.css';

const Filter = (props) => {

    //console.log(props)

    let btnArr = ['all','done','important'];
    
    return (
        <div className="filter">
            {
                btnArr.map((item, id) => {
                    return <button 
                                key={id}
                                onClick={()=>props.filterBtn(item)}
                                className={item === props.filter ? "activFiltr" : ''}>
                                    {item}
                            </button>
                })
            }
        </div>
    )
}

export default Filter; 