import { useEffect,useState } from "react"
import { GetHabitaciones } from "../../services/GetHabitaciones"
import "./Habitaciones.css"

export function Habitaciones(){



    const[habitaciones,setHabitaciones]=useState([])

async function fetchrooms(){
    let rooms=await GetHabitaciones()
    setHabitaciones(rooms);
}

    useEffect(()=>{
fetchrooms()
    },[])
    return (
      <>
        <center>
          <h1 className="title2">Habitaciones</h1>
        </center>
        <div className="CONTAINER-HABITACIONES">
          {habitaciones.map((habitacion) => {
            return (
              <>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <p className="title">{habitacion.nombre}</p>
                      <img className="image" src={habitacion.foto} alt />
                    </div>
                    <div className="flip-card-back">
                      <p className="title">{habitacion.nombre}</p>
                      <h2>precio por noche: {habitacion.precioNoche}$</h2>
                      <h2>descripcion</h2>
                      <p>
                        En la montaña y bajo las estrellas puedes alojarte en un
                        espacio acogedor y auténtico rodeado de bosque y flores
                        donde volverás a conectar con la vida en el campo. El
                        espacio Hemos diseñado para ti un espacio en la montaña
                        con todas las facilidades de la ciudad, queremos que te
                        sientas como en casa. Buscamos que cada espacio pueda
                        darte la bienvenida y estimular tu creatividad y
                        conexión con la naturaleza. Acceso de los huéspedes
                        Usted disfrutará de pequeños espacios exteriores
                        privados.
                      </p>
                      <div className="container-map">
                        <h3>ubicacion cabaña</h3>
                        <br />

                        <center>
                          {" "}
                          <iframe className="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                            aria-hidden="false"
                            tabIndex={0}
                          ></iframe>
                        </center>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
}