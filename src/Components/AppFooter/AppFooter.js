import React from "react";
import { Footer } from "react-daisyui";
import quiz from "../../Static/Icon/quiz.svg";
const AppFooter = () => {
  return (
    <div>
      <Footer className="p-10 bg-base-300 text-base-content justify-between">
        <div>
          <img src={quiz} className="w-24" alt="" />
          <p>
            Q-Quiz
            <br />
            &#169; 2023 Fahim Faisal Khan, All rights reserved.
          </p>
        </div>

        <div>
          <Footer.Title>Services</Footer.Title>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <Footer.Title>Company</Footer.Title>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <Footer.Title>Legal</Footer.Title>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </Footer>
    </div>
  );
};

export default AppFooter;
