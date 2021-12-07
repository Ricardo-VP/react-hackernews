import axios from "axios";
import HitModel from "../components/Hits/HitModel";
import { REACT_POSTS, ANGULAR_POSTS, VUE_POSTS } from "../utils/config";

export const getNews = async (topic: string, page: number) => {
  switch (topic) {
    case "1":
      return await axios
        .get(ANGULAR_POSTS + page)
        .then(async (res) => {
          const validatedHits = res.data.hits.filter(
            (hit: HitModel) =>
              hit.author !== null &&
              hit.created_at !== null &&
              hit.story_title !== null &&
              hit.story_url !== null
          );
          return await validatedHits;
        })
        .catch(async (err) => {
          return await err;
        });
    case "2":
      return await axios
        .get(REACT_POSTS + page)
        .then(async (res) => {
          const validatedHits = res.data.hits.filter(
            (hit: HitModel) =>
              hit.author !== null &&
              hit.created_at !== null &&
              hit.story_title !== null &&
              hit.story_url !== null
          );
          return await validatedHits;
        })
        .catch(async (err) => {
          return await err;
        });
    case "3":
      return await axios
        .get(VUE_POSTS + page)
        .then(async (res) => {
          const validatedHits = res.data.hits.filter(
            (hit: HitModel) =>
              hit.author !== null &&
              hit.created_at !== null &&
              hit.story_title !== null &&
              hit.story_url !== null
          );
          return await validatedHits;
        })
        .catch(async (err) => {
          return await err;
        });
  }
};