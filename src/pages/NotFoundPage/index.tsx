import { Typography, Card, Row, Col } from 'antd';
import { BackButton } from '../../components/BackButton';

const { Paragraph } = Typography;

const NotFoundPage = () => {
    return (
        <Row justify={'center'}>
            <Col>
                <Card headStyle={{ fontSize: '36px' }} title="404" bordered style={{ width: 300 }}>
                    <Paragraph>
                        Page not found
                    </Paragraph>
                    <BackButton />
                </Card>
            </Col>
        </Row>
    );
};

export default NotFoundPage;
