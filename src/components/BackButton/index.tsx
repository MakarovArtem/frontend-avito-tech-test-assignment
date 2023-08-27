import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

export const BackButton = () => {

    return (
        <Button type='primary' size='large' icon={<ArrowLeftOutlined />}>
            Back to Games list
        </Button>
    );
};