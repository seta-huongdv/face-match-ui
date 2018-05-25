import React from 'react';
import { TopBar as LibTopBar } from 'veritone-react-common';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import styles from './styles.scss';


export default class TopBar extends React.Component {
  render(){
      return(
          <div>
              <LibTopBar appBarOffset sideBarOffset leftOffset={240} leftText="Newport Insland Theft"
                        rightIconButtons={[
                          <IconButton key="1">
                            <InfoIcon />
                          </IconButton>,
                  ]}
              />
          </div>
      )
    }
}
