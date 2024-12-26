import axios from "axios";

const currencyApi = "https://api.exchangerate-api.com/v4/latest/USD";

let handler = async (message, {
  text,
  conn,
  usedPrefix,
  command
}) => {
  try {
    // Regular expression to match the command format
    const currencyRegex = /^(\d+(\.\d+)?)\s+(\w{3})\s*:\s*(\w{3})$/;
    const match = text.match(currencyRegex);

    if (!match) {
      throw `❓ *Invalid command format. Example: ${usedPrefix + command} 25 USD:LKR*`;
    }

    // Extract values from the match
    const amount = parseFloat(match[1]);
    const fromCurrency = match[3].toUpperCase();
    const toCurrency = match[4].toUpperCase();

    if (isNaN(amount) || amount <= 0) {
      throw "⚠️ *Invalid amount. Please provide a valid positive number.*";
    }

    // Fetch currency exchange rates
    const response = await axios.get(currencyApi);
    const rates = response.data.rates;

    // Check if the currencies are valid
    if (!(fromCurrency in rates) || !(toCurrency in rates)) {
      throw "⚠️ *Invalid currency codes. Please check and try again.*";
    }

    // Calculate the converted amount
    const convertedAmount = amount * (rates[toCurrency] / rates[fromCurrency]);

    // Prepare and send the conversion result
    const result = `💰 *Currency Conversion:*\n${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    conn.reply(message.chat, result, message);
  } catch (error) {
    console.error(error);
    message.reply(`⛔ *An error occurred: ${error}*`);
  }
};

handler.help = ["currency"];
handler.tags = ["utility"];
handler.command = ["currency"];

export default handler;
