// Write your code here

import { Component } from "react";

import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";

import AppointmentItem from "../AppointmentItem";
import "./index.css";

class Appointments extends Component {
  state = {
    appointmentsList: [],
    titleInput: "",
    dateInput: "",
    isFilterActive: false,
  };

  isToggleStarred = (id) => {
    this.setState((prevState) => ({
      appointmentsList: prevState.appointmentsList.map((eachAppointment) => {
        if (id === eachAppointment.id) {
          return { ...eachAppointment, isStarred: !eachAppointment.isStarred };
        }
        return eachAppointment;
      }),
    }));
  };

  onFilter = () => {
    const { isFilterActive } = this.state;

    this.setState({
      isFilterActive: !isFilterActive,
    });
  };

  onChangeDateInput = (event) => {
    this.setState({ dateInput: event.target.value });
  };

  onChangeTitleInput = (event) => {
    this.setState({ titleInput: event.target.value });
  };

  onAddAppointment = (event) => {
    event.preventDefault();

    const { titleInput, dateInput } = this.state;
    const formatDate = dateInput
      ? format(new Date(dateInput), "dd MMMM yyyy, EEEE")
      : "";

    const newAppointment = {
      id: uuidv4(),
      title: titleInput,
      date: formatDate,
      isStarred: false,
    };

    this.setState((prevState) => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      titleInput: "",
      dateInput: "",
    }));
  };

  getFilteredAppointmentsList = () => {
    const { appointmentsList, isFilterActive } = this.state;

    if (isFilterActive) {
      return appointmentsList.filter(
        (eachAppoint) => eachAppoint.isStarred === true
      );
    }

    return appointmentsList;
  };

  render() {
    const { titleInput, dateInput, isFilterActive } = this.state;
    const fliterClassName = isFilterActive ? "filter-filled" : "filter-empty";

    const FilteredAppointmentsList = this.getFilteredAppointmentsList();

    return (
      <div className="bg-container">
        <div className="responsive-container">
          <div className="appointment-container">
            <div className="input-container">
              <form className="form" onSubmit={this.onAddAppointment}>
                <h1 className="head1">Add Appointment</h1>
                <label htmlFor="title" className="label1">
                  TITLE
                </label>
                <input
                  type="text"
                  id="title"
                  value={titleInput}
                  onChange={this.onChangeTitleInput}
                  className="input"
                  placeholder="Title"
                />

                <label htmlFor="date" className="label1">
                  DATE
                </label>
                <input
                  type="date"
                  id="date"
                  value={dateInput}
                  onChange={this.onChangeDateInput}
                  className="input"
                />
                <button className="button1" type="submit">
                  Add
                </button>
              </form>

              <img
                className="img1"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>

            <hr className="line" />

            <div className="filter-container">
              <h1 className="head2">Appointments</h1>
              <button
                type="button"
                className={`filter-style ${fliterClassName}`}
                onClick={this.onFilter}
              >
                Starred
              </button>
            </div>

            <ul className="appointments-list">
              {FilteredAppointmentsList.map((eachAppointment) => (
                <AppointmentItem
                  key={eachAppointment.id}
                  appointmentDetails={eachAppointment}
                  isToggleStarred={this.isToggleStarred}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointments;
