"use client";
import React, { useEffect, useRef, useState } from 'react';

const OTP_LENGTH = 5;

const OTP = () => {
  const [otpArr, setOtpArr] = useState(new Array(OTP_LENGTH).fill(''));
  const inputRef = useRef([]);

  useEffect(() => {
    // Focus on first input box on page load.
    inputRef.current[0]?.focus();
  }, []);

  const handleOnChange = (e, index) => {
    const otp = e.target.value;
    // Accept only numbers.
    if (isNaN(otp)) return;

    const otpCleaned = otp.trim();
    const otpArrCopy = [...otpArr];
    // Read only last character.
    otpArrCopy[index] = otpCleaned.slice(-1);
    if (otpCleaned) {
      inputRef.current[index + 1]?.focus();
    }
    setOtpArr(otpArrCopy);
  };

  const handleKeyDown = (e, index) => {
    // Focus on previous input only when current input box is empty and backspace is pressed.
    if (e.key === 'Backspace' && !otpArr[index]) {
      inputRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    // Get OTP from clipboard.
    const copiedOTP = e.clipboardData.getData('text/plain');

    // Return if not a number.
    if (isNaN(copiedOTP)) return;

    // Set OTP in state.
    const otpArrCopy = [...otpArr];
    for (let i = 0; i < OTP_LENGTH; i++) {
      otpArrCopy[i] = copiedOTP[i] || '';
    }

    // Focus on last input box if OTP length is 5 else focus on the next input box.
    if (copiedOTP.length >= OTP_LENGTH) {
      inputRef.current[OTP_LENGTH - 1]?.focus();
    } else {
      inputRef.current[copiedOTP.length]?.focus();
    }

    setOtpArr(otpArrCopy);
  };

  const render = () => {
    return otpArr.map((otp, index) => {
      return (<input key={index} type="text" value={otp}
        ref={(el) => { inputRef.current[index] = el; }}
        onChange={(e) => { handleOnChange(e, index); }}
        onKeyDown={(e) => { handleKeyDown(e, index); }}
      />
      );
    });
  };

  return (
    <div onPaste={(e) => handlePaste(e)}>
      {render()}
    </div>
  );
};

export default OTP;