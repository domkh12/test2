import React, { useState } from 'react';

function OtpInput({ value, onChange }) {
  return (
    <input
      type="text"
      maxLength="1"
      className={`justify-center items-start px-7 py-6 text-2xl font-bold text-center ${
        value ? 'bg-white border-teal-400' : 'bg-gray-50 border-slate-200'
      } rounded-lg border border-solid h-[60px] w-[69px] max-md:px-5`}
      value={value}
      onChange={onChange}
      aria-label="OTP digit"
    />
  );
}

function VerifyButton({ onClick }) {
  return (
    <div className="flex flex-col justify-center mt-12 max-w-full text-base font-medium text-center text-white whitespace-nowrap bg-white w-[219px] max-md:mt-10">
      <button
        className="justify-center items-center px-16 py-3 bg-violet-600 rounded-lg max-md:px-5"
        onClick={onClick}
      >
        Verify
      </button>
    </div>
  );
}

function OtpVerification() {
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };

  const handleVerify = () => {
    const otp = otpValues.join('');
    console.log('Verifying OTP:', otp);
  };

  const handleResend = () => {
    console.log('Resending OTP');
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/7bae73adac72d605e40164bb814738363e597c94e2871a7fca3cb7ed25a7b92f?apiKey=f31fd4ee56d247b9aa3f0b98047a7bf3)', height: '50vh' }}>
      <section className="flex mt-[350px] z-10 flex-col items-center self-center px-9 py-20 mt-0 max-w-full bg-white border border-solid shadow-2xl border-neutral-200 w-[572px] max-md:px-5 max-md:mt-0 top-10 rounded-lg">
        <h1 className="mt-11 text-3xl font-medium text-center text-black max-md:mt-10">
          OTP Verification
        </h1>
        <p className="mt-5 text-base font-light text-center text-black">
          Enter the verification code we just sent to your <br /> email address
        </p>
        <form className="flex gap-5 self-stretch mt-8 text-2xl font-bold whitespace-nowrap text-zinc-800 max-md:flex-wrap max-md:max-w-full">
          {otpValues.map((value, index) => (
            <OtpInput
              key={index}
              value={value}
              onChange={(e) => handleOtpChange(index, e.target.value)}
            />
          ))}
        </form>
        <VerifyButton onClick={handleVerify} />
        <p className="mt-32 text-base font-semibold tracking-normal leading-5 text-center text-black max-md:mt-10">
          <span className="font-medium">Didn't received code? </span>
          <button className="font-bold text-teal-400" onClick={handleResend}>
            Resend
          </button>
        </p>
      </section>
    </main>
  );
}

export default OtpVerification;