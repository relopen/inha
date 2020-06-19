import { createSlice } from "@reduxjs/toolkit";
import shoes from "../../services/shoes";

const slice = createSlice({
  name: "shoes",
  initialState: {
    loading: "ready",
    shoes: null,
    error: null,
  },
  reducers: {
    loading(state, action) {
      state.loading = "pending";
    },
    received(state, action) {
      state.loading = "ready";
      state.shoes = action.payload;
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
  },
});

const fetchShoes = (data, size) => async (dispatch) => {
  if (!data) {
    return;
  }

  try {
    dispatch(slice.actions.loading());

    const orderbooks = await shoes.getOrderbooks(data.id, size);
    const marketInfo = await shoes.getMarketInfo(data.id, size);

    // 신발 저장
    dispatch(
      slice.actions.received({
        model: data,
        size,
        orderbooks,
        marketInfo,
      })
    );

    // 신발 사이즈 별 데이터 저장
  } catch (e) {
    dispatch(slice.actions.error(e));
  }
};

const changeShoesSize = (size) => async (dispatch, getState) => {
  const state = getState();

  const data = state.shoes.shoes.model;

  if (!data) {
    return;
  }

  try {
    dispatch(slice.actions.loading());

    const orderbooks = await shoes.getOrderbooks(data.id, size);
    const marketInfo = await shoes.getMarketInfo(data.id, size);

    dispatch(
      slice.actions.received({
        model: data,
        size,
        orderbooks,
        marketInfo,
      })
    );
  } catch (e) {
    dispatch(slice.actions.error(e));
  }
};

export const actions = {
  received: slice.actions.received,
  clear: slice.actions.clear,
  fetchShoes,
  changeShoesSize,
};

export default {
  reducer: slice.reducer,
  actions,
};
