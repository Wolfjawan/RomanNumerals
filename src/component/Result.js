import React from "react";

export default class Result extends React.Component {
  render() {
    const { ToShow, normal_number, roman_numerals } = this.props.data;
    return (
      <div className="form-group">
        <button
          className="label result-btn"
          onClick={
            ToShow ? this.props.convertToRoman : this.props.converToInteger
          }
        >
          Click to see Result
        </button>
        <p className="result">{!ToShow ? normal_number : roman_numerals}</p>
        <button
          className="label result-btn-media"
          onClick={
            ToShow ? this.props.convertToRoman : this.props.converToInteger
          }
        >
          Click to see Result
        </button>
      </div>
    );
  }
}
