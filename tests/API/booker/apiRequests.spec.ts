import { test, expect } from "@playwright/test";
import postRequest from "../booker/testData/postRequestBody.json";
import { DateTime } from "luxon";
import { faker } from "@faker-js/faker";
import { stringFormat } from "../booker/utils/common";
//import { dynamicPostRequest } from "../API/testData/dynamicRequestBody.json";
let dynamicPostRequest = require("../booker/testData/dynamicRequestBody.json");

test.describe("API Requests", () => {
  test("Create POST API request using static request body", async ({
    request,
  }) => {
    const postAPIResponse = await request.post("/booking", {
      data: {
        firstname: "testers talk playwright",
        lastname: "testers talk api testing",
        totalprice: 1000,
        depositpaid: true,
        bookingdates: {
          checkin: "2018-01-01",
          checkout: "2019-01-01",
        },
        additionalneeds: "super bowls",
      },
    });

    console.log(await postAPIResponse.json());

    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.status()).toBe(200);

    // validate api response json obj
    const postAPIResponseBody = await postAPIResponse.json();

    expect(postAPIResponseBody.booking).toHaveProperty(
      "firstname",
      "testers talk playwright"
    );
    expect(postAPIResponseBody.booking).toHaveProperty(
      "lastname",
      "testers talk api testing"
    );

    // validate api response nested json obj
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty(
      "checkin",
      "2018-01-01"
    );
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty(
      "checkout",
      "2019-01-01"
    );
  });

  test("Create POST API request using static JSON file in playwright", async ({
    request,
  }) => {
    // create post api request using playwright
    const postAPIResponse = await request.post("/booking", {
      data: postRequest,
    });

    // validate status code
    console.log(await postAPIResponse.json());

    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.status()).toBe(200);

    // validate api response json obj
    const postAPIResponseBody = await postAPIResponse.json();

    expect(postAPIResponseBody.booking).toHaveProperty(
      "firstname",
      "testers talk playwright"
    );
    expect(postAPIResponseBody.booking).toHaveProperty(
      "lastname",
      "testers talk api testing"
    );

    // validate api response nested json obj
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty(
      "checkin",
      "2018-01-01"
    );
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty(
      "checkout",
      "2019-01-01"
    );
  });

  test("Create POST API request using dynamic request body in playwright", async ({
    request,
  }) => {
    // create test data
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int(1000);

    const checkInDate = DateTime.now().toFormat("yyyy-MM-dd");
    const checkOutDate = DateTime.now().plus({ day: 5 }).toFormat("yyyy-MM-dd");

    // create post api request using playwright
    const postAPIResponse = await request.post("/booking", {
      data: {
        firstname: firstName,
        lastname: lastName,
        totalprice: totalPrice,
        depositpaid: true,
        bookingdates: {
          checkin: checkInDate,
          checkout: checkOutDate,
        },
        additionalneeds: "super bowls",
      },
    });

    // validate status code
    console.log(await postAPIResponse.json());

    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.status()).toBe(200);

    // validate api response json obj
    const postAPIResponseBody = await postAPIResponse.json();

    expect(postAPIResponseBody.booking).toHaveProperty("firstname", firstName);
    expect(postAPIResponseBody.booking).toHaveProperty("lastname", lastName);

    // validate api response nested json obj
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty(
      "checkin",
      checkInDate
    );
    expect(postAPIResponseBody.booking.bookingdates).toHaveProperty(
      "checkout",
      checkOutDate
    );
  });

  test("Create Post API request using dynamic JSON file in playwright", async ({
    request,
  }) => {
    // create test data
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const totalPrice = faker.number.int(1000);
    const checkInDate = DateTime.now().toFormat("yyyy-MM-dd");
    const checkOutDate = DateTime.now().plus({ day: 5 }).toFormat("yyyy-MM-dd");

    let updatedRequestBody = stringFormat(
      JSON.stringify(dynamicPostRequest),
      firstName,
      lastName,
      "apple"
    );

    // create post api request using playwright
    const postAPIResponse = await request.post("/booking", {
      data: JSON.parse(updatedRequestBody),
    });

    // validate status code
    console.log(await postAPIResponse.json());

    expect(postAPIResponse.ok()).toBeTruthy();
    expect(postAPIResponse.status()).toBe(200);

    // validate api response json obj
    const postAPIResponseBody = await postAPIResponse.json();

    expect(postAPIResponseBody.booking).toHaveProperty("firstname", firstName);
    expect(postAPIResponseBody.booking).toHaveProperty("lastname", lastName);
  });

  test("Create GET API request in playwright", async ({ request }) => {
    // create GET api request using playwright
    const getAPIResponse = await request.get("/booking/1", {});

    // validate status code
    //console.log(await getAPIResponse.json());
    expect(getAPIResponse.ok()).toBeTruthy();
    expect(getAPIResponse.status()).toBe(200);
  });
});
