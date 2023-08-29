import { Typography, Select, Divider, Space, Row, Col } from 'antd';
import Link from 'antd/es/typography/Link';
import { Suspense, lazy, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import { useDispatch, useSelector } from '../../redux/store';
import { fetchGames } from '../../redux/gamesSlice/thunks';

const { Title, Paragraph } = Typography;

const GamesListLazy = lazy(() => import('../../components/GamesList'));

function MainPage() {

    const dispatch = useDispatch();
    const games = useSelector(state => state.games.games);
    const params = useSelector(state => state.games.params);

    useEffect(() => {
        dispatch(fetchGames(null))
            .then(() => console.log('games fetched'))
            .catch(() => console.log('error happened'));
    }, [params, dispatch]);

    return (
        <div>
            <Row justify={'center'}>
                <Col>
                    <Title level={2}>
                        MainPage
                    </Title>
                    <Link href="https://t.me/EineApfelsine" target="_blank">
                        Telegram
                    </Link>
                </Col>
            </Row>
            <Divider />
            <Row justify={'center'}>
                <Space align='center'>
                    <Paragraph>Filter by genre</Paragraph>
                    <Select
                        defaultValue='notChosen'
                        style={{ width: 240 }}
                        onChange={(value) => console.log(value)}
                        options={[
                            { value: 'notChosen', label: 'not chosen' },
                            { value: 'shooter', label: 'Shooter' },
                            { value: 'horror', label: 'Horror' },
                            { value: 'rpg', label: 'RPG', },
                        ]}
                    />
                    <Paragraph>Filter by platform</Paragraph>
                    <Select
                        defaultValue='notChosen'
                        style={{ width: 240 }}
                        onChange={(value) => console.log(value)}
                        options={[
                            { value: 'notChosen', label: 'not chosen' },
                            { value: 'web', label: 'WEB' },
                            { value: 'pc', label: 'PC' },
                            { value: 'mobile', label: 'Mobile', },
                        ]}
                    />
                    <Paragraph>Sort by</Paragraph>
                    <Select
                        defaultValue='notChosen'
                        style={{ width: 240 }}
                        onChange={(value) => console.log(value)}
                        options={[
                            { value: 'notChosen', label: 'not chosen' },
                            { value: 'rating', label: 'Rating' },
                            { value: 'date', label: 'Release date' },
                            { value: 'free', label: 'Free or not', },
                        ]}
                    />
                </Space>
            </Row>
            <Divider>Games List Below</Divider>
            <Suspense fallback={<Spinner />}>
                <GamesListLazy games={games}/>
            </Suspense>
        </div>
    );
}

export default MainPage;
