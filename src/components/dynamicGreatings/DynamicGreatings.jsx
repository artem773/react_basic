import React from 'react';

import './dynamicGreatings.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const DynamicGreatings = (props) => {
    return (
        <div className={'dynamic mb-3 p-3 border border-' + props.color}>
            {
                React.Children.map(props.children, (child) => {
                    return React.cloneElement(child, { className: 'shadow p-3 m-3 border rounded' })
                })
            }
        </div>
    )
}

export default DynamicGreatings;