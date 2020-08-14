import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

export const Social = () => (
  <ul className="icons">
    <li>
      <LinkedinShareButton url="https://lucasbertolo.github.io/">
        <span className="icon fa-linkedin">
          <span className="label">Linkedin</span>
        </span>
      </LinkedinShareButton>
    </li>
    <li>
      <FacebookShareButton url="https://lucasbertolo.github.io/">
        <span className="icon fa-facebook">
          <span className="label">Facebook</span>
        </span>
      </FacebookShareButton>
    </li>
    <li>
      <WhatsappShareButton url="https://lucasbertolo.github.io/">
        <span className="icon fa-whatsapp">
          <span className="label">Whatsapp</span>
        </span>
      </WhatsappShareButton>
    </li>
    <li>
      <TwitterShareButton url="https://lucasbertolo.github.io/">
        <span className="icon fa-twitter">
          <span className="label">Twitter</span>
        </span>
      </TwitterShareButton>
    </li>
  </ul>
);
