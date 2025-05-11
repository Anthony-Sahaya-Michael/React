import React from "react";

function Social() {
  const links = [
    {
      id: 1,
      icon: "linkedin-alt",
      ref: "https://www.linkedin.com/in/anthony-sahaya-michael/",
    },
    {
      id: 2,
      icon: "github-alt",
      ref: "https://github.com/Anthony-Sahaya-Michael",
    },
    {
      id: 3,
      icon: "envelope-alt",
      ref: "mailto:manthonysahayamichael1996@gmail.com",
    },
  ];
  return (
    <div className="home__social">
      {links.map((data) => (
        <a
          href={data.ref}
          key={data.id}
          target="_blank"
          rel="noreferrer"
          className="home__social-icon"
        >
          <i className={`uil uil-${data.icon}`}></i>
        </a>
      ))}
    </div>
  );
}

export default Social;
