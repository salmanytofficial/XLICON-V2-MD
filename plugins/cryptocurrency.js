import axios from "axios";

const cryptoApi = "https://api.coingecko.com/api/v3/coins";

let handler = async (message, {
  text,
  conn,
  usedPrefix,
  command
}) => {
  try {
    // Check if the cryptocurrency symbol or name is provided
    if (!text) {
      throw `❓ *Please provide the cryptocurrency symbol or name. Example: ${usedPrefix + command} bitcoin*`;
    }

    const cryptoSymbol = text.toLowerCase();
    
    // Fetch cryptocurrency data from the API
    const response = await axios.get(`${cryptoApi}/${cryptoSymbol}`);
    const cryptoData = response.data;

    // Prepare the cryptocurrency information message
    const cryptoInfo = `
      💰 *Cryptocurrency Information for ${cryptoData.name} (${cryptoData.symbol}):*
      *Current Price:* $${cryptoData.market_data.current_price.usd}
      *Market Cap:* $${cryptoData.market_data.market_cap.usd}
      *24h Change:* ${cryptoData.market_data.price_change_percentage_24h.toFixed(2)}%
    `;

    // Send the response
    conn.reply(message.chat, cryptoInfo, message);
  } catch (error) {
    console.error(error);
    message.reply(`⛔ *An error occurred: ${error}*`);
  }
};

handler.help = ["crypto"];
handler.tags = ["utility", "finance", "cryptocurrency"];
handler.command = ["crypto"];

export default handler;
