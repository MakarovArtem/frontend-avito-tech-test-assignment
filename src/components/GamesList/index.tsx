import { List } from 'antd';
import GameCard from '../GameCard/index';
import { PaginationConfig } from 'antd/es/pagination';
// eslint-disable-next-line
//@ts-ignore
// eslint-disable-next-line
function GamesList({games: unknown}) {

    const paginationConfig: PaginationConfig = {
        position:'bottom',
        align: 'center',
        pageSize: 2
    };

    return (
        <>
            <List
                pagination={paginationConfig}
                dataSource={games}
                renderItem={(item) => (
                    <List.Item>
                        <div style={{margin: '0 auto'}}>
                            <GameCard data={item}/>
                        </div>
                    </List.Item>
                )}
            />
        </>
    );
}

export default GamesList;
