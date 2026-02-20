"use client";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Check } from "lucide-react";

type SimpleCaptchaProps = {
  onVerify: (verified: boolean) => void;
  resetTrigger: number; // 👈 new
};

export default function SimpleCaptcha({
  onVerify,
  resetTrigger,
}: SimpleCaptchaProps) {
  const [captcha, setCaptcha] = useState<number>(0);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(false);

const generateCaptcha = useCallback(() => {
  const random = Math.floor(10000 + Math.random() * 90000);
  setCaptcha(random);
  setInput("");
  setError("");
  setIsVerified(false);
}, []);

  // Generate captcha on mount + when parent resets
  useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  generateCaptcha();
}, [generateCaptcha, resetTrigger]);

  const handleVerify = () => {
    if (Number(input) !== captcha) {
      setError("Captcha does not match");
      setIsVerified(false);
      onVerify(false);
      return;
    }

    setError("");
    setIsVerified(true);
    onVerify(true);
    toast.success("Captcha verified");
  };

  return (
    <>
      {/* Captcha display */}
     <div className="flex flex-col gap-2 ">

    {/* CAPTCHA DISPLAY */}
    <div className="
      flex justify-between items-center
      border border-gray-300
      rounded-md
      px-4 py-3
      bg-transparent
      text-(--color-secondary)
      font-my-font-semibold
      tracking-widest
      select-none
      w-50
    ">
      <span className="line-through">{captcha}</span>

      <button
        type="button"
        onClick={generateCaptcha}
        className="
          text-black
          hover:text-(--color-secondary)
          transition
        "
        title="Refresh captcha"
      >
        ⟳
      </button>
    </div>


    {/* INPUT + VERIFY */}
    <div className="flex gap-2 items-center">

      <input
        type="text"
        placeholder="Enter captcha"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isVerified}
        className="
          w-full
          bg-transparent
          border border-gray-300
          rounded-md
          px-4 py-3
          placeholder:text-(--color-secondary)
          focus:outline-none focus:border-gray-500
        "
        style={{color:"black"}}
      />

      {!isVerified ? (
        <button
          type="button"
          onClick={handleVerify}
          className="
            px-4 py-3
            border border-black/40
            rounded-md
            text-black
            font-my-font-semibold
            transition-all duration-300
            hover:bg-black/40 hover:text-white
          "
        >
          Verify
        </button>
      ) : (
        <div className="
          text-green-600
          flex items-center gap-1
          font-my-font-semibold
        ">
          <Check size={18} /> Verified
        </div>
      )}

    </div>

    {error && (
      <p className="text-red-500 text-xs">{error}</p>
    )}

  </div>
    </>
  );
}
