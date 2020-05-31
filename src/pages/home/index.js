import React, { useState, useEffect, useRef } from "react";

import Container from "../../components/Container";
import Content from "../../components/Content";
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
    const [lastAds, setLastAds] = useState(true);
    const [params, setParams] = useState({
        _page: 0,
        _limit: 15,
        _sort: "id",
    });

    const onGetManipulationDataWithAds = arr => {
        let result = arr;

        const Ads = {
            face: `${process.env.REACT_APP_BASE_URL}ads/?r=${Math.floor(
                Math.random() * 1000,
            )}`,
            isAds: true,
        };
        const data = result.filter((item, key) => {
            return key !== 0 && key % 20 === 0;
        });
        if (data.length > 0) {
            let rowAds = data.slice(-1).pop();

            if (lastAds !== rowAds.id) {
                setLastAds(rowAds.id);
                let newResult = result.map(e => Object.assign({}, e));
                let insertAds = result.findIndex(({ id }) => id > rowAds.id);
                if (insertAds === -1) {
                    insertAds = newResult.length;
                }
                newResult.splice(insertAds, 0, Ads);
                newResult.forEach((e, i) => (e.asc_id = i + 1));
                result = newResult;
            }
        }
        return result;
    };

    useEffect(() => {
        const onGetResponseData = () => {
            let productResult = state?.product?.list?.data;
            let result = onGetManipulationDataWithAds([
                ...items,
                ...productResult,
            ]);
            setEndData(result.filter(item => !item.isAds).length === 500);
            setItem(result);

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
                            <Grid>
                                <Grid.Col lg={6} sm={6} xs={12} md={6}>
                                    <ProductCard.Loading></ProductCard.Loading>
                                </Grid.Col>
                                <Grid.Col lg={6} sm={6} xs={12} md={6}>
                                    <ProductCard.Loading></ProductCard.Loading>
                                </Grid.Col>
                            </Grid>
                        }
                        endOfComponent={
                            <div className="end-of-catalogue">
                                End of Catalogue
                            </div>
                        }
                    >
                        <Grid>
                            {items.map((item, key) => {
                                return (
                                    <Grid.Col
                                        lg={6}
                                        sm={6}
                                        xs={12}
                                        md={6}
                                        key={key}
                                    >
                                        <ProductCard {...item}></ProductCard>
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
