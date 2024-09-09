//   let convert = require("xml-js");
//   let xml = require("fs").readFileSync("src/blog.xml", "utf8");

//   let result = convert.xml2json(xml, { compact: true, spaces: 4 });
//   const data = JSON.parse(result);

//   async function crearEntradaEnStrapi(datos) {
//     try {
//       await strapi.query("Post").create({
//         title: datos.title._cdata,
//         publishDate: datos.pubDate._text,
//         content: datos["content:encoded"]._cdata,
//       });
//       console.log("Entrada creada en Strapi correctamente.");
//     } catch (error) {
//       console.error("Error al crear la entrada en Strapi:", error);
//     }
//   }

//   data.rss.channel.item.forEach(async (element) => {
//     await crearEntradaEnStrapi(element);
//   });
// },
// }

////////////////////////////////////////////////////////////////////////

//   try {
//     // Crea una nueva entrada en el Content-Type "Test"
//     await strapi.query("test").create({
//       title: "Mi primera entrada",
//       date: new Date(),
//       content: "Este es el contenido de mi primera entrada en Strapi.",
//     });

//     console.log(
//       'Se creó exitosamente una entrada en el Content-Type "Test".'
//     );
//   } catch (error) {
//     console.error(
//       'Error al crear la entrada en el Content-Type "Test":',
//       error
//     );
//   }

// let convert = require("xml-js");
// let xml = require("fs").readFileSync("src/data.xml", "utf8");

// let result = convert.xml2json(xml, { compact: true, spaces: 4 });
// const data = JSON.parse(result);

// async function crearEntradaEnStrapi(datos) {
//   try {
//     await strapi.query("test").create({
//       title: datos.title._text,
//       date: datos.date._text,
//       content: datos.content._text,
//     });
//     console.log("Entrada creada en Strapi correctamente.");
//   } catch (error) {
//     console.error("Error al crear la entrada en Strapi:", error);
//   }
// }

// data.channel.entry.forEach(async (element) => {
//   await crearEntradaEnStrapi(element);
// });
