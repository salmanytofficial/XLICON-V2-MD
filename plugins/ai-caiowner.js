import fetch from 'node-fetch';
import fs from 'fs';

let nicknameCharIdDict = {};
const storageFilePath = 'cai_nicknames.json';

// Load existing data from the storage file
if (fs.existsSync(storageFilePath)) {
	try {
		const fileData = fs.readFileSync(storageFilePath, 'utf-8');
		nicknameCharIdDict = JSON.parse(fileData);
	} catch (error) {
		console.error('Error loading JSON file:', error);
	}
}

// Command handler
let handler = async (A, { text, usedPrefix, command }) => {
	if (typeof text !== 'string') {
		throw 'Invalid input. Expected a string.';
	}

	// Search command
	if (text.startsWith('search ')) {
		const query = text.slice(7);
		const url = `https://animecafe-characterai-indratensei.cloud.okteto.net/search?query=${encodeURIComponent(
			query,
		)}`;

		try {
			const response = await fetch(url);
			const data = await response.json();
			const results = data.search_results.characters.slice(0, 5);
			const formattedResults = results.map(character => ({
				external_id: character.external_id,
				participant_name: character.participant__name,
				title: character.title,
			}));
			A.reply(JSON.stringify(formattedResults, null, 2));
		} catch (error) {
			console.error('Error fetching data from the API:', error);
			throw 'Error fetching data from the API.';
		}
	}

	// New chat command
	else if (text.startsWith('new ')) {
		const nickname = text.slice(4);
		const charId = nicknameCharIdDict[nickname];

		if (charId) {
			const url = `https://animecafe-characterai-indratensei.cloud.okteto.net/cai-newchat?char=${charId}`;

			try {
				const response = await fetch(url);
				const chatData = await response.json();
				A.reply('Done bhosadike');
				A.reply(chatData);
			} catch (error) {
				console.error('Error fetching data from the API:', error);
				throw 'Error fetching data from the API.';
			}
		} else {
			A.reply(`No character found with the nickname "${nickname}"`);
		}
	}

	// Add nickname to character ID mapping
	else if (text.startsWith('add ')) {
		const [nickname, charId] = text.slice(4).split(':');
		nicknameCharIdDict[nickname] = charId;
		fs.writeFileSync(
			storageFilePath,
			JSON.stringify(nicknameCharIdDict, null, 2),
		);
		A.reply(`Added nickname "${nickname}" for charid "${charId}"`);
	}

	// Trending characters command
	else if (text === 'trending') {
		const url =
			'https://animecafe-characterai-indratensei.cloud.okteto.net/trending';

		try {
			const response = await fetch(url);
			const data = await response.json();
			const trendingCharacters =
				data.trending_characters.trending_characters.slice(0, 5);
			const formattedTrending = trendingCharacters.map(character => ({
				external_id: character.external_id,
				participant_name: character.participant__name,
				title: character.title,
			}));
			A.reply(JSON.stringify(formattedTrending, null, 2));
		} catch (error) {
			console.error(
				'Error fetching trending data from the API:',
				error,
			);
			throw 'Error fetching trending data from the API.';
		}
	}

	// List characters command
	else if (text === 'chars' || text === 'characters') {
		const availableCharacters = Object.keys(nicknameCharIdDict);

		if (availableCharacters.length === 0) {
			A.reply('No character nicknames are available.');
		} else {
			A.reply(
				'Characters Available:\n```➤ ' +
					availableCharacters.join('```\n➤  ```') +
					'```',
			);
		}
	}

	// Invalid command
	else {
		throw "Invalid '.cai' command.\n*Usage*:\n.cai search `<query>`,\n.cai new `<charnickname>`,\n.cai trending,\n.cai add `<nickname>:<charid>`.";
	}
};

// Handler properties
handler.command = ['cai'];
handler.diamond = false;
handler.tags = ['AI'];
handler.owner = true;

export default handler;
