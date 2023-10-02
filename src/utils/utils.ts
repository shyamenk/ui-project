import { faker } from "@faker-js/faker";

const generateData = () => {
  const data = [];

  for (let i = 1; i <= 30; i++) {
    const fullName = faker.person.fullName();
    const location = faker.location.city() + ", " + faker.location.country();
    const education = `Bachelor - ${faker.company.catchPhraseAdjective()} University (${faker.number.bigInt(
      {
        min: 2000,
        max: 2023,
      }
    )} - ${faker.number.bigInt({ min: 2000, max: 2023 })})`;
    const hashtags = "#top_candidate";
    const tags = `${faker.location.city()}, ${faker.person.jobType()}, ${faker.person.jobTitle()}`;

    data.push({
      key: i,
      title: fullName,
      location,
      education,
      hashtags,
      tags,
    });
  }

  return data;
};

export const tableData = generateData();

export const getInitials = (title: string) => {
  const words = title.split(" ", 2);
  return words.map((word) => word[0]).join("");
};
