// export default async function getTimeZone(city) {
//   try {
//     const url = `https://worldtimeapi.org/api/timezone/${city}`;
//     const resp = await fetch(url);
//     if (!resp.ok) {
//       throw new Error(`Erreur HTTP ${resp.status}`);
//     }
//     const data = await resp.json();
//     return data;
//   } catch (err) {
//     console.error("Erreur de récupération du fuseau horaire :", err);
//     return null;
//   }
// }