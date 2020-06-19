import { combineReducers } from "@reduxjs/toolkit";

import shoeses from "./shoeses";
import shoes from "./shoes";
import news from "./news";

export const actions = {
  shoeses: shoeses.actions,
  shoes: shoes.actions,
  news: news.actions,
};

export const reducers = combineReducers({
  shoeses: shoeses.reducer,
  shoes: shoes.reducer,
  news: news.reducer,
});

export default {
  actions,
  reducers,
};
