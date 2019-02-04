import React, { Component, PureComponent } from 'react';
import './CompleteTable.css';
import TableRows from './TableRows.js';
import { connect } from 'react-redux';

import {
    toggleOpenIncidentAction,
    toggleClosedIncidentAction,
    toggleOpenTodayAction,
    toggleOpenYesterdayAction,
} from '../actions/actions';

class CompleteTable extends PureComponent {
  render() {
    const { data_array, choose, openToday, openYesterday, toggleOpenIncidentAction, toggleClosedIncidentAction, toggleOpenTodayAction, toggleOpenYesterdayAction } = this.props;
    return (
        <div>
            <div id="top_bar" className="row mb-4 theme-topbar">
                <div className="align-self-left col-sm-6">
                    <button type="button" className="btn btn-outline-primary btn-lg hide-border" name="open" onClick={toggleOpenIncidentAction}>Open Incidents</button>
                    <button type="button" className="btn btn-outline-primary btn-lg hide-border" name="close" onClick={toggleClosedIncidentAction}>Closed Incidents</button>
                </div>
                <div className="input-group sm-3 col-sm-6">
                    <input type="text" className="form-control form-rounded show-border trans-back" placeholder="Search Incident box" aria-label="Search" aria-describedby="basic-addon2" />
                </div>
            </div>
            <div className="table-responsive-sm mt-2 mb-2 ml-3 mr-3">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Serial No.</th>
                            <th scope="col">Reference No.</th>
                            <th scope="col">Created Time</th>
                            <th scope="col">Updated Time</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Source</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-active">
                            <th colSpan="6">
                                <button type="button" name="Today" onClick={toggleOpenTodayAction} className="btn btn-outline-dark btn-sm hide-border">
                                    {openToday
                                        ? <i className="fa fa-caret-up" aria-hidden="true"></i>
                                        : <i className="fa fa-caret-down" aria-hidden="true"></i>} Date: Today
                                </button>
                            </th>
                        </tr>
                        {openToday
                            ? data_array[choose + 0].map((person, index) => <TableRows key={index} data={person} index={index} />)
                            : (<tr></tr>)}
                        <tr className="table-active">
                            <th colSpan="6">
                                <button type="button" name="Yesterday" onClick={toggleOpenYesterdayAction} className="btn btn-outline-dark btn-sm hide-border">
                                    {openYesterday
                                        ? <i className="fa fa-caret-up" aria-hidden="true"></i>
                                        : <i className="fa fa-caret-down" aria-hidden="true"></i>} Date: Yesterday
                                </button>
                            </th>
                        </tr>
                        {openYesterday
                            ? data_array[choose + 2].map((person, index) => <TableRows key={index} data={person} index={index} />)
                            : (<tr></tr>)}
                    </tbody>
                </table>
            </div>
            <Modal />
        </div>
    );
  }
}


const mapStateToProps = (state) => ({
    data_array: state.data_array,
    choose: state.choose,
    openToday: state.openToday,
    openYesterday: state.openYesterday,
});

const mapDispatchToProps = (dispatch) => ({
  toggleOpenIncidentAction: () => dispatch(toggleOpenIncidentAction()),
  toggleClosedIncidentAction: () => dispatch(toggleClosedIncidentAction()),
  toggleOpenTodayAction: () => dispatch(toggleOpenTodayAction()),
  toggleOpenYesterdayAction: () => dispatch(toggleOpenYesterdayAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompleteTable);


function Modal() {
    return (
        <div className="modal fade" id="detailModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content curve-edge-5">
                    <div className="modal-header">
                        <span className="modal-title my-modal-title" id="exampleModalLongTitle">Data</span>
                    </div>
                    <div className="modal-body" id="detail-body">
                        Row Data
                    </div>
                </div>
            </div>
        </div>
    );
}
