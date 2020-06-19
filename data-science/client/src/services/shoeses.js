import axios from "./axios";

class ShoesesService {
  async getShoeses() {
    const response = await axios.get("/shoeses");
    return response.data.map((data) => ({
      id: data.product_id,
      thumbnail: data.thumbnail_url,
      name: data.name_ko,
      description: data.memo,

      styleCode: data.style_code,
      color: data.color,
      originalPrice: data.original_price,

      keywords: data.keywords,
      currency: data.original_price_currency,
      minAskPrice: data.min_ask_price,
      formatMinAskPrice: data.formatted_min_ask_price,
      maxBidPrice: data.max_bid_price,
      formatMaxBidPrice: data.formatted_max_bid_price,
      marketTxExist: data.market_tx_exist === "Y",

      launchingDate: data.launching_date,

      gender: data.parent_product_option_value,
    }));
  }
}

export default new ShoesesService();
