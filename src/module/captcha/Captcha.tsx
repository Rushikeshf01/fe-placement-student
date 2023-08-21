import React, { useEffect, useState } from "react";
import style from "./captcha.module.css";
import { updateCaptchaValue } from "@/store/slice/extraSlice";
import { useDispatch } from "react-redux";

const Captcha = () => {
  const [captchaText, setCaptchaText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getRandomCaptchaText();
  }, []);

  const getRandomCaptchaText = () => {
    const textArray = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];

    let captchaString = [];

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * textArray.length);
      captchaString.push(textArray[randomIndex]);
    }
    dispatch(updateCaptchaValue(captchaString.join("")));
    setCaptchaText(captchaString.join(""));
  };

  return <div className={style.captcha}>{captchaText}</div>;
};

export default Captcha;
