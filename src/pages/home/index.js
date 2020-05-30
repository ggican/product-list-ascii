import React, { useState, useEffect, useRef } from "react";

import Container from "../../components/container";
import Content from "../../components/content";
import InfiniteScroll from "../../components/infinite-scroll";
import ProductCard from "../../components/ProductCard";
import Grid from "../../components/Grid";

// begin service
import { useStore } from "../../reducers";
import service from "./index.service";
import StyleHome from "./index.style";
import Sort from "./index.sort";
// end service

const Home = () => {
    const { dispatch, state } = useStore();
    const [items, setItem] = useState([]);
    const [isFilter, setIsFilter] = useState("");
    const [isEndData, setEndData] = useState(true);
    const [params, setParams] = useState({
        _page: 1,
        _limit: 15,
        _sort: "id",
    });

    useEffect(() => {
        const onGetResponseData = () => {
            const productResult = state?.product?.list?.data;
            setEndData(!(items.length + productResult?.length === 500));
            setItem(prevState => [
                ...prevState,
                ...(isFilter.length > 0
                    ? productResult?.length > 0 &&
                      productResult?.map(item => {
                          return { ...item.pokemon };
                      })
                    : productResult),
            ]);
        };
        if (!mounted.current) {
            mounted.current = true;
        } else {
            setLoading(prevState => {
                if (prevState) {
                    onGetResponseData();
                    return false;
                }
            });
        }

        // eslint-disable-next-line
    }, [state]);

    const [isLoading, setLoading] = useState(false);
    const mounted = useRef();

    const getProductList = () => {
        service.productList({ dispatch, params: params });
        setParams({
            _page: 1 + params._page,
            _limit: 15,
        });
        setLoading(true);
    };

    const handleLoadData = () => {
        if (!isLoading && !isFilter) {
            setTimeout(() => {
                getProductList();
            }, 200);
        }
    };

    return (
        <StyleHome>
            <Container noPadding>
                <Sort></Sort>
                <Content>
                    <InfiniteScroll
                        threshold={20}
                        isLoading={isLoading}
                        onLoadData={handleLoadData}
                        hasMore={isEndData}
                        loadingComponent={
                            <ProductCard.Loading></ProductCard.Loading>
                        }
                        endOfComponent={
                            <div className="end-of-catalogue">
                                End of Catalogue
                            </div>
                        }
                    >
                        <Grid>
                            {items.map(({ id, face, price, size, date }) => {
                                return (
                                    <Grid.Col
                                        lg={12}
                                        sm={12}
                                        xs={12}
                                        md={12}
                                        key={id}
                                    >
                                        <ProductCard
                                            date={date}
                                            size={size}
                                            face={face}
                                            price={price}
                                        ></ProductCard>
                                    </Grid.Col>
                                );
                            })}
                        </Grid>
                    </InfiniteScroll>
                </Content>
            </Container>
        </StyleHome>
    );
};

export default Home;
