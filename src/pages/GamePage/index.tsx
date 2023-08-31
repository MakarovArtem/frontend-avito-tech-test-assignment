import { useParams } from 'react-router-dom';
import { Suspense, useCallback, useEffect } from 'react';
import { useDispatch, useSelector, fetchGameById, gamesActions } from '../../store';
import { Col, Divider, Row, Typography } from 'antd';
import { Spinner, GameInfo } from '../../components/';

const { Title } = Typography;

function GamePage() {

    const { id } = useParams<{ id: string }>();
    const game = useSelector(state => state.games.game);
    const loading = useSelector(state => state.games.loading);
    const dispatch = useDispatch();

    // const getGame = useCallback((id: string): void => {
    //     dispatch(gamesActions.setLoading(true));
    //     const timeNow = Date.now();
    //     const TIME_BEFORE_REQUEST = 5 * 60 * 1000;
    //     const dataStringified = sessionStorage.getItem(id);
    //     if(dataStringified !== null) {
    //         const { requestTime } = JSON.parse(dataStringified);
    //         const timeDifference = timeNow - requestTime;
    //         if(timeDifference > TIME_BEFORE_REQUEST) {
    //             dispatch(fetchGameById(id));
    //         } else {
    //             dispatch(gamesActions.extractGameFromSessionStorage(id));
    //         }
    //     } else {
    //         dispatch(fetchGameById(id));
    //     }
    // }, [dispatch]);

    useEffect(() => {
        // console.log('loading: ', loading )
        dispatch(fetchGameById(id));
    }, [id, dispatch]);

    return (
        <div style={{ padding: '18px' }}>
            <Row justify={'center'}>
                <Col>
                    <Title level={1}>
                        Game Page
                    </Title>
                </Col>
            </Row>
            <Divider />
            <Suspense fallback={<Spinner />}>
                <Row justify={'center'}>
                    <Col xs={12} sm={12} xl={12}>
                        {loading ? <Spinner /> : <GameInfo game={game} />}
                    </Col>
                </Row>
            </Suspense>
        </div>
    );
}

export default GamePage;
