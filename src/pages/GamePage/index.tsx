import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector, fetchGameById } from '../../store';
import { Button, Col, Divider, Row, Typography } from 'antd';
import { Spinner, GameInfo } from '../../components/';

const { Title } = Typography;


function GamePage() {

    const { id } = useParams<{ id: string }>();
    const game = useSelector( state =>
        state.games.gamesDetailed.find( game => game.id == id)
    );
    const loading = useSelector(state => state.games.loading);
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
                    {loading ? <Spinner /> : <GameInfo game={game} />}
                    <Button onClick={() => console.log(game)}/>
                </Col>
            </Row>
        </div>
    );
}

export default GamePage;
