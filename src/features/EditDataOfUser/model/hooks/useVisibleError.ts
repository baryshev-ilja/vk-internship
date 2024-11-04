import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

export const useVisibleError = () => {
    const [error, setErr] = useState<boolean>(false);

    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    useEffect(() => {
        if (error) {
            timerRef.current = setTimeout(() => {
                setErr(false);
            }, 900);
        }

        return () => clearTimeout(timerRef.current);
    }, [error]);

    const setError = useCallback((value: boolean) => {
        setErr(value);
    }, []);

    return {
        error,
        setError,
    };
};
