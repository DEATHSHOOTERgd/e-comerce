import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

export interface AxiosCall<T> {
    call: Promise<AxiosResponse<T>>;
    controller?: AbortController;
}

const usePerformRequest = () => {
  const [loading, setLoading] = useState(false);
  let controller: AbortController;

  const callEndpoint = async (axiosCall: AxiosCall<any>) => {
    if (axiosCall.controller) controller = axiosCall.controller;
    setLoading(true);
    let result = {} as AxiosResponse<any>;
    try {
      result = await axiosCall.call;
    } catch (err: any) {
      setLoading(false);
      throw err;
    }
    setLoading(false);
    return result.data;
  };

  const cancelEndpoint = () => {
    setLoading(false);
    controller && controller.abort();
  };

  useEffect(() => {
    return () => {
      cancelEndpoint();
    };
  }, []);

  return { loading, callEndpoint };
};

export default usePerformRequest;