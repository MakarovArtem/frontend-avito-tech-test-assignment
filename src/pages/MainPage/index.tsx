import { Typography, Select, Divider, Space, Row, Col } from 'antd';
import GamesList from '../../components/GamesList';
import Link from 'antd/es/typography/Link';

const { Title, Paragraph } = Typography;

function MainPage() {

    const data: unknown = [
        {
            'id': 540,
            'title': 'Overwatch 2',
            'thumbnail': 'https://www.freetogame.com/g/540/thumbnail.jpg',
            'short_description': 'A hero-focused first-person team shooter from Blizzard Entertainment.',
            'game_url': 'https://www.freetogame.com/open/overwatch-2',
            'genre': 'Shooter',
            'platform': 'PC (Windows)',
            'publisher': 'Activision Blizzard',
            'developer': 'Blizzard Entertainment',
            'release_date': '2022-10-04',
            'freetogame_profile_url': 'https://www.freetogame.com/overwatch-2'
        },
        {
            'id': 521,
            'title': 'Diablo Immortal',
            'thumbnail': 'https://www.freetogame.com/g/521/thumbnail.jpg',
            'short_description': 'Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.',
            'game_url': 'https://www.freetogame.com/open/diablo-immortal',
            'genre': 'MMOARPG',
            'platform': 'PC (Windows)',
            'publisher': 'Blizzard Entertainment',
            'developer': 'Blizzard Entertainment',
            'release_date': '2022-06-02',
            'freetogame_profile_url': 'https://www.freetogame.com/diablo-immortal'
        },
        {
            'id': 517,
            'title': 'Lost Ark',
            'thumbnail': 'https://www.freetogame.com/g/517/thumbnail.jpg',
            'short_description': 'Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.',
            'game_url': 'https://www.freetogame.com/open/lost-ark',
            'genre': 'ARPG',
            'platform': 'PC (Windows)',
            'publisher': 'Amazon Games',
            'developer': 'Smilegate RPG',
            'release_date': '2022-02-11',
            'freetogame_profile_url': 'https://www.freetogame.com/lost-ark'
        },
        {
            'id': 516,
            'title': 'PUBG: BATTLEGROUNDS',
            'thumbnail': 'https://www.freetogame.com/g/516/thumbnail.jpg',
            'short_description': 'Get into the action in one of the longest running battle royale games PUBG Battlegrounds.',
            'game_url': 'https://www.freetogame.com/open/pubg',
            'genre': 'Shooter',
            'platform': 'PC (Windows)',
            'publisher': 'KRAFTON, Inc.',
            'developer': 'KRAFTON, Inc.',
            'release_date': '2022-01-12',
            'freetogame_profile_url': 'https://www.freetogame.com/pubg'
        },
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
            <GamesList games={data}/>
        </div>
    );
}

export default MainPage;
