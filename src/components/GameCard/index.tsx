import { Link } from 'react-router-dom';
import { Card, Image, Typography, Space } from 'antd';
import style from './style.module.css';

const { Title, Paragraph } = Typography;
// eslint-disable-next-line
function GameCard(props: unknown) {

    const {
        thumbnail,
        title,
        release_date,
        publisher,
        genre,
        id,
    } = props.data;

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
