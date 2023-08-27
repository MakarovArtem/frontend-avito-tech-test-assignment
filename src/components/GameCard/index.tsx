import { Card, Image, Typography, Space } from 'antd';
import './style.css';

const { Title, Paragraph } = Typography;
// eslint-disable-next-line
function GameCard(props: unknown) {

    const {
        thumbnail,
        title,
        release_date,
        publisher,
        genre,
    } = props.data;

    return (
        <Card>
            <div className='container'>
                <div className='title'>
                    <Title>{title}</Title>
                </div>
                <div className='img'>
                    <Image
                        width={365}
                        src={thumbnail}
                        alt={title}
                    />
                </div>
                <div className='info'>
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
