"use client";

async function postData() {
  try {
    const response = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: "iqbalfebrianwar02@gmail.com",
        username: "iqbal",
        password: "iqbal26",
        name: {
          firstname: "Iqbal",
          lastname: "Febrianwar",
        },
        address: {
          city: "jakarta",
          street: "jakarta",
          number: 3,
          zipcode: "12021",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "085631736127",
      }),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log("Terjadi kesalahan:", error);
  }
}
export default postData;
