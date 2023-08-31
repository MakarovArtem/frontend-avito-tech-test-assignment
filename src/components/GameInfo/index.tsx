import { GameDetailed } from '../../store';
import { BackButton } from '../index';
import { convertDate } from '../../utils/convertDate';
import { Row, Col, Typography, Descriptions, Carousel, Image } from 'antd';

const { Title } = Typography;

interface GameInfoProps {
    game: GameDetailed,
}

export function GameInfo({ game }: GameInfoProps): JSX.Element {

    const additionalInfo = [
        {
            key: 1,
            label: 'Title',
            children: game?.title,
        },
        {
            key: 2,
            label: 'Developer',
            children: game?.developer,
        },
        {
            key: 3,
            label: 'Publisher',
            children: game?.publisher,
        },
        {
            key: 4,
            label: 'Release date',
            children: convertDate(game?.release_date),
        },
        {
            key: 5,
            label: 'Genre',
            children: game?.genre,
        },
        {
            key: 6,
            label: 'Platform',
            children: game?.platform,
        },
    ];

    const req = game?.minimum_system_requirements;

    const systemRequirements = [
        {
            key: 1,
            label: 'OS',
            children: req?.os,
        },
        {
            key: 2,
            label: 'Memory',
            children: req?.memory,
        },
        {
            key: 3,
            label: 'Storage',
            children: req?.storage,
        },
        {
            key: 4,
            label: 'Processor',
            children: req?.processor,
        },
        {
            key: 5,
            label: 'Graphics',
            children: req?.graphics,
        },
    ];

    return (
        <div>
            <Row gutter={12} justify={'start'}>
                <Col xs={12}>
                    <Image
                        alt={game?.title}
                        src={game?.thumbnail}
                    />
                </Col>
                <Col xs={12}>
                    <Title level={2}>{game?.title}</Title>
                </Col>
            </Row>
            <Row justify={'center'}>
                <Col>
                    <Descriptions
                        column={{ xs:1, sm: 2, md:2, lg:3 }}
                        title="Additional information"
                        items={additionalInfo}
                    />
                </Col>
            </Row>
            <Row justify={'center'}>
                <Col>
                    <Title level={5}>Screenshots galery</Title>
                    <Carousel
                        dotPosition={'left'}
                    >
                        {game?.screenshots.map( screenshot =>
                            <Image
                                key={screenshot.id}
                                alt={game?.title}
                                src={screenshot.image}
                                placeholder={
                                    <div style={{
                                        width: '100%',
                                        height: '560',
                                        backgroundColor: 'white'
                                    }}></div>
                                }
                            />
                        )}
                    </Carousel>
                </Col>
            </Row>
            <Row justify={'center'}>
                <Col>
                    <Descriptions
                        column={{ xs:1, sm: 2, md:2, }}
                        layout={'vertical'}
                        title="Minimum system requirements"
                        items={systemRequirements}
                    />
                </Col>
            </Row>
            <Row justify={'start'}>
                <Col>
                    <BackButton />
                </Col>
            </Row>
        </div>
    );
}
