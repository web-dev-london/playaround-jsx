import { useEffect } from "react";

const useOutsideClickHook = (ref, callback) => {
    useEffect(() => {
        const handleClick = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            callback(event);
        }
        document.addEventListener('mousedown', handleClick);
        document.addEventListener('touchstart', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('touchstart', handleClick)
        }
    }, [ref, callback]);
}

export default useOutsideClickHook;