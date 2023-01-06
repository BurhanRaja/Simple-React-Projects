import React, { Fragment, useState } from "react";
import Switch from "./Switch";
import "../css/Main.css";

function Main() {
  const [isLocation, setIsLocation] = useState(false);
  const [isScheduler, setIsScheduler] = useState(false);
  const [tagInp, setTagInp] = useState("");
  const [tags, setTags] = useState([]);

  const handleTag = (e) => {
    e.preventDefault();
    if (tags.length === 0) {
      setTags([tagInp]);
      setTagInp("");
    } else {
      setTags([...tags, tagInp]);
      setTagInp("");
    }
  };

  return (
    <Fragment>
      <div className="container-box">
        <form>
          <div className="form-element">
            <div className="text">
              Use Location is <b>{isLocation ? "On" : "Off"}</b>
            </div>
            <Switch setSwitch={(val) => setIsLocation(val)} />
          </div>

          <div className="form-element">
            <div className="text">
              Use Scheduler is <b>{isScheduler ? "On" : "Off"}</b>
            </div>
            <Switch setSwitch={(val) => setIsScheduler(val)} />
          </div>

          <div className="tag-input">
            <div className="form-element ">
              <input
                type="text"
                placeholder="Enter a Tag"
                className="tag-inp"
                value={tagInp}
                onChange={(e) => setTagInp(e.target.value)}
              />
              <button className="addTag-btn" onClick={handleTag}>
                Add Tag
              </button>
            </div>
            <div className="tags">
              {tags.map((el) => {
                return <span key={el}>{el}</span>;
              })}
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default Main;
