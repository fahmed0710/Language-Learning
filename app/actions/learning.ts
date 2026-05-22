'use server';

import { promises as fs } from 'fs';

import { Conjunct } from '../types';

function randomIndex(index: any) {
  return Math.floor(Math.random() * index);
}

export async function getQuestion() {
  try {
    const file = await fs.readFile(
      process.cwd() + '/app/conjuncts.json',
      'utf8'
    );

    const conjuncts = JSON.parse(file);

    const options: Conjunct[] = [];

    while (options.length < 4) {
      let option = conjuncts[randomIndex(conjuncts.length)];
      if (!options.includes(option)) {
        options.push(option);
      }
    }

    const correctOption = options[randomIndex(options.length)];

    return {
      success: true,
      message: 'Fetched conjuncts for question',
      options: options,
      correctOption: correctOption
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to fetch conjuncts for questions'
    };
  }
}
