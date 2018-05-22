import React from 'react';
import {Link} from 'react-router-dom';
// import {  } from 'prop-types';
class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Link to='/home'>Home</Link>
                <Link to='/details'>details</Link>
                <h1>HomePage</h1>
            </React.Fragment>

        );
    }
}
export {Home};