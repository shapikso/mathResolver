import {useState} from "react";

const useLoading = () => {
    const [isLoading, setIsLoading] = useState(false);
    const loadingWhileReq = <T>(promise: Promise<T>) => {
        setIsLoading(true);
        return promise.finally(() => setIsLoading(false));
    };
    return {isLoading, loadingWhileReq};
};

export default useLoading;