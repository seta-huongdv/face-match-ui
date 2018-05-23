import React from 'react';
import Button from 'material-ui/Button';
import Modal from 'material-ui/Modal';
import styles from './styles.css';

export class Topbar extends React.Component {
    static propTypes = {};
    static defaultProps = {};
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        return (
            <div>
                <div className="topBar">
                    <div className="topbar-inner" >
                        <Button variant="raised" color="primary" className="topbar__btn">New Case</Button>
                    </div>
                </div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                />
            </div>

        );
    }
}
