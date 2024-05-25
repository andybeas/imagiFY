import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
     apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    // Log the response to check its structure
    console.log('AI Response:', aiResponse);

    if (aiResponse.data && aiResponse.data.length > 0) {
      const image = aiResponse.data[0].b64_json;
      res.status(200).json({ photo: image });
    } else {
      throw new Error('No image data received from OpenAI');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response?.data?.error?.message || 'Something went wrong');
  }
});

export default router;
