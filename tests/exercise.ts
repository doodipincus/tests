import { User } from "./interface";

// שאלה 1
export const lenStr = (str: string): number => {
  return str.length;
};

// שאלה 2
export const palindrome = (str: string): boolean => {
  let flag: boolean = true;
  for (let i = 0; i < Math.round(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) flag = false;
  }
  return flag;
};

// שאלה 3
export function sortAscending(arr:number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // עריכת החלפת הערכים
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr
}

// שאלה 4
export const sqrt = (num: number): number => {
  if (num < 0) throw Error;
  return Math.sqrt(num);
};

// שאלה 5
export const sumArr = (arr: number[]): number => {
  let sum: number = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

// שאלה 6
export const fetchUserData = async (id: number): Promise<User> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const user: User = await response.json();
    return user;
  } catch (error) {
    throw error;
  }
};

// שאלה 7
export const fibonacci = (arr: number[]): number => {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] + arr[i + 1] !== arr[i + 2]) throw Error;
  }
  return arr[arr.length - 1] + arr[arr.length - 2];
};
