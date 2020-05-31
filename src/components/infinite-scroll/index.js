import React, { useRef, useEffect } from "react";
import useIntersection from "./index-scroll-fn";

const InfiniteScroll = props => {
    const {
        children,
        onLoadData,
        threshold,
        loadingComponent,
        endOfComponent,
        isLoading,
        isReset,
        hasMore,
    } = props;
    const ref = useRef();
    const refLast = useRef();
    const [isIntersecting, setIntersecting] = useIntersection(
        ref,
        refLast,
        threshold,
    );

    useEffect(() => {
        if (isIntersecting && !isLoading && hasMore && !isReset) {
            onLoadData();
            setIntersecting(false);
        }
    });

    return (
        <div ref={ref}>
            {children}

            <div ref={refLast}>{isLoading ? loadingComponent : false}</div>
            {!hasMore && endOfComponent}
        </div>
    );
};

export default InfiniteScroll;
