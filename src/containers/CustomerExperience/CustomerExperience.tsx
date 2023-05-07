import { images } from "../../assets";
import { ValueList } from "../../components";
import "./CustomerExperience.css";
const CustomerExperience = () => {
  return (
    <div className="app__customer-experience section padding flex">
      <div className="customer__header flex flex__center section__padding">
        <h1 className="customer__header-heading">
          Creating Extraordinary Customer Experience
        </h1>
        <div className="customer__header-p">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            bibendum eget morbi dignissim eu pharetra consequat montes, sagittis.
          </p>
        </div>
      </div>
      <div className="customer__content flex">
        <ValueList
          icon={images.circles}
          head="Integrity"
          p="Displaying the highest level of Integrity in the way we conduct our business"
        />
        <ValueList
          icon={images.gallery}
          head="Demonstrate"
          p="Demonstrating a strong Will to Win in the market place"
        />
        <ValueList
          icon={images.object}
          head="Diversity"
          p="Promoting Diversity in the work place and community"
        />
        <ValueList
          icon={images.user}
          head="Team work"
          p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A semper aenean id pen"
        />
        <ValueList
          icon={images.circles}
          head="Collaboration"
          p="Displaying the highest level of Integrity in the way we conduct our business"
        />
        <ValueList
          icon={images.rocket}
          head="Technology"
          p="Harnessing the power of Technology to deliver better customer experience"
        />
        <ValueList
          icon={images.bag}
          head="Corporate"
          p="Setting the standard for the best Corporate Citizenship in the communities we work"
        />
        <ValueList
          icon={images.cube}
          head="Digital"
          p="Setting the standard for the best Corporate Citizenship in the communities we work"
        />
      </div>
    </div>
  );
};

export default CustomerExperience;
