const apiKey = "0GUoZ0KerzA40u8qwz5aFdHxD2ZpWGnA";
let myHeaders = new Headers();
myHeaders.append("apikey", apiKey);

var requestOptions = {
  method: "GET",
  redirect: "follow" as any,
  headers: myHeaders,
};

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function getCurrency() {
  return fetch(
    "https://api.apilayer.com/exchangerates_data/latest?symbols=USD%2CRUB%2CEUR&base=AMD",
    requestOptions
  ).then((res) => res.json());
}
