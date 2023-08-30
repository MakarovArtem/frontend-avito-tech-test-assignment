import { Link } from 'react-router-dom';
import { Card, Image, Typography, Space } from 'antd';
import style from './style.module.css';
import { Game } from '../../redux/stateSchema';

const { Title, Paragraph } = Typography;

interface GameCardProps {
    data: Game
}

function GameCard({ data }: GameCardProps): JSX.Element {

    const {
        thumbnail,
        title,
        release_date,
        publisher,
        genre,
        id,
    } = data;

    return (
        <Card extra={<Link to={`/game/${id}`}>{title}</Link>}>
            <div className={style.container}>
                <div className={style.title}>
                    <Title>{title}</Title>
                </div>
                <div className={style.img}>
                    <Image
                        width={365}
                        src={thumbnail}
                        alt={title}
                    />
                </div>
                <div className={style.info}>
                    <Space direction='vertical'>
                        <Paragraph>Release date: {release_date}</Paragraph>
                        <Paragraph>Publisher: {publisher}</Paragraph>
                        <Paragraph>Genre: {genre}</Paragraph>
                    </Space>
                </div>
            </div>
        </Card>
    );
}

export default GameCard;
