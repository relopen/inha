import { createSlice } from "@reduxjs/toolkit";

import shoeses from "../../services/shoeses";

const slice = createSlice({
  name: "shoeses",
  initialState: {
    loading: "ready",
    filterText: "",
    shoeses: [],
    error: null,
  },
  reducers: {
    loading(state, action) {
      state.loading = "pending";
    },
    received(state, action) {
      state.loading = "ready";
      state.shoeses = action.payload;
      state.error = null;
    },
    error(state, action) {
      state.loading = "ready";
      state.error = action.payload;
    },
    clear(state, action) {
      state.loading = "ready";
      state.shoes = null;
      state.error = null;
    },

    setFilterText(state, action) {
      state.filterText = action.payload;
    },
  },
});

const fetchShoeses = () => async (dispatch) => {
  try {
    dispatch(slice.actions.loading());
    const response = await shoeses.getShoeses();

    // 신발별 최고 판매가
    // 신발별 최저 판매가
    // 신발별 거래대금 24시간
    // 신발별 거래량 24시간

    dispatch(slice.actions.received(response));
  } catch (e) {
    dispatch(slice.actions.error(e));
  }
};

const setFilterText = (filterText = "") => async (dispatch) => {
  dispatch(slice.actions.setFilterText(filterText));
};

export const actions = {
  received: slice.actions.received,
  clear: slice.actions.clear,
  fetchShoeses,
  setFilterText,
};

export default {
  reducer: slice.reducer,
  actions,
};
