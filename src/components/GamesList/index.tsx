import { List } from 'antd';
import GameCard from '../GameCard/index';
import { PaginationConfig } from 'antd/es/pagination';
import { GamesList as GamesListType } from '../../redux/stateSchema';

interface GamesListProps {
    games: GamesListType
}

function GamesList({ games }: GamesListProps): JSX.Element {

    const paginationConfig: PaginationConfig = {
        position:'both',
        align: 'center',
        pageSize: 5
    };

    return (
        <>
            <List
                pagination={paginationConfig}
                dataSource={ games }
                renderItem={ game => (
                    <List.Item>
                        <div style={{ margin: '0 auto' }}>
                            <GameCard data={game}/>
                        </div>
                    </List.Item>
                )}
            />
        </>
    );
}

export default GamesList;
