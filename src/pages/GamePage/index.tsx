import { useParams } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from '../../redux/store';
import { fetchGameById } from '../../redux/gamesSlice/thunks';
import { Col, Row } from 'antd';
import BackButton from '../../components/BackButton';
import Spinner from '../../components/Spinner';

const GameInfoLazy = lazy(() => import('../../components/GameInfo'));

function GamePage() {

    const { id } = useParams<{ id: string }>();
    const game = useSelector(state => state.games.game);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGameById(id))
            .then(() => console.log('games fetched'))
            .catch(() => console.log('error happened'));
    }, [id, dispatch]);

    return (
        <>
            <Row justify={'center'}>
                <Col xs={12} sm={12} xl={12}>
                    <Suspense fallback={<Spinner />}>
                        <GameInfoLazy game={game} />
                    </Suspense>
                </Col>
            </Row>
            <Row justify={'center'}>
                <Col xs={12} sm={12} xl={12}>
                    <BackButton />
                </Col>
            </Row>
        </>
    );
}

export default GamePage;
