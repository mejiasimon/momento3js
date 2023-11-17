import "./Form.css";
  const slider = document.querySelector(".gallery");
export function Form() {



  
  
  return (
    <>
      <div className="container-form">
        <form>
          <h1 className="form1" id="reservas">
            Reserva con nosotros
          </h1>
          <div classname="container-inputs">
            <div className="section">
              <div className="inputBox">
                <input
                  placeholder="Write here..."
                  type="text"
                  required
                  name=""
                />
                <span>First name :</span>
              </div>
              <div className="inputBox">
                <input
                  placeholder="Write here..."
                  type="text"
                  required
                  name=""
                />
                <span>First name :</span>
              </div>
            </div>
            <div className="section">
              <div className="inputBox">
                <input
                  placeholder="Write here..."
                  type="date"
                  required
                  name=""
                />
                <span>Fecha entrada</span>
              </div>
              <div className="inputBox">
                <input
                  placeholder="Write here..."
                  type="date"
                  required
                  name=""
                />
                <span>Fecha salida</span>
              </div>
            </div>
            <div className="button-section">
              <input className="button-31" type="submit" name="" id="" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
