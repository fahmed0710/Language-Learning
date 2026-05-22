import { promises as fs } from 'fs';
import { Conjunct } from '@/app/types';

export default async function LettersPage() {
  const file = await fs.readFile(process.cwd() + '/app/conjuncts.json', 'utf8');
  const conjuncts = JSON.parse(file);

  console.log(conjuncts);
  return (
    <div>
      Letters
      <table>
        <thead>
          <tr>
            <th>Letter 1</th>
            <th>Letter 2</th>
            <th>Conjunct</th>
          </tr>
        </thead>

        <tbody>
          {conjuncts.map((conjunct: Conjunct, index: any) => (
            <tr key={index}>
              <td>{conjunct.part1}</td>
              <td>{conjunct.part2}</td>
              <td>{conjunct.conjunct}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
