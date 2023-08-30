import { Typography, Divider, Space, Row, Col } from 'antd';
import Link from 'antd/es/typography/Link';
import { Suspense, lazy, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import { useDispatch, useSelector } from '../../redux/store';
import { fetchGames } from '../../redux/gamesSlice/thunks';
import TransformList from '../../components/Select';

const { Title } = Typography;

const GamesListLazy = lazy(() => import('../../components/GamesList'));

function MainPage() {

    const dispatch = useDispatch();
    const games = useSelector(state => state.games.games);
    const params = useSelector(state => state.games.params);

    useEffect(() => {
        dispatch(fetchGames(''))
            .then(() => console.log('games fetched'))
            .catch(() => console.log('error happened'));
    }, [params, dispatch]);

    const platrofrmOptions = [
        { value: 'notChosen', label: 'not chosen' },
        { value: 'browser', label: 'Browser' },
        { value: 'pc', label: 'PC' },
    ];

    const categoryOptions = [
        { value: 'notChosen', label: 'not chosen' },
        { value: 'mmorpg', label: 'mmorpg' },
        { value: 'shooter', label: 'shooter' },
        { value: 'strategy', label: 'strategy' },
        { value: 'moba', label: 'moba' },
        { value: 'racing', label: 'racing' },
        { value: 'sports', label: 'sports' },
        { value: 'social', label: 'social' },
    ];

    const sortyOptions = [
        { value: 'notChosen', label: 'not chosen' },
        { value: 'release-date', label: 'Release date' },
        { value: 'popularity', label: 'Popularity' },
        { value: 'alphabetical', label: 'Alphabetical' },
        { value: 'relevance', label: 'Relevance' },
    ];

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
                    <TransformList
                        type={'filter'}
                        filterBy={'platform'}
                        options={platrofrmOptions}
                        defaultOption={'browser'}
                    />
                    <TransformList
                        type={'filter'}
                        filterBy={'category'}
                        options={categoryOptions}
                    />
                    <TransformList
                        type='sort'
                        options={sortyOptions}
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
