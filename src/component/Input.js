import React from "react";

export default class Input extends React.Component {
  render() {
    const { ToShow, normal_number, roman_numerals } = this.props.data;
    return (
      <div className="form-group">
        <label className="label">
          {ToShow ? "Type number" : "Type roman numerals"}
        </label>
        <textarea rows="4" cols="50"
          type="text"
          name={ToShow ? "normal_number" : "roman_numerals"}
          className="input"
          placeholder={ToShow ? "Type number" : "Type roman numerals"}
          value={ToShow ? normal_number : roman_numerals}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
