import React from 'react';
import './Overlooked.css';
import john from '../../assets/img/john.jpg';
import sally from '../../assets/img/sally.jpg';
import rachelle from '../../assets/img/rachelle.jpg';
import winston from '../../assets/img/winston.jpg';
import alex from '../../assets/img/alex.jpg';
import raymond from '../../assets/img/raymond.jpg';
import dribbble from '../../assets/img/dribbble.svg';
import twitter from '../../assets/img/twitter.svg';
import instagram from '../../assets/img/instagram.svg';

const Overlooked = () => {
  return (
    <div className="candidates">
      {/* Candidate 1 */}
      <div className="candidate">
        <h2 className="name">John Smith</h2>
        <img src={john} alt="" />
        <p className="roles">
          <span className="tag ui">UI Design</span>
          <span className="tag ux">UX Design</span>
        </p>
        <p className="bio">
          With award winning designs at several agencies and 18 years of
          experiences, John brings the full package to your team.
        </p>
        <ul className="social">
          <li>
            <a aria-label="dribbble" href="#">
              <img src={dribbble} alt="" />
            </a>
          </li>
          <li>
            <a aria-label="twitter" href="#">
              <img src={twitter} alt="" />
            </a>
          </li>
          <li>
            <a aria-label="instagram" href="#">
              <img src={instagram} alt="" />
            </a>
          </li>
        </ul>
        <a href="#" className="btn">
          Hire
        </a>
      </div>

      {/* Candidate 2 */}
      <div className="candidate">
        <h2 className="name">Sally Andrews</h2>
        <img src={sally} alt="" />
        <p className="roles">
          <span className="tag ux">UX Design</span>
        </p>
        <p className="bio">I’m energetic, hard working and quick to learn!</p>
        <ul className="social">
          <li>
            <a aria-label="dribbble" href="#">
              <img src={dribbble} alt="" />
            </a>
          </li>
          <li>
            <a aria-label="twitter" href="#">
              <img src={twitter} alt="" />
            </a>
          </li>
          <li>
            <a aria-label="instagram" href="#">
              <img src={instagram} alt="" />
            </a>
          </li>
        </ul>
        <a href="#" className="btn">
          Hire
        </a>
      </div>

      {/* Candidate 3 */}
      <div className="candidate">
        <h2 className="name">Rachelle Watson</h2>
        <img src={rachelle} alt="" />
        <p className="roles">
          <span className="tag ui">UI Design</span>
          <span className="tag ux">UX Design</span>
        </p>
        <p className="bio">
          Eget nulla pulvinar arcu pellentesque ipsum at id dapibus vestibulum
          egestas sodales nec nulla nunc interdum posuere aliquet.
        </p>
        <ul className="social">
          <li>
            <a aria-label="dribbble" href="#">
              <img src={dribbble} alt="" />
            </a>
          </li>
          <li>
            <a aria-label="twitter" href="#">
              <img src={twitter} alt="" />
            </a>
          </li>
          <li>
            <a aria-label="instagram" href="#">
              <img src={instagram} alt="" />
            </a>
          </li>
        </ul>
        <a href="#" className="btn">
          Hire
        </a>
      </div>

      {/* Candidate 4 */}
      <div className="candidate">
        <h2 className="name">Winston Millington</h2>
        <img src={winston} alt="" />
        <p className="roles">
          <span className="tag ui">UI Design</span>
          <span className="tag dev">Developer</span>
        </p>
        <p className="bio">
          Ante risus gravida vitae aliquet tristique libero, at blandit
          volutpat, viverra.
        </p>
        <ul className="social">
          <li>
            <a aria-label="dribbble" href="#">
              <img src={dribbble} alt="" />
            </a>
          </li>
          <li>
            <a aria-label="twitter" href="#">
              <img src={twitter} alt="" />
            </a>
          </li>
          <li>
            <a aria-label="instagram" href="#">
              <img src={instagram} alt="" />
            </a>
          </li>
        </ul>
        <a href="#" className="btn">
          Hire
        </a>
      </div>

      {/* Candidate 5 */}
      <div className="candidate">
        <h2 className="name">Alex Miller</h2>
        <img src={alex} alt="" />
        <p className="roles">
          <span className="tag ux">UX Design</span>
        </p>
        <p className="bio">
          Amet magna amet venenatis purus donec eget ultricies urna.
        </p>
        <ul className="social">
          <li>
            <a aria-label="dribbble" href="#">
              <img src={dribbble} alt="" />
            </a>
          </li>
          <li>
            <a aria-label="twitter" href="#">
              <img src={twitter} alt="" />
            </a>
          </li>
          <li>
            <a aria-label="instagram" href="#">
              <img src={instagram} alt="" />
            </a>
          </li>
        </ul>
        <a href="#" className="btn">
          Hire
        </a>
      </div>

      {/* Candidate 6 */}
      <div className="candidate">
        <h2 className="name">Raymond Smith</h2>
        <img src={raymond} alt="" />
        <p className="roles">
          <span className="tag ui">UI Design</span>
        </p>
        <p className="bio">
          Tincidunt urna eu posuere lobortis cursus neque quam nulla fringilla
          pellentesque egestas sem libero aliquam commodo
        </p>
        <ul className="social">
          <li>
            <a aria-label="dribbble" href="#">
              <img src={dribbble} alt="" />
            </a>
          </li>
          <li>
            <a aria-label="twitter" href="#">
              <img src={twitter} alt="" />
            </a>
          </li>
          <li>
            <a aria-label="instagram" href="#">
              <img src={instagram} alt="" />
            </a>
          </li>
        </ul>
        <a href="#" className="btn">
          Hire
        </a>
      </div>
    </div>
  );
};

export default Overlooked;
