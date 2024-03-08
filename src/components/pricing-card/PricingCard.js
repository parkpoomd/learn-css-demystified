import React from 'react';
import './PricingCard.css';
import team1 from '../../assets/img/team-01.jpg';
import team2 from '../../assets/img/team-02.jpg';
import team3 from '../../assets/img/team-03.jpg';
import team4 from '../../assets/img/team-04.jpg';

const PricingCard = () => {
  return (
    <div className="body">
      <section className="pricing">
        <h1 className="section-title">pricing</h1>
        <p className="fs-500">plans that work for everyone</p>

        <div className="plans">
          <div className="plan bg-light">
            <h2 className="plan__title">basic</h2>
            <p className="plan__price">
              $4.99<span>/month</span>
            </p>
            <p className="plan__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, sint?
            </p>
            <a href="#" className="button">
              Join Now
            </a>
          </div>

          <div className="plan bg-accent">
            <h2 className="plan__title">super</h2>
            <p className="plan__price">
              $19.99<span>/month</span>
            </p>
            <p className="plan__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, sint?
            </p>
            <a href="#" className="button">
              Join Now
            </a>
          </div>

          <div className="plan bg-dark">
            <h2 className="plan__title">Enterprise</h2>
            <p className="plan__price">
              $49.99<span>/month</span>
            </p>
            <p className="plan__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, sint?
            </p>
            <a href="#" className="button">
              Join Now
            </a>
          </div>
        </div>

        <p className="fs-500">Need something different? No problem!</p>
        <a href="#" className="button">
          Get in touch
        </a>
      </section>

      <section className="team">
        <div className="container">
          <h2 className="section-title">Our team</h2>
          <p className="fs-500">Get to know us a little</p>

          <div className="team-members">
            <div className="team-member bg-light">
              <img src={team1} alt="" />
              <div className="info">
                <h3 className="name">Adriana Ramirez</h3>
                <p className="position">Lead UI/UK</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="team-member bg-light">
              <img src={team2} alt="" />
              <div className="info">
                <h3 className="name">Calvin Miles</h3>
                <p className="position">Lead UI/UK</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="team-member bg-dark team-member--mirrored">
              <img src={team3} alt="" />
              <div className="info">
                <h3 className="name">Hardy Smith</h3>
                <p className="position">Lead UI/UK</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="team-member bg-dark team-member--mirrored">
              <img src={team4} alt="" />
              <div className="info">
                <h3 className="name">Janae Watts</h3>
                <p className="position">Lead UI/UK</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingCard;
