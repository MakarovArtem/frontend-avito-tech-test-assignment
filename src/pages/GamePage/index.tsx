import { Row, Col, Typography, Descriptions, Carousel, Image } from 'antd';
import BackButton from '../../components/BackButton';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function GamePage() {

    const { Title } = Typography;

    const data: object = {
        'id': 452,
        'title': 'Call Of Duty: Warzone',
        'thumbnail': 'https://www.freetogame.com/g/452/thumbnail.jpg',
        'status': 'Live',
        'short_description': 'A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.',
        'description': 'Call of Duty: Warzone is both a standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare. Warzone features two modes — the general 150-player battle royle, and “Plunder”. The latter mode is described as a “race to deposit the most Cash”. In both modes players can both earn and loot cash to be used when purchasing in-match equipment, field upgrades, and more. Both cash and XP are earned in a variety of ways, including completing contracts.\r\n\r\nAn interesting feature of the game is one that allows players who have been killed in a match to rejoin it by winning a 1v1 match against other felled players in the Gulag.\r\n\r\nOf course, being a battle royale, the game does offer a battle pass. The pass offers players new weapons, playable characters, Call of Duty points, blueprints, and more. Players can also earn plenty of new items by completing objectives offered with the pass.',
        'game_url': 'https://www.freetogame.com/open/call-of-duty-warzone',
        'genre': 'Shooter',
        'platform': 'Windows',
        'publisher': 'Activision',
        'developer': 'Infinity Ward',
        'release_date': '2020-03-10',
        'freetogame_profile_url': 'https://www.freetogame.com/call-of-duty-warzone',
        'minimum_system_requirements': {
            'os': 'Windows 7 64-Bit (SP1) or Windows 10 64-Bit',
            'processor': 'Intel Core i3-4340 or AMD FX-6300',
            'memory': '8GB RAM',
            'graphics': 'NVIDIA GeForce GTX 670 / GeForce GTX 1650 or Radeon HD 7950',
            'storage': '175GB HD space'
        },
        'screenshots': [
            {
                'id': 1124,
                'image': 'https://www.freetogame.com/g/452/Call-of-Duty-Warzone-1.jpg'
            },
            {
                'id': 1125,
                'image': 'https://www.freetogame.com/g/452/Call-of-Duty-Warzone-2.jpg'
            },
            {
                'id': 1126,
                'image': 'https://www.freetogame.com/g/452/Call-of-Duty-Warzone-3.jpg'
            },
            {
                'id': 1127,
                'image': 'https://www.freetogame.com/g/452/Call-of-Duty-Warzone-4.jpg'
            }
        ]
    };

    const {
        title,
        developer,
        publisher,
        release_date,
        genre,
        platform,
        screenshots
    } = data;

    const info = [
        {
            key: 1,
            label: 'Title',
            children: title,
        },
        {
            key: 2,
            label: 'Developer',
            children: developer,
        },
        {
            key: 3,
            label: 'Publisher',
            children: publisher,
        },
        {
            key: 4,
            label: 'Release date',
            children: release_date,
        },
        {
            key: 5,
            label: 'Genre',
            children: genre,
        },
        {
            key: 6,
            label: 'Platform',
            children: platform,
        },
    ];

    const req = data.minimum_system_requirements;

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

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        // тут запросить данные по игрушке { id }
    }, []);

    return (
        <>
            <Row justify={'center'}>
                <Col>
                    <Title>{title}</Title>
                </Col>
            </Row>
            <Row justify={'center'}>
                <Col xl={12}>
                    <Descriptions
                        column={{ xs:2, sm: 2, xl:3, xxl:3 }}
                        title="Additional information"
                        items={info}
                    />
                </Col>
            </Row>
            <Row justify={'center'}>
                <Col xl={12}>
                    <Carousel autoplay>
                        {screenshots?.map( screenshot =>
                            <Image
                                key={screenshot.id}
                                alt={title}
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
                        items={system}
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
