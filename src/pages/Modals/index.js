import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from 'redux-first-router-link';
import Button from '@material-ui/core/Button';
import { ROUTE_EXAMPLE_TABS } from 'state/modules/routing';
import AppContainer from 'components/AppContainer';
import AppBar from 'components/AppBar';
import TopBar from 'components/TopBar';
import SideBar from 'components/SideBar';//MediaProcessTabs
import InfoCase from 'components/InfoCase';//MediaProcessTabs
import MediaProcessTabs from 'components/MediaProcessTabs';//MediaProcessTabs
import ContentContainer from 'components/ContentContainer';
import NoteForm from 'components/NoteForm';
import ShareCaseForm from "../../components/ShareCaseForm";

export default class Home extends React.Component {
    static propTypes = {};
    state = {
        noteFormModalOpen: false,
        shareCaseFormModalOpen: false
    };

    /*note form control */
    showNoteFormModal = () => {
        this.setState({ noteFormModalOpen: true });
    };

    closeNoteFormModal = () => {
        this.setState({ noteFormModalOpen: false });
    };

    handleSubmitNoteForm = values => {
        console.log('handleSubmitNoteForm');
    };

    /*share case form control */
    showShareCaseFormModal = () => {
        this.setState({ shareCaseFormModalOpen: true });
    };

    closeShareCaseFormModal = () => {
        this.setState({ shareCaseFormModalOpen: false });
    };

    handleSubmitShareCaseForm = values => {
        console.log('handleSubmitShareCaseForm');
    };

    render() {
        return (
            <Fragment>
                <AppBar />
                <AppContainer>
                    <TopBar/>
                    <SideBar />
                    <ContentContainer>

                        {/*Note Form Button*/}
                        <Button
                            variant="outlined"
                            onClick={this.showNoteFormModal}
                        >
                            Note form
                        </Button>
                        {this.state.noteFormModalOpen && (
                            <NoteForm
                                open
                                onClose={this.closeNoteFormModal}
                                onSubmit={this.handleSubmitNoteForm}
                            />
                        )}

                        {/*Share Case Form Button*/}
                        <Button
                            variant="outlined"
                            onClick={this.showShareCaseFormModal}
                        >
                            Share Case Form
                        </Button>
                        {this.state.shareCaseFormModalOpen && (
                            <ShareCaseForm
                                open
                                onClose={this.closeShareCaseFormModal}
                                onSubmit={this.handleSubmitShareCaseForm}
                            />
                        )}

                    </ContentContainer>
                </AppContainer>
            </Fragment>
        );
    }
}
