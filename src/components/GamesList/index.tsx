import { GamesList as GamesListType } from '../../store';
import { GameCard } from '../index';
import { List } from 'antd';

interface GamesListProps {
    games: GamesListType
}

export function GamesList({ games }: GamesListProps): JSX.Element {

    return (
        <List
            pagination={{
                position:'both',
                align: 'center',
            }}
            dataSource={ games }
            renderItem={ game => (
                <List.Item>
                    <div style={{ margin: '0 auto' }}>
                        <GameCard data={game}/>
                    </div>
                </List.Item>
            )}
        />
    );
}
