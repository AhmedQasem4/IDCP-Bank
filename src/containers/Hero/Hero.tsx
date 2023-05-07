import { images } from '../../assets';
import './Hero.css';

const Hero = () => {
  return (
    <div className='app__hero flex space__between section__padding'>
      <div className="hero__content">
        <h1 className='hero__heading'>Chase Your Dream with us</h1>
        <p className="hero__p">The harder you work for something, the greater you'll feel when you achieve it.</p>
        <div className="hero__buttons">
          <button className="btn btn-primary">Apply online</button>
          <button className="btn btn-secondary">Loan calculator</button>
        </div>
      </div>
      <div className="hero__image">
        <img src={images.family} alt="family image" />
      </div>
    </div>
  )
}

export default Hero