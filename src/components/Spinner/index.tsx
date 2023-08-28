import { Spin } from 'antd';
import style from './style.module.css';

function Spinner() {

    return (
        <div className={style.wrapper}>
            <Spin  tip="Loading" size="large">
                <div className={style.content} />
            </Spin>
        </div>
    );
}

export default Spinner;
