export async function GetHabitaciones(){
let headersList = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
};

let response = await fetch(
  "https://airbnb-sable-two.vercel.app/obtener/habitaciones",
  {
    method: "GET",
    headers: headersList,
  }
);

let data = await response.json();
return(data.datos)
}