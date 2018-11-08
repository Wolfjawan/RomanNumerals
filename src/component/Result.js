import React from "react";

export default class Result extends React.Component {
  render() {
    const { ToShow, normal_number, roman_numerals } = this.props.data;
    return (
      <div className="form-group">
        <button
          className="label"
          onClick={
            ToShow ? this.props.convertToRoman : this.props.converToInteger
          }
        >
          Click to see Result
        </button>
        <input
          type="text"
          className="input"
          placeholder="Result"
          value={!ToShow ? normal_number : roman_numerals}
        />
      </div>
    );
  }
}
