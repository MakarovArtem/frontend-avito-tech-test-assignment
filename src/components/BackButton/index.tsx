import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../main';

function BackButton() {

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

export default BackButton;