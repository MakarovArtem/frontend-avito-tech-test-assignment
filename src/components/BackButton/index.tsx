import { useNavigate } from 'react-router-dom';
import { Routes } from '../../main';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export function BackButton() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(Routes.MAIN);
    };

    return (
        <Button
            onClick={handleClick}
            type='primary'
            size='large'
            icon={<ArrowLeftOutlined />}
        >
            Back to Main
        </Button>
    );
}
