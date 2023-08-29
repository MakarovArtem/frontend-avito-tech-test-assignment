import { Row, Col, Typography, Descriptions, Carousel, Image } from 'antd';
import BackButton from '../../components/BackButton';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from '../../redux/store';
import { fetchGameById } from '../../redux/gamesSlice/thunks';

const { Title } = Typography;

function GamePage() {

    const { id } = useParams<{ id: string }>();
    const game = useSelector(state => state.games.game);
    const dispatch = useDispatch();

    const info = [
        {
            key: 1,
            label: 'Title',
            children: game.title,
        },
        {
            key: 2,
            label: 'Developer',
            children: game.developer,
        },
        {
            key: 3,
            label: 'Publisher',
            children: game.publisher,
        },
        {
            key: 4,
            label: 'Release date',
            children: game.release_date,
        },
        {
            key: 5,
            label: 'Genre',
            children: game.genre,
        },
        {
            key: 6,
            label: 'Platform',
            children: game.platform,
        },
    ];

    const req = game?.minimum_system_requirements;

    const system = [
        {
            key: 1,
            label: 'OS',
            children: req.os,
        },
        {
            key: 2,
            label: 'Memory',
            children: req.memory,
        },
        {
            key: 3,
            label: 'Storage',
            children: req.storage,
        },
        {
            key: 4,
            label: 'Processor',
            children: req.processor,
        },
        {
            key: 5,
            label: 'Graphics',
            children: req.graphics,
        },
    ];

    useEffect(() => {
        dispatch(fetchGameById(id))
            .then(() => console.log('games fetched'))
            .catch(() => console.log('error happened'));
    }, []);

    return (
        <>
            <Row justify={'center'}>
                <Col>
                    <Title>{game.title}</Title>
                </Col>
            </Row>
            <Row justify={'center'}>
                <Col xl={12}>
                    <Descriptions
                        column={{ xs:2, sm: 2, xl:3, xxl:3 }}
                        title="Additional information"
                        items={game.info}
                    />
                </Col>
            </Row>
            <Row justify={'center'}>
                <Col xl={12}>
                    <Carousel autoplay>
                        {game?.screenshots?.map( screenshot =>
                            <Image
                                key={screenshot.id}
                                alt={game.title}
                                src={screenshot.image}
                            />
                        )}
                    </Carousel>
                </Col>
            </Row>
            <Row justify={'center'}>
                <Col xl={12}>
                    <Descriptions
                        column={{ xs:1, sm: 2, xl:2, xxl:2 }}
                        layout={'vertical'}
                        title="Minimum System Requirements"
                        items={game?.system}
                    />
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
