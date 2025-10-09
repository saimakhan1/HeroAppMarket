import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-blue-950 text-neutral-content p-10">
      <nav>
        <h6 className="footer-title">Features</h6>
        <a className="link link-hover">Trending Apps</a>
        <a className="link link-hover">New Releases</a>
        <a className="link link-hover">Top Downloads</a>
        <a className="link link-hover">App Categories</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About Hero Apps</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Press & Media</a>
      </nav>
      <nav>
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Help Center</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Terms of Service</a>
        <a className="link link-hover">FAQs</a>
      </nav>
    </footer>
  );
};

export default Footer;
