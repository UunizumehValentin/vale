import React, { useState } from "react";

function Form() {
  const [email, setEmail] = useState();
  return (
    <section className="form">
      <form>
        <input
          type="email"
          placeholder="enter email"
          onClick={(e) => setEmail(e.target.value)}
        />
        <input type="contact" placeholder="enter contact" />
        <input type="passward" placeholder="enter passward" />
        <input type="text" placeholder="enter text" />
        <button className="btn">SUBMIT</button>
      </form>
    </section>
  );
}

export default Form;
