function getResponsefromAPI() {
  return new Promise((resolve, reject) => {
    const responseData = {status: "success", data: "Sample data from API" };
    resolve(responseData);
  });
}

export default getResponsefromAPI;
