import { useNavigate } from 'react-router-dom';
import { Game } from '../../store';
import { convertDate } from '../../utils/convertDate';
import { Card, Image, Typography, Space, Spin } from 'antd';
import style from './style.module.css';

const { Title, Paragraph } = Typography;

interface GameCardProps {
    data: Game
}

export function GameCard({ data }: GameCardProps): JSX.Element {

    const navigate = useNavigate();

    const {
        thumbnail,
        title,
        release_date,
        publisher,
        genre,
        id,
    } = data;

    const handleClick = () => {
        navigate(`/frontend-avito-tech-test-assignment/game/${id}`);
    };

    return (
        <Card className={style.card} onClick={handleClick}>
            <div className={style.container}>
                <div className={style.title}>
                    <Title>{title}</Title>
                </div>
                <div className={style.img}>
                    <Image
                        preview={false}
                        src={thumbnail}
                        alt={title}
                        placeholder={
                            <div className={style.spinContainer}>
                                <Spin />
                            </div>
                        }
                    />
                </div>
                <div className={style.info}>
                    <Space direction='vertical'>
                        <Paragraph>Release date: {convertDate(release_date)}</Paragraph>
                        <Paragraph>Publisher: {publisher}</Paragraph>
                        <Paragraph>Genre: {genre}</Paragraph>
                    </Space>
                </div>
            </div>
        </Card>
    );
}
