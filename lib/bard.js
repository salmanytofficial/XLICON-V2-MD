'use strict';

import axios from 'axios';

class Bard {
  constructor() {}

  async question({ ask: questionText }) {
    if (!questionText) {
      throw new Error("Please specify a question!");
    }
    try {
      const response = await axios.post("https://vihangayt.me/tools/bard", {
        'ask': questionText
      }, {
        'headers': {
          'Content-Type': "application/json"
        }
      });
      return response.data;
    } catch (error) {
      throw new Error("Error: " + error.message);
    }
  }

  async questionWithImage({ ask: questionText, image: imageURL }) {
    if (!questionText) {
      throw new Error("Please specify a question!");
    }
    if (!imageURL) {
      throw new Error("Please specify a URL for the image!");
    }
    try {
      const response = await axios.post("https://bard.rizzy.eu.org/api/onstage/image", {
        'ask': questionText,
        'image': imageURL
      }, {
        'headers': {
          'Content-Type': "application/json"
        }
      });
      return response.data;
    } catch (error) {
      throw new Error("Error: " + error.message);
    }
  }
}

export default Bard;
