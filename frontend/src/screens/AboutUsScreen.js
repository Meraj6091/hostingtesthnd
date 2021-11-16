import React from "react";

const AboutUsScreen = () => {
  return (
    <div>
      <div>
        <h2>About Us !</h2>
        <h3 style={{ textAlign: "center" }}>
          Welcome To <span id="W_Name1">Grey-Light</span>
        </h3>
        <p>
          <span id="W_Name2">Grey-Light</span> is a Professional{" "}
          <span id="W_Type1">E-commerce</span> Platform. Here we will provide
          you only best and top rated products, which you will like very much.
          We're dedicated to providing you the best of{" "}
          <span id="W_Type2">Electronic</span> items with a focus on
          dependability and{" "}
          <span id="W_Spec">Computers, laptops. smart phones</span>. We're
          working to provide you the best<span id="W_Type3">Electronic</span>{" "}
          items to you doorstep{" "}
          <a
            href="https://www.blogearns.com"
            rel="do-follow"
            style={{ color: "inherit", textDecoration: "none" }}
          ></a>
          . We hope you enjoy our <span id="W_Type4">Electronic Products</span>{" "}
          as much as we enjoy offering them to you.
        </p>
        <p>
          We will keep Adding more important propducts on this Website for all
          of you.
        </p>
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          Thanks For Visiting Our Site
          <br />
          <br />
          <span
            style={{
              color: "blue",
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Have a nice day !
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutUsScreen;
