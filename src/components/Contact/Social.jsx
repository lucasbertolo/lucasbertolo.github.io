import React, { useContext } from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { CultureContext } from '../../core/resources';

export const Social = () => {
  const { l } = useContext(CultureContext);

  return (
    <>
      <h5>{l('share')}:</h5>
      <div>
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
      </div>
    </>
  );
};
