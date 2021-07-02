import React, { useRef, useState } from "react";

export default function Subscribe() {
  //Create a reference to the input
  const inputEl = useRef(null);
  //Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    //Send a request to our API with the user's email address.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      //If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // Clear the input value and show a success message.
    inputEl.current.value = "";
    setMessage("Success! 🎉 You will recieve updates from PSSO now.");
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={subscribe} className="flex flex-col">
        <label className="pt-16"htmlFor="email-input">{"Email Address"}</label>
        <input
          id="email-input"
          name="email"
          placeholder="andrewis@awesome.com"
          ref={inputEl}
          required
          type="email"
          className="py-2"
        />
        <div className="pt-3 pb-3">
          {message
            ? message
            : `We'll only send emails when new announcements are posted. No spam.`}
        </div>
        <button type="submit" className="bg-green-primary hover:bg-black text-white font-bold py-3 px-4 rounded">{"Subscribe"}</button>
      </form>
    </div>
  );
}
