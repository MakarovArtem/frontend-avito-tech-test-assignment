import { Typography, Card, Row, Col } from 'antd';
import { BackButton } from '../../components';
import { useRouteError } from 'react-router-dom';
const { Paragraph } = Typography;

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <Row
            id='error-page'
            justify={'center'}
        >
            <Col>
                <Card headStyle={{ fontSize: '36px' }} title='OOppsss!' bordered style={{ width: 300 }}>
                    <Paragraph>
                        Sorry, an unexpected error has occurred.
                    </Paragraph>
                    <Paragraph>
                        {error?.statusText || error?.message}
                    </Paragraph>
                    <BackButton />
                </Card>
            </Col>
        </Row>
    );
};

export default ErrorPage;
