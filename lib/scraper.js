import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';

async function sekaikomikDl(url) {
  let response = await fetch(url);
  let $ = cheerio.load(await response.text());
  let scripts = $("script").map((i, el) => $(el).html()).toArray();
  scripts = scripts.filter(script => /wp-content/i.test(script));
  let images = eval(scripts[0].split("\"images\":")[1].split('}],')[0]);
  return images.map(image => encodeURI(image));
}

async function facebookDl(url) {
  let response = await fetch('https://fdownloader.net/');
  let $ = cheerio.load(await response.text());
  let token = $("input[name=\"__RequestVerificationToken\"]").attr("value");
  let result = await fetch("https://fdownloader.net/api/ajaxSearch", {
    method: "post",
    headers: {
      cookie: response.headers.get("set-cookie"),
      'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
      referer: "https://fdownloader.net/"
    },
    body: new URLSearchParams({ '__RequestVerificationToken': token, 'q': url })
  });
  let json = await result.json();
  let $$ = cheerio.load(json.data);
  let downloads = {};
  $$('.button.is-success.is-small.download-link-fb').each(function () {
    let quality = $(this).attr("title").split(" ")[1];
    let link = $(this).attr("href");
    if (link) {
      downloads[quality] = link;
    }
  });
  return downloads;
}

async function tiktokStalk(username) {
  let response = await axios.get('https://urlebird.com/user/' + username + '/');
  let $ = cheerio.load(response.data);
  let profile = {
    pp_user: $("div[class=\"col-md-auto justify-content-center text-center\"] > img").attr("src"),
    name: $("h1.user").text().trim(),
    username: $("div.content > h5").text().trim(),
    followers: $("div[class=\"col-7 col-md-auto text-truncate\"]").text().trim().split(" ")[1],
    following: $("div[class=\"col-auto d-none d-sm-block text-truncate\"]").text().trim().split(" ")[1],
    description: $("div.content > p").text().trim()
  };
  return profile;
}

async function igStalk(username) {
  username = username.replace(/^@/, '');
  const response = await fetch('https://dumpor.com/v/' + username);
  const $ = cheerio.load(await response.text());
  const profile = {
    name: $("div.user__title > a > h1").text().trim(),
    username: $("div.user__title > h4").text().trim(),
    description: $("div.user__info-desc").text().trim(),
    postsH: $("#user-page > div.container > div > div > div:nth-child(1) > div > a").eq(0).text().replace(/Posts/i, '').trim(),
    followersH: $("#user-page > div.container > div > div > div:nth-child(1) > div > a").eq(2).text().replace(/Followers/i, '').trim(),
    followingH: $("#user-page > div.container > div > div > div:nth-child(1) > div > a").eq(3).text().replace(/Following/i, '').trim(),
    posts: parseInt($("ul.list > li.list__item").eq(0).text().replace(/Posts/i, '').trim().replace(/\s/g, '')),
    followers: parseInt($("ul.list > li.list__item").eq(1).text().replace(/Followers/i, '').trim().replace(/\s/g, '')),
    following: parseInt($("ul.list > li.list__item").eq(2).text().replace(/Following/i, '').trim().replace(/\s/g, '')),
    profilePic: $("div.user__img").attr("style")?.replace("background-image: url('", '').replace("');", '')
  };
  return profile;
}

async function xnxxdl(url) {
  try {
    const response = await fetch(url);
    const text = await response.text();
    const $ = cheerio.load(text);
    const script = $("#video-player-bg > script:nth-child(6)").html();
    const videoUrls = {
      low: (script.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[1],
      high: script.match("html5player.setVideoUrlHigh\\('(.*?)'\\);" || [])[1],
      HLS: script.match("html5player.setVideoHLS\\('(.*?)'\\);" || [])[1]
    };
    return videoUrls;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function xnxxSearch(query) {
  const response = await fetch(`https://www.xnxx.com/search/${query}/${Math.floor(Math.random() * 3) + 1}`);
  const text = await response.text();
  const $ = cheerio.load(text, { xmlMode: false });
  let results = [];
  $("div.mozaique").each((i, el) => {
    const links = $(el).find("div.thumb a").map((i, el) => 'https://www.xnxx.com' + $(el).attr("href").replace("/THUMBNUM/", '/')).get();
    const titles = $(el).find("div.thumb-under a").map((i, el) => $(el).attr("title")).get();
    for (let i = 0; i < links.length; i++) {
      results.push({ title: titles[i], link: links[i] });
    }
  });
  return results;
}

async function ChatGpt(prompt, systemMessage) {
  const response = await fetch("https://chatapicn.a3r.fun/api/chat-process", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Referer': "https://2chat.c3r.ink/",
      'accept': "application/json, text/plain, */*"
    },
    body: JSON.stringify({
      prompt,
      options: {},
      regenerate: false,
      roomId: 1002,
      uuid: Date.now(),
      systemMessage,
      top_p: 1,
      temperature: 0.8
    })
  });
  const text = await response.text();
  let result = JSON.parse(text.split("\n").pop());
  return result;
}

async function xvideosSearch(query) {
  return new Promise(async resolve => {
    const response = await axios.get(`https://www.xvideos.com/?k=${query}&p=${Math.floor(Math.random() * 9) + 1}`);
    const $ = cheerio.load(response.data, { xmlMode: false });
    let results = [];
    $("div.mozaique > div > div.thumb-under > p.title").each(function (i, el) {
      const title = $(el).find('a').attr("title");
      const duration = $(el).find('span.duration').text();
      const url = 'https://www.xvideos.com' + $(el).find('a').attr('href');
      const quality = $(this).find("span.video-hd-mark").text();
      const thumb = $(this).find('img').attr("data-src");
      results.push({ title, duration, quality, thumb, url });
    });
    resolve(results);
  });
}

async function xvideosdl(url) {
  return new Promise(async resolve => {
    const response = await fetch(url);
    const text = await response.text();
    const $ = cheerio.load(text, { xmlMode: false });
    const result = {
      status: 200,
      result: {
        title: $("meta[property='og:title']").attr("content"),
        url: $("meta[property='og:url']").attr("content"),
        keyword: $("meta[name='keywords']").attr("content"),
        views: $("div#video-tabs > div > div > div > div > strong.mobile-hide").text() + " views",
        vote: $("div.rate-infos > span.rating-total-txt").text(),
        likes: $('span.rating-good-nbr').text(),
        dislikes: $("span.rating-bad-nbr").text(),
        thumb: $("meta[property='og:image']").attr("content")
      }
    };
    resolve(result);
  });
}

export { sekaikomikDl, facebookDl, tiktokStalk, igStalk, xnxxdl, xnxxSearch, ChatGpt, xvideosSearch, xvideosdl };
