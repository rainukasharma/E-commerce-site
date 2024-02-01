import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Channel" title="Channel" />
          <Button onClickHandler={handleClick} value="Gucci" title="Gucci" />
          <Button onClickHandler={handleClick} value="Prada" title="Prada" />
          <Button onClickHandler={handleClick} value="Burberry" title="Burberry" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
