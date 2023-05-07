import "./ValueList.css";

interface Props {
  icon: any,
  head: string,
  p: string
}

const ValueList = ({icon , head , p}: Props) => {
  return (
    <div className="app__customer-value_list flex section__padding">
      <img src={icon} alt="icon" />
      <h3>{head}</h3>
      <div className="valueList__p">
        <p>{p}</p>
      </div>
    </div>
  );
};

export default ValueList;
