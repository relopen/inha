import axios from "./axios";

class NewsService {
  async getNews() {
    const response = await axios.get("/news");
    return response;
  }
}

export default new NewsService();
