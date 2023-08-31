import { Spin } from 'antd';
import style from './style.module.css';

export function Spinner() {

    return (
        <div className={style.wrapper}>
            <Spin  tip="Loading" size="large">
                <div className={style.content} />
            </Spin>
        </div>
    );
}
