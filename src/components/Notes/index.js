import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import ReplyIcon from '@material-ui/icons/Reply';

let counter = 0;

function createData(createdDate, notes, createdBy) {
  counter += 1;
  return {id: counter, createdDate, notes, createdBy};
}

const columnData = [
  {id: 'createdDate', numeric: false, disablePadding: true, label: 'Date'},
  {id: 'notes', numeric: false, disablePadding: true, label: 'Note'},
  {id: 'createdBy', numeric: false, disablePadding: true, label: 'Created By'},
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const {onSelectAllClick, order, orderBy, numSelected, rowCount} = this.props;
    let disabled = true;
    if(numSelected > 0){
        disabled = false
    } else {
        disabled = true
    }
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {columnData.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}
                style={{
                  fontSize: '14px',
                  fontWeight: '300',
                  color: 'rgba(0,0,0,0.7)'
                }}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
          <TableCell>
              <div>
                <Tooltip title="Delete">
                  <IconButton aria-label="Delete" disabled={disabled}>
                    <ReplyIcon/>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Edit">
                  <IconButton aria-label="Delete" disabled={disabled}>
                    <CreateIcon/>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton aria-label="Delete" disabled={disabled}>
                    <DeleteIcon/>
                  </IconButton>
                </Tooltip>
              </div>



          </TableCell>
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class EnhancedTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      order: 'asc',
      orderBy: 'calories',
      selected: [],
      data: [
        createData('04/11/2018 08:00 AM PST', 'I was on a boat when i noted out of place items', 'Charlotte Lee'),
        createData('04/11/2018 08:00 AM PST', 'Contact the DA for more information', 'username'),
        createData('04/11/2018 08:00 AM PST', 'Victim 1 Statement from the scene', 'username'),
        createData('04/11/2018 08:00 AM PST', 'Victim 2 Statement from the scene', 'username'),
      ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
      page: 0,
      rowsPerPage: 5,
    };
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    const data =
      order === 'desc'
        ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    this.setState({data, order, orderBy});
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState({selected: this.state.data.map(n => n.id)});
      return;
    }
    this.setState({selected: []});
  };

  handleClick = (event, id) => {
    const {selected} = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({selected: newSelected});
  };

  handleChangePage = (event, page) => {
    this.setState({page});
  };

  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value});
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const {classes} = this.props;
    const {data, order, orderBy, selected, rowsPerPage, page} = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                const isSelected = this.isSelected(n.id);
                return (
                  <TableRow
                    hover
                    onClick={event => this.handleClick(event, n.id)}
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={n.id}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox checked={isSelected}/>
                    </TableCell>
                    <TableCell component="td" scope="row" padding="none"
                               style={{
                                  fontSize: '14px',
                                  fontWeight: '300',
                                  color: '#000'
                                }}
                    >{n.createdDate}</TableCell>
                    <TableCell component="td" scope="row" padding="none"
                               style={{
                                 fontSize: '14px',
                                 fontWeight: '300',
                                 color: '#000'
                               }}
                    >{n.notes}</TableCell>
                    <TableCell component="td" scope="row" padding="none"
                               style={{
                                 fontSize: '14px',
                                 fontWeight: '300',
                                 color: '#000'
                               }}
                    >{n.createdBy}</TableCell>
                    <TableCell component="td" scope="row" width="200">
                      <Tooltip title="Delete">
                        <IconButton aria-label="Detail">
                          <ReplyIcon/>
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit">
                        <IconButton aria-label="Edit">
                          <CreateIcon/>
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton aria-label="Delete">
                          <DeleteIcon/>
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{height: 49 * emptyRows}}>
                  <TableCell colSpan={6}/>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
