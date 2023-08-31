import { useParams } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector, fetchGameById } from '../../store';
import { Col, Divider, Row, Typography } from 'antd';
import { Spinner, GameInfo } from '../../components/';

const { Title } = Typography;

const GameInfoLazy = lazy(() => import('../../components/GameInfo'))

function GamePage() {

    const { id } = useParams<{ id: string }>();
    const game = useSelector( state =>
        state.games.gamesDetailed.find( game => game.id === id)
    );
    const dispatch = useDispatch();

    useEffect(() => {
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
            <Row justify={'center'}>
                <Col xs={12} sm={12} xl={12}>
                    <Suspense fallback={<Spinner />}>
                        <GameInfoLazy game={game} />
                    </Suspense>
                    {/* {loading ? <Spinner /> : <GameInfo game={game} />} */}
                </Col>
            </Row>
        </div>
    );
}

export default GamePage;
