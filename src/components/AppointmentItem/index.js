// Write your code here
import "./index.css";

const AppointmentItem = (props) => {
  const { appointmentDetails, isToggleStarred } = props;
  const { id, title, date, isStarred } = appointmentDetails;

  const starImgUrl = isStarred
    ? "https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
    : "https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png";

  const onClickStar = () => {
    isToggleStarred(id);
  };

  return (
    <li className="list-items">
      <div className="header-container">
        <p className="para1">{title}</p>
        <button
          type="button"
          className="button2"
          onClick={onClickStar}
          data-testid="star"
        >
          <img src={starImgUrl} className="img2" alt="star" />
        </button>
      </div>
      <p className="para2">Date: {date}</p>
    </li>
  );
};

export default AppointmentItem;
