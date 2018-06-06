import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div className={styles.processedSidebar}>
          <Tabs value={value} onChange={this.handleChange} className={styles.navTabs}>
            <Tab value="one" label="Images" className={styles.tabItem}/>
            <Tab value="two" label="Filter" className={styles.tabItem}/>
          </Tabs>
          {value === 'one' && <TabContainer>
              <div className={styles.thumbnailItem}>
                <img src="https://www.raconteur.net/wp-content/uploads/2017/11/Colin-Elkins.jpg" alt=""/>
              </div>
              <div className={styles.thumbnailItem}>

              </div>
              <div className={styles.thumbnailItem}>

              </div>
              <div className={styles.thumbnailItem}>

              </div>
            <div className={styles.thumbnailItem}>

            </div>
            <div className={styles.thumbnailItem}>

            </div>
          </TabContainer>}
          {value === 'two' && <TabContainer>
            <div className={styles.itemFilter}>
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
            <div className={styles.itemFilter}>
              <FormControl component="fieldset">
                <FormLabel component="legend" className={styles.itemFilterLabel}>Age</FormLabel>
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
            <div className={styles.itemFilter}>
              <FormControl component="fieldset">
                <FormLabel component="legend" className={styles.itemFilterLabel}>Height</FormLabel>
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
          </TabContainer>}
      </div>
    );
  }
}
