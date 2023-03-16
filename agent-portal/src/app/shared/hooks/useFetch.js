import { useState, useEffect } from "react";
import { fetch } from "../../../utils/httpUtil";

const useFetch = (fetchUrl) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [payload, setPayload] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        let res = await fetch(`${fetchUrl}`);
        if (res?.data?.message === "SUCCESS" || res?.data?.msg === "success") {
          setSuccess(true);
          setPayload(res?.data?.data);
          setLoading(false);
        } else {
          setSuccess(false);
          setLoading(false);
          setError({});
          // setPayload();
        }
      } catch (error) {
        setSuccess(false);
        setLoading(false);
        setError(error);
      }
    };
    fetchApi();
  }, []);

  return { payload, loading, success, error };
};

export default useFetch;
