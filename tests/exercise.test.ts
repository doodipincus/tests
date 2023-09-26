import { describe, expect, test } from "vitest";
import {
  lenStr,
  palindrome,
  sortAscending,
  sqrt,
  sumArr,
  fetchUserData,
  fibonacci,
} from "./exercise";

test("Returns the length of the string", () => {
  expect(lenStr("dudi")).toBe(4);
});

test("Palindrome checker", () => {
  expect(palindrome("whw")).toBe(true);
});

test("Array arrangement", () => {
  expect(sortAscending([3, 2, 1])).toStrictEqual([1, 2, 3]);
});

describe("Square root", () => {
  test("Returns the root of the number", () => {
    expect(sqrt(16)).toBe(4);
  });

  test("Returning an error with a negative number", () => {
    expect(() => sqrt(-16)).toThrow();
  });
});

describe("Sum arr", () => {
  const arr = [1, 2, 3, 4, 5];

  test("Summarize the array", () => {
    expect(sumArr(arr)).toBe(15);
  });

  test("Is greater than a certain number", () => {
    const result = sumArr(arr);
    expect(result).toBeGreaterThan(9);
  });
});

describe("fetch User", () => {
  test("should return user with the correct ID", async () => {
    const expectedUserId = 1;
    const user = await fetchUserData(expectedUserId);

    expect(user.id).toBe(expectedUserId);
    expect(user).toStrictEqual({
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    });
  });

  test("Error if there is no such id", async () => {
    try {
      await fetchUserData(90);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});

describe("fibonacci", () => {
  test("Member of the Fibonacci series", () => {
    expect(fibonacci([1, 2, 3, 5, 8])).toBe(13);
  });

  test("Error if not Fibonacci", () => {
    expect(() => fibonacci([1, 2, 3, 6, 8])).toThrow();
  });
});
