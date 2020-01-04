import React from "react";
import styles from "./Button.module.scss";
// import classNames from "classnames";
import classNames from "classnames/bind";

/*
  styles = {
    test: 'Button_test__hash',
    active: 'Button_active__hash'
    ...
  };
*/

// 함수
const cx = classNames.bind();

console.log(cx);
export default function Button({ foo }) {
  console.log(classNames("foo", "bar")); // "foo bar"
  console.log(classNames("foo", "bar", "baz")); // "foo bar baz"

  console.log(classNames({ foo: true }, { bar: true })); // "foo bar"
  console.log(classNames({ foo: true }, { bar: false })); // "foo"
  console.log(
    classNames(null, false, "bar", undefined, 0, 1, { baz: null }, "")
  ); // "bar 1"
  console.log(classNames(styles.test, styles.active)); // Button_button__2Ce79 Button_loading__XEngF

  // [filename]\_[classname]\_\_[hash]
  console.log(styles);
  return <button className={cx("test", { active: foo === "y" })}>버튼</button>;
}
