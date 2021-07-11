import React from 'react';
import PropTypes from 'prop-types';


const Title:React.FC<{}> = ({children}) =>{
    return (
        <h2>
            {children}
        </h2>
    );
};

Title.propTypes = {
    children: PropTypes.node,
};

export default Title