import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const [state, setState] = useState({
    data: [],
    isLoading: true,
    errorMessage: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint);
        setState({
          data: response.data,
          isLoading: false,
          errorMessage: null
        });
      } catch (error) {
        setState({
          data: [],
          isLoading: false,
          errorMessage: error
        });
      }
    };

    fetchData();
  }, [endpoint]);

  return state;
};

export default useFetch;