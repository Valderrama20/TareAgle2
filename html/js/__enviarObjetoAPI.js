import { certificate } from "./__prueba.js";


  const form = document.getElementById("wrapped");
   

  form.addEventListener("submit", function (event) {
     
  certificate()
     
    
    event.preventDefault();

    // Array de nombres de los campos y sus respectivos valores
    const fieldNames = [
      "numOfLightBulbs",
      "lightBulbType",
      "numOfTelevisions",
      "numOfRefrigerators",
      "heatingSystemsCount",
      "transportationType",
      "dailyKMDistance",
      "flightFrequencyYearly",
      "smallAppliancesCount"
    ];

    // Crear un objeto con los datos capturados
    const formData = {};
    fieldNames.forEach(name => {
      const value = document.querySelector(`input[name="${name}"]:checked`).value;
      formData[name] = value;
    });

    // Mostrar los datos en la consola
    console.log("Datos del formulario:", formData);

    // Aquí puedes enviar los datos a tu API 
    // fetch("URL_DE_TU_API", {
    //     method: "POST",
    //     body: JSON.stringify(formData),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log("Respuesta de la API:", data);
    // })
    // .catch(error => {
    //     console.error("Error al enviar los datos:", error);
    // });
  });
;
  

