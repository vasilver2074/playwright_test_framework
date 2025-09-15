import { test, expect } from "@playwright/test";
import postRequest from "../API/testData/postRequestBody.json";

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

  test("Create POST API request using JSON file in playwright", async ({
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
});
