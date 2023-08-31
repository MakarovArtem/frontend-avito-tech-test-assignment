import { Typography, Divider, Space, Row, Col } from 'antd';
import { useEffect } from 'react';
import { GamesList, Spinner, TransformList } from '../../components';
import { useDispatch, useSelector, fetchGames, getGames, getParams, getLoading } from '../../store';

const { Title } = Typography;

function MainPage() {

    const dispatch = useDispatch();
    const games = useSelector(state => state.games.games);
    const params = useSelector(state => state.games.params);
    const loading = useSelector(state => state.games.loading);

    useEffect(() => {
        dispatch(fetchGames(''));
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

    const sortOptions = [
        { value: 'notChosen', label: 'not chosen' },
        { value: 'release-date', label: 'Release date' },
        { value: 'popularity', label: 'Popularity' },
        { value: 'alphabetical', label: 'Alphabetical' },
        { value: 'relevance', label: 'Relevance' },
    ];

    return (
        <div style={{ padding: '18px' }}>
            <Row justify={'center'}>
                <Col>
                    <Title level={1}>
                        Main Page
                    </Title>
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
                        options={sortOptions}
                    />
                </Space>
            </Row>
            <Divider>Games List Below</Divider>
            {loading ? <Spinner /> : <GamesList games={games}/>}
        </div>
    );
}

export default MainPage;
