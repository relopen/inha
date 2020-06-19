import { createSlice } from "@reduxjs/toolkit";

import news from "../../services/news";

const slice = createSlice({
  name: "news",
  initialState: {
    loading: "ready",
    news: null,
    error: null,
  },
  reducers: {
    loading(state, action) {
      state.loading = "pending";
    },
    received(state, action) {
      state.loading = "ready";
      state.news = action.payload;
      state.error = null;
    },
    error(state, action) {
      state.loading = "ready";
      state.error = action.payload;
    },
    clear(state, action) {
      state.loading = "ready";
      state.news = null;
      state.error = null;
    },
  },
});

const fetchNews = () => async (dispatch) => {
  try {
    dispatch(slice.actions.loading());
    const response = await news.getNews();
    dispatch(slice.actions.received(response.data));
  } catch (e) {
    dispatch(slice.actions.error(e));
  }
};

export const actions = {
  received: slice.actions.received,
  clear: slice.actions.clear,
  fetchNews,
};

export default {
  reducer: slice.reducer,
  actions,
};
