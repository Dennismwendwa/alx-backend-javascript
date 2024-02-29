const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
  if (success) {
    resolve({data: 'Successful response'});
  }
});

module.exports = getPaymentTokenFromAPI;
