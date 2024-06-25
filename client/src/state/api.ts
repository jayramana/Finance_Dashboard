import axios from "axios";

export function api() {
  const fetch = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/finance`);
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  return { fetch };
}

const { fetch } = api();
export default fetch;
