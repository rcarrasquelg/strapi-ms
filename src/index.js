// @ts-nocheck
"use strict";
const TurndownService = require("turndown");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // const jsonData = require("./newPosts.json"); // Carga tu JSON
    // const turndownService = new TurndownService();
    // // Función para transformar el contenido HTML a Markdown
    // const convertToMarkdown = (content) => {
    //   return turndownService.turndown(content);
    // };
    // // Iterar sobre cada entrada del JSON
    // jsonData.forEach((entry) => {
    //   // Convertir el contenido HTML a Markdown
    //   const markdownContent = convertToMarkdown(entry.content.rendered);
    //   // Preparar los datos para enviar a Strapi
    //   const dataToSend = {
    //     title: entry.title.rendered,
    //     date: entry.date,
    //     content: markdownContent,
    //     author: entry.author,
    //     categories: entry.categories,
    //     slug: entry.slug,
    //     mediaUrl: entry.media,
    //     mediaName: entry.mediaName,
    //   };
    //   console.log(dataToSend);
    //   // URL de la API de Strapi para crear una nueva entrada
    //   const apiUrl = "http://127.0.0.1:1337/api/makings"; // Ajustar la URL según tu configuración
    //   // Configuración de la solicitud POST a Strapi
    //   const requestOptions = {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ data: dataToSend }),
    //   };
    //   // Realizar la solicitud POST a Strapi utilizando Fetch
    //   setTimeout(() => {
    //     fetch(apiUrl, requestOptions)
    //       .then((response) => {
    //         if (!response.ok) {
    //           throw new Error("Error al crear la entrada en Strapi");
    //         }
    //         return response.json();
    //       })
    //       .then((data) => {
    //         console.log("Entrada creada en Strapi:", data);
    //       })
    //       .catch((error) => {
    //         console.error("Error al crear la entrada en Strapi:", error);
    //       });
    //   }, 10000);
    // });
  },
};
