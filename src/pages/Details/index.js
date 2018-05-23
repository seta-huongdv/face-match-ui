import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'material-ui/Button';
// import {  } from 'prop-types';
class Details extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Link to='/home'>Home</Link>
                <Link to='/details'>details</Link>
                <h1>Details Page</h1>
                <Button variant="raised" color="primary" className="j52 j169 j175 j176 j211">
                    Primary
                </Button>


            </React.Fragment>
        );
    }
}
export {Details};