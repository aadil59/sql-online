// API CALL TO RETREIVE CUSTOMER DATA
export const handleGetCustomer = (param) => {
  return fetch(param).then((res) => res.json()).then((res) => res);
}