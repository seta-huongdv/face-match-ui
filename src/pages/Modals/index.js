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
import AddNewModal from '../../components/AddNewModal';
import ProcessModal from '../../components/ProcessModal';

export default class Home extends React.Component {
    static propTypes = {};
    state = {
        showAddNewModalOpen: false,
        noteFormModalOpen: false,
        shareCaseFormModalOpen: false,
        processModalOpen: false
    };
    /*share add new form control */
    showAddNewModal = () => {
      this.setState({ showAddNewModalOpen: true });
    };
    closeAddNewModal = () => {
      this.setState({ showAddNewModalOpen: false });
    };

    handleSubmitAddNewModal = values => {
        console.log(values);
      console.log('handleSubmitAddNewModal');
    };

    /*share process form control */
    showProcessModal = () => {
      this.setState({ processModalOpen: true });
    };
    closeProcessModal = () => {
      this.setState({ processModalOpen: false });
    };

    handleSubmitProcessModal = values => {
      console.log('handleSubmitProcessModal');
    };

    /*share note form control */
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
                        <Button
                          variant="outlined"
                          onClick={this.showAddNewModal}
                        >
                          Add new modal
                        </Button>
                        {this.state.showAddNewModalOpen && (
                          <AddNewModal
                            open
                            onClose={this.closeAddNewModal}
                            onSubmit={this.handleSubmitAddNewModal}
                          />
                        )}


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

                      {/*Note Form Button*/}
                      <Button
                        variant="outlined"
                        onClick={this.showProcessModal}
                      >
                        Process Modal
                      </Button>
                      {this.state.processModalOpen && (
                        <ProcessModal
                          open
                          onClose={this.closeProcessModal}
                          onSubmit={this.handleSubmitProcessModal}
                        />
                      )}
                    </ContentContainer>
                </AppContainer>
            </Fragment>
        );
    }
}
