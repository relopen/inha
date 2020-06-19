import axios from "./axios";

class ShoesService {
  async getMarketInfo(productId = "", size = 270) {
    const response = await axios.get(`/shoeses/${productId}/market-tx`, {
      params: { size },
    });

    const data = response.data;

    const all = [...data.domestic, ...data.pzn, ...data.stx].sort(
      (a, b) => a.price - b.price
    );

    // 저가
    const min = all[0];
    // 고가
    const max = all[all.length - 1 || 0];

    // 거래량
    const volume = all.length;
    // 거래대금
    const transaction = all.reduce((acc, d) => {
      acc += d.price;
      return acc;
    }, 0);

    const desc = all.sort(
      (a, b) => new Date(b.tx_data).getTime() - new Date(a.tx_data).getTime()
    );

    return {
      ...data,
      minPrice: min?.price || 0,
      maxPrice: max?.price || 0,
      volume,
      transaction,
      currentPrice: desc[0]?.price,
    };
  }

  async getOrderbooks(productId = "", size = 270) {
    const response = await axios.get(`/shoeses/${productId}/orderbooks`, {
      params: { size },
    });

    const data = response.data;

    return {
      ...data,
    };
  }
}

export default new ShoesService();
