import { useEffect } from 'react';
import { useDispatch, useSelector, fetchGames } from '../../store';
import { GamesList, Spinner, TransformList } from '../../components';
import { Typography, Divider, Row, Col } from 'antd';
import style from './style.module.css';

const { Title } = Typography;

export function MainPage() {

    const dispatch = useDispatch();
    const games = useSelector(state => state.games.games);
    const params = useSelector(state => state.games.params);
    const loading = useSelector(state => state.games.loading);

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

    useEffect(() => {
        dispatch(fetchGames(null));
    }, [params, dispatch]);

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
                <div className={style.container}>
                    <div className={style.platform}>
                        <TransformList
                            type={'filter'}
                            filterBy={'platform'}
                            options={platrofrmOptions}
                        />
                    </div>
                    <div className={style.filter}>
                        <TransformList
                            type={'filter'}
                            filterBy={'category'}
                            options={categoryOptions}
                        />
                    </div>
                    <div className={style.sort}>
                        <TransformList
                            type='sort'
                            options={sortOptions}
                        />
                    </div>
                </div>
            </Row>
            <Divider>Games List Below</Divider>
            { loading ? <Spinner /> : <GamesList games={games}/> }
        </div>
    );
}
