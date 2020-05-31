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
    const [isReset, setReset] = useState(false);
    const [isEndData, setEndData] = useState(true);
    const [params, setParams] = useState({
        _page: 0,
        _limit: 15,
        _sort: "id",
    });

    useEffect(() => {
        const onGetResponseData = () => {
            const productResult = state?.product?.list?.data;
            setEndData(!(items.length + productResult?.length === 500));
            setItem(prevState => [
                ...prevState,
                ...(isReset
                    ? productResult?.length > 0 &&
                      productResult?.map(item => {
                          return { ...item.pokemon };
                      })
                    : productResult),
            ]);
            setTimeout(() => {
                setReset(false);
            }, 200);
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

    const getProductList = params => {
        service.productList({ dispatch, params: params });
        params._page = 1 + params._page;
        setParams(params);
        setLoading(true);
    };

    const handleLoadData = () => {
        if (!isLoading && !isReset) {
            console.log("masuk sini");
            setTimeout(() => {
                getProductList(params);
            }, 200);
        }
    };

    const onGetValueSort = e => {
        params._sort = e.target.value;
        params._page = 0;
        setReset(true);
        getProductList(params);
        setItem([]);
    };

    return (
        <StyleHome>
            <Container noPadding>
                <Sort onGetValueSort={onGetValueSort}></Sort>
                <Content>
                    <InfiniteScroll
                        threshold={20}
                        isLoading={isLoading}
                        onLoadData={handleLoadData}
                        hasMore={isEndData}
                        isReset={isReset}
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
