// interfaces
interface MajorCredits {
  credits: number;
  brand: 'major';
}

interface MinorCredits {
  credits: number;
  brand: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major',
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor',
  };
}

const majorSubject1: MajorCredits = { credits: 3, brand: 'major' };
const majorSubject2: MajorCredits = { credits: 4, brand: 'major' };

const minorSubject1: MinorCredits = { credits: 2, brand: 'minor' };
const minorSubject2: MinorCredits = { credits: 1, brand: 'minor' };

const resultMajor = sumMajorCredits(majorSubject1, majorSubject2);
console.log('Sum of Major Credits:', resultMajor);

const resultMinor = sumMinorCredits(minorSubject1, minorSubject2);
console.log('Sum of Minor Credits:', resultMinor);
