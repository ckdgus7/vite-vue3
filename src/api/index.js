import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
});
const request = (method, url, params) => {
  return instance({
    method,
    url,
    params,
  });
};
export const board = {
  FETCH_BOARD({ kword }) {
    return request("GET", `/posts`);
  },
  DETAIL_BOARD(payload) {
    return request("GET", `/posts`, payload);
  },
  INSERT_BOARD(payload) {
    payload.wr_content = encodeURIComponent(payload.wr_content);
    return request("POST", `/posts`, payload);
  },
  UPDATE_BOARD(payload) {
    payload.wr_content = encodeURIComponent(payload.wr_content);
    return request("PUT", `/posts`, payload);
  },
  DELETE_BOARD(payload) {
    return request("DELETE", `/posts`, payload);
  },
  UPDATE_POS_BOARD(payload) {
    return request("PUT", `/posts`, payload);
  },
};
export const shop = {
  FETCH_SHOPPING({ kword, ls, la }) {
    return request("GET", `/posts`, { kword });
  },
  DETAIL_SHOPPING({ it_id }) {
    return request("GET", `/posts`, { it_id });
  },
  FETCH_CART() {
    return new Promise((resolve) => {
      resolve(console.log("FETCH_CART"));
    });
  },
  INSERT_CART(payload) {
    return new Promise((resolve) => {
      resolve(console.log("INSERT_CART"));
    });
  },
  DELETE_CART({ ct_id }) {
    return new Promise((resolve) => {
      resolve(console.log("DELETE_ALL_CART"));
    });
  },
  DELETE_ALL_CART() {
    return new Promise((resolve) => {
      resolve(console.log("DELETE_ALL_CART"));
    });
  },
  FETCH_SHOP_HIT_ITEM() {
    return new Promise((resolve) => {
      resolve(console.log("FETCH_SHOP_HIT_ITEM"));
    });
  },
  FETCH_SHOP_PRICE_ITEM() {
    return new Promise((resolve) => {
      resolve(console.log("FETCH_SHOP_PRICE_ITEM"));
    });
  },
};
