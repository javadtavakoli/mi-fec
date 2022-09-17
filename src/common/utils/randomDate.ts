import { RANDOM_START_DATE } from '../config/constants';

const Generate = (): string => {
  const start = new Date(RANDOM_START_DATE);
  const end = new Date();
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return `${randomDate.getFullYear()}-${randomDate.getMonth()}-${randomDate.getDate}`;
};
const RandomDate = { Generate };
export default RandomDate;
