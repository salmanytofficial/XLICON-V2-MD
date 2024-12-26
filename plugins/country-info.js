import axios from "axios";

const restcountriesApi = "https://restcountries.com/v3.1/name/";

let handler = async (message, { text, conn }) => {
  try {
    // Check if country name is provided
    if (!text) {
      throw `❓ *Please provide the name of the country you want information about. Example: ${usedPrefix + command} Canada*`;
    }

    // Fetch country information from the API
    const response = await axios.get(`${restcountriesApi}${text}`);
    const countryData = response.data[0];

    // If country data is not found, throw error
    if (!countryData) {
      throw "⚠️ *Country not found. Please check the name and try again.*";
    }

    // Prepare the country information message
    const countryInfo = `
      🌍 *Country Information for ${countryData.name.common} (${countryData.cca2}):*
      *Capital:* ${countryData.capital}
      *Population:* ${countryData.population.toLocaleString()}
      *Area:* ${countryData.area.toLocaleString()} square kilometers
      *Region:* ${countryData.region}
      *Subregion:* ${countryData.subregion}
      *Languages:* ${Object.values(countryData.languages).join(", ")}
      *Currencies:* ${Object.values(countryData.currencies).join(", ")}
      *Timezones:* ${countryData.timezones.join(", ")}
      *Flag:* ${countryData.flags.svg}
    `;

    // Send the response
    conn.reply(message.chat, countryInfo, message);
  } catch (error) {
    console.error(error);
    message.reply(`⛔ *An error occurred: ${error}*`);
  }
};

handler.help = ["cninfo"];
handler.tags = ["information"];
handler.command = ["cninfo"];

export default handler;
