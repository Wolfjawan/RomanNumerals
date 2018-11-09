import React from "react";
import Input from "./Input";
import Result from "./Result";

export default class RomanNumerals extends React.Component {
  state = {
    ToShow: false,
    normal_number: "",
    roman_numerals: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  convertToRoman = e => {
    e.preventDefault();
    var num = this.state.normal_number;
    var roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    var str = "";

    for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }

    this.setState({ roman_numerals: str });
  };
  MCXI;
  converToInteger = e => {
    var roman = this.state.roman_numerals;
    var result = 0;
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanValues = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
    for (var i = 0; i <= decimal.length; i++) {
      while (roman.indexOf(romanValues[i]) === 0) {
        result += decimal[i];
        roman = roman.replace(romanValues[i], "");
      }
    }
    this.setState({ normal_number: result });
  };

  onClickHadler = () => {
    const { ToShow } = this.state;
    this.setState({ ToShow: ToShow ? false : true });
  };
  render() {
    return (
      <div className="container">
        <h1>Roman Numerals</h1>
        <div className="number-to-roman">
          <Input data={this.state} onChange={this.onChange} />
          <div>
            <button className="swop-btn" onClick={this.onClickHadler}>
              Swop
            </button>
          </div>
          <Result
            data={this.state}
            convertToRoman={this.convertToRoman}
            converToInteger={this.converToInteger}
          />
        </div>
      </div>
    );
  }
}
