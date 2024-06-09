import React, { useState } from "react";

// let initialState = {
//   fname: "",
//   lname: "",
//   address: "",
// };

const Hero = () => {
  //   const [data, setData] = useState(initialState);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let formData = new FormData(evt.target);
    let user = Object.fromEntries(formData.entries());
    let { fname, lname, country, city } = user;

    let newUser = {
      fname,
      lname,
      address: {
        country,
        city,
      },
    };

    console.log(newUser);
    evt.target.reset();
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input name="fname" type="text" placeholder="fname" />
        <input name="lname" type="text" placeholder="lname" />
        <input name="country" type="text" placeholder="country" />
        <input name="city" type="city" placeholder="city" />

        <button>submit</button>
      </form>
      <hr />
    </div>
  );
};

export default Hero;
