import React from "react";

export default class NomarllNamberInput extends React.Component {
  render() {
    const { ToShow, normal_number, roman_numerals } = this.props.data;
    return (
      <div className="form-group">
        <label className="label">
          {ToShow ? "Type number" : "Type roman numerals"}
        </label>
        <input
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
