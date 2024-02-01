import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="bodycon"
          title="BodyCon"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="maxidress"
          title="Maxi Dress"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="slipdress"
          title="Slip Dress"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="alinedress"
          title="A Line Dress"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
