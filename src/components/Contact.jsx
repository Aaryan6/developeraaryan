import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="text-slate-200 py-20 px-10 flex flex-col text-center"
    >
      <h3 className="font-semibold text-4xl">Get In Touch</h3>
      <p className="max-w-lg mx-auto mt-6">
        I am currently looking for any opportunity to work as a freelancer and
        intern by remote work. My inbox is always open, whether you have any
        work just message me.
      </p>
      <a
        href="mailto:aaryanpatel6211120@gmail.com"
        className="text-teal-300 border-2 border-teal-300 py-2 px-4 mt-6 w-fit mx-auto text-sm rounded-md duration-300 hover:bg-teal-500 hover:text-gray-900"
      >
        Say Hello👋
      </a>
    </div>
  );
};

export default Contact;
