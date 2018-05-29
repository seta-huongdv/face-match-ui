import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


import styles from './styles.scss';


export default class NewCase extends React.Component{
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render(){

    return(
          <div className={styles.overviewContent}>
              <img src="../../img/imgCreateCase.png" alt=""/>
              <p>Create a New Case and Upload Media to progress</p>
              <Button onClick={this.handleOpen} variant="outlined" color="default">New</Button>


              <Modal open={this.state.open} onClose={this.handleClose} >
                  <div className={styles.modalNewCase}>
                      <div className={styles.step1}>
                          <div className={styles.modalHeading}>
                              <h2 className={styles.modalHeadingTitle}>Create new Case</h2>
                              <Button className={styles.modalBtnClose} onClick={this.handleClose} >x</Button>
                          </div>
                          <div className={styles.modalBody}>
                              <form>
                                  <Grid container spacing={24}>
                                      <Grid item xs={3}>
                                          <img src="../../img/imgCreateCase.png" alt=""/>
                                      </Grid>
                                      <Grid item xs={9}>
                                          <Grid container spacing={24}>
                                              <Grid item xs={6}>
                                                  <TextField
                                                       fullWidth
                                                      id="name"
                                                      label="Name"
                                                      margin="normal"
                                                  />
                                              </Grid>
                                              <Grid item xs={6}>
                                                  <Grid container spacing={24}>
                                                      <Grid item xs={6}>

                                                          <TextField
                                                            fullWidth
                                                            id="name"
                                                            label="Name"
                                                            margin="normal"
                                                          />
                                                      </Grid>
                                                      <Grid item xs={6}>
                                                          <TextField
                                                            fullWidth
                                                            id="name"
                                                            label="Name"
                                                            margin="normal"
                                                          />
                                                      </Grid>
                                                  </Grid>
                                              </Grid>
                                          </Grid>
                                          <Grid container spacing={24}>
                                              <Grid item xs={12}>
                                                  <TextField
                                                      fullWidth
                                                      id="caseName"
                                                      label="Case Name"
                                                      margin="normal"
                                                  />
                                              </Grid>
                                          </Grid>
                                          <Grid container spacing={24}>
                                              <Grid item xs={12}>
                                                <TextField
                                                  fullWidth
                                                  id="name"
                                                  label="Case Description"
                                                  margin="normal"
                                                />
                                              </Grid>
                                          </Grid>
                                          <Grid container spacing={24}>
                                              <Grid item xs={6}>
                                                  <TextField
                                                    fullWidth
                                                    id="agency"
                                                    label="Agency or Department"
                                                    margin="normal"
                                                  />
                                              </Grid>
                                              <Grid item xs={6}>
                                                  <TextField
                                                    fullWidth
                                                    id="officer"
                                                    label="Officer(s)"
                                                    margin="normal"
                                                  />
                                              </Grid>
                                          </Grid>
                                          <Grid container spacing={24}>
                                              <Grid item xs={6}>
                                                  <TextField
                                                    fullWidth
                                                    id="address"
                                                    label="Address"
                                                    margin="normal"
                                                  />
                                              </Grid>
                                          </Grid>
                                          <Grid container spacing={24}>
                                              <Grid item xs={6}>
                                                <TextField
                                                  fullWidth
                                                  id="city"
                                                  label="City"
                                                  margin="normal"
                                                />
                                              </Grid>
                                              <Grid item xs={6}>
                                                  <Grid container spacing={24}>
                                                      <Grid item xs={6}>

                                                          <TextField
                                                              fullWidth
                                                              id="state"
                                                              label="State"
                                                              margin="normal"

                                                          />
                                                      </Grid>
                                                      <Grid item xs={6}>
                                                          <TextField
                                                            fullWidth
                                                            id="name"
                                                            label="Zipcode"
                                                            margin="normal"
                                                          />
                                                      </Grid>
                                                  </Grid>
                                              </Grid>
                                          </Grid>
                                          <Grid container spacing={24}>
                                              <Grid item xs={12}>
                                                  <TextField
                                                    fullWidth
                                                    id="tags"
                                                    label="Tags"
                                                    margin="normal"
                                                  />
                                              </Grid>
                                          </Grid>
                                      </Grid>
                                  </Grid>
                            </form>
                          </div>
                          <div className={styles.modalFooter}>
                              <Button variant="raised" color="primary" onClick={this.handleOpen}>Create New</Button>
                          </div>
                      </div>
                      <div className={styles.step2}>
                          <div className={styles.modalHeading}>
                              <h2 className={styles.modalHeadingTitle}>Upload Media</h2>
                              <Button className={styles.modalBtnClose} onClick={this.handleClose} >x</Button>
                          </div>
                          <div className={styles.modalBody}>
                              <p>Now add video or image files to this case or skip this step and add media at a later time.</p>
                          </div>
                          <div className={styles.modalFooter}>
                            <Button variant="outlined" color="default" className={styles.modalFooterButton}>Skip</Button>
                            <Button variant="raised" color="primary" className={styles.modalFooterButton}>Upload</Button>
                          </div>
                      </div>
                  </div>
              </Modal>
          </div>
      )
  }
}
