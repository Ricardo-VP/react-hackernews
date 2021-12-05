import axios from "axios";
import { REACT_POSTS, ANGULAR_POSTS, VUE_POSTS } from "../utils/config";

export const getReactNews = async (page: number) => {
  return await axios
    .get(REACT_POSTS + page)
    .then(async (res) => {
      return await res.data;
    })
    .catch(async (err) => {
      return await err;
    });
};

export const getAngularNews = async (page: number) => {
  return await axios
    .get(ANGULAR_POSTS + page)
    .then(async (res) => {
      return await res.data;
    })
    .catch(async (err) => {
      return await err;
    });
};

export const getVueNews = async (page: number) => {
  return await axios
    .get(VUE_POSTS + page)
    .then(async (res) => {
      return await res.data;
    })
    .catch(async (err) => {
      return await err;
    });
}