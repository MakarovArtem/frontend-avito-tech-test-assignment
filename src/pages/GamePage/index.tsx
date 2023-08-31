import { useParams } from 'react-router-dom';
import { Suspense, useCallback, useEffect } from 'react';
import { useDispatch, useSelector, fetchGameById, gamesActions } from '../../store';
import { Col, Divider, Row, Typography } from 'antd';
import { Spinner, GameInfo } from '../../components/';

const { Title } = Typography;
const TIME_BEFORE_REFRESHING = 5 * 60 * 1000;

function GamePage() {

    const { id } = useParams<{ id: string }>();
    const game = useSelector(state => state.games.game);
    const loading = useSelector(state => state.games.loading);
    const dispatch = useDispatch();

    const refreshGame = useCallback((id: string) => {
        dispatch(fetchGameById(id));
        dispatch(gamesActions.addGameToSessionStorage(id));
    }, [dispatch]);

    const getGame = useCallback((id: string, lifetime: number): void => {
        const currentTime = Date.now();
        const data = sessionStorage.getItem(id);
        if(data === null) {
            refreshGame(id);
        } else {
            const { requestTime } = data;
            const timeInterval = currentTime - +requestTime;
            if(timeInterval > lifetime) {
                refreshGame(id);
            } else {
                dispatch(gamesActions.extractGameFromSessionStorage(id));
            }
        }
    }, [refreshGame, dispatch]);

    useEffect(() => {
        getGame(id, TIME_BEFORE_REFRESHING);
    }, [id, dispatch, getGame]);

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
            {/* <Suspense fallback={<Spinner />}> */}
                <Row justify={'center'}>
                    <Col xs={12} sm={12} xl={12}>
                        {/* <GameInfo game={game} /> */}
                        {loading ? <Spinner /> : <GameInfo game={game} />}
                    </Col>
                </Row>
            {/* </Suspense> */}
        </div>
    );
}

export default GamePage;
