import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/lab/Slider';
import Select from '@material-ui/core/Select';
import styles from './styles.scss';

function TabContainer(props) {
  return (
    <div>
      {props.children}
    </div>

  );
}
export default class ProcessedSidebar extends React.Component {
  state = {
    value: 'one',
    range: 30,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeSlider = (event, range) => this.setState({ range });

  render() {
    const { value } = this.state;
    const { range } = this.state;

    return (
      <div className={styles.processedSidebar}>
          <Tabs value={value} onChange={this.handleChange} className={styles.navTabs} indicatorColor="secondary" textColor="secondary">
            <Tab value="one" label="Images" className={styles.tabItem}/>
            <Tab value="two" label="Filter" className={styles.tabItem}/>
          </Tabs>
          {value === 'one' && <TabContainer>
              <div className={styles.content}>
                <div className={styles.thumbnailItem}><img src="https://www.raconteur.net/wp-content/uploads/2017/11/Colin-Elkins.jpg" alt=""/></div>
                <div className={styles.thumbnailItem}></div>
                <div className={styles.thumbnailItem}></div>
                <div className={styles.thumbnailItem}></div>
                <div className={styles.thumbnailItem}></div>
                <div className={styles.thumbnailItem}></div>
              </div>

          </TabContainer>}
          {value === 'two' && <TabContainer>
            <div className={styles.content}>
              <div className={styles.itemFilter} >
                <FormControl component="fieldset">
                  <FormLabel component="legend" className={styles.itemFilterLabel}>Gender</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox  className={styles.checkboxSize} defaultChecked color="default" value="checkedG" />
                      }
                      label="Male"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox className={styles.checkboxSize} defaultChecked color="default" value="checkedG" />
                      }
                      label="Female"
                    />
                  </FormGroup>
                </FormControl>
              </div>
              <div className={styles.itemFilter} >
                <FormControl component="fieldset" style={{width: '100%'}}>
                  <FormLabel component="legend" className={styles.itemFilterLabel}>Age</FormLabel>
                  <Slider value={range} aria-labelledby="label" onChange={this.handleChangeSlider} />
                  <Grid container>
                    <Grid item xs="6">
                      <Select>
                        <MenuItem value="" disabled>
                          ---
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs="6" style={{textAlign: 'right'}}>
                      <Select>
                        <MenuItem value="" disabled>
                          ---
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </Grid>
                  </Grid>
                </FormControl>
              </div>
              <div className={styles.itemFilter}>
                <FormControl component="fieldset">
                  <FormLabel component="legend" className={styles.itemFilterLabel}>Race</FormLabel>
                  <FormGroup className={styles.formGroup}>
                    <FormControlLabel
                      control={
                        <Checkbox  className={styles.checkboxSize} defaultChecked color="default" value="checkedG" />
                      }
                      label="White"
                      className={styles.formControlLabel}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox className={styles.checkboxSize} defaultChecked color="default" value="checkedG" />
                      }
                      label="American Indian or Alaska"
                      className={styles.formControlLabel}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox  className={styles.checkboxSize} defaultChecked color="default" value="checkedG" />
                      }
                      label="Asiaan"
                      className={styles.formControlLabel}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox  className={styles.checkboxSize} defaultChecked color="default" value="checkedG" />
                      }
                      label="Black or African American"
                      className={styles.formControlLabel}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox  className={styles.checkboxSize} defaultChecked color="default" value="checkedG" />
                      }
                      label="Hispanic or Latino"
                      className={styles.formControlLabel}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox  className={styles.checkboxSize} defaultChecked color="default" value="checkedG" />
                      }
                      label="Mixed Race"
                      className={styles.formControlLabel}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox  className={styles.checkboxSize} defaultChecked color="default" value="checkedG" />
                      }
                      label="Native Hawaiian or Other"
                      className={styles.formControlLabel}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox  className={styles.checkboxSize} defaultChecked color="default" value="checkedG" />
                      }
                      label="Other"
                      className={styles.formControlLabel}
                    />
                  </FormGroup>
                </FormControl>
              </div>
              <div className={styles.itemFilter} >
                <FormControl component="fieldset" style={{width: '100%'}}>
                  <FormLabel component="legend" className={styles.itemFilterLabel}>Height</FormLabel>
                  <Slider value={range} aria-labelledby="label" onChange={this.handleChangeSlider} />
                  <Grid container>
                    <Grid item xs="6">
                      <Select>
                        <MenuItem value="" disabled>
                          ---
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs="6" style={{textAlign: 'right'}}>
                      <Select>
                        <MenuItem value="" disabled>
                          ---
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </Grid>
                  </Grid>
                </FormControl>
              </div>
              <div className={styles.itemFilter}>
                <FormControl component="fieldset">
                  <FormLabel component="legend" className={styles.itemFilterLabel}>Hair Color</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox  className={styles.checkboxSize} defaultChecked color="default" value="checkedG" />
                      }
                      label="Black"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox className={styles.checkboxSize} defaultChecked color="default" value="checkedG" />
                      }
                      label="Brown"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox className={styles.checkboxSize} defaultChecked color="default" value="checkedG" />
                      }
                      label="Blonde"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox className={styles.checkboxSize} defaultChecked color="default" value="checkedG" />
                      }
                      label="Brunette"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox className={styles.checkboxSize} defaultChecked color="default" value="checkedG" />
                      }
                      label="Grey"
                    />
                  </FormGroup>
                </FormControl>
              </div>
            </div>

          </TabContainer>}
      </div>
    );
  }
}
