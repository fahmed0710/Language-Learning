'use client';

import { useEffect, useState } from 'react';
import { getQuestion } from '@/app/actions/learning';
import { Conjunct } from '@/app/types';

export default async function LearnPage() {
  const [question, setQuestion] = useState<Conjunct>({
    part1: '',
    part2: '',
    conjunct: ''
  });

  useEffect(() => {
    async function getQuizQuestion() {
      const response = await getQuestion();

      // if (response.success) {
      //   setQuestion(response.correctOption);
      // }
      return response;
    }

    console.log(getQuizQuestion());
  }, []);

  return (
    <div>
      <h1>Which conjunct is formed by these 2 consonants?</h1>
      <h1></h1>
    </div>
  );
}
