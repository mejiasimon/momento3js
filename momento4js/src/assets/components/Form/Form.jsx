import "./Form.css";
export function Form() {
  return (
    <>
      <form>
        <h1 className="form1">something</h1>
        <div classname="container-inputs">
          <div className="section">
            <div className="inputBox">
              <input placeholder="Write here..." type="text" required />
              <span>First name :</span>
            </div>
            <div className="inputBox">
              <input placeholder="Write here..." type="text" required />
              <span>First name :</span>
            </div>
          </div>
          <div className="section">
            <div className="inputBox">
              <input placeholder="Write here..." type="text" required />
              <span>First name :</span>
            </div>
            <div className="inputBox">
              <input placeholder="Write here..." type="text" required />
              <span>First name :</span>
            </div>
          </div>
          <div className="button-section">
          <input className="button-31" type="submit" name="" id="" />
          </div>

        </div>
      </form>
    </>
  );
}
