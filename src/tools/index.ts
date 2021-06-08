import { User, UserDataTable } from "../types/index";

export const featuresStringify = (features: Array<number>): string => {
  return features.toString().replace(/,/g, " | ");
};

export const userListToUserTableData = (
  userList: Array<User>
): Array<UserDataTable> => {
  const result: Array<UserDataTable> = [];
  userList.map((item: User) => {
    result.push({
      name: item.name,
      age: item.age,
      dev: item.dev,
      company: item.company,
      years: item.years,
      features: featuresStringify(item.features),
    });
  });

  return result;
};
