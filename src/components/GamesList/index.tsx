import { useState } from 'react';
import { GamesList as GamesListType } from '../../store';
import { GameCard } from '../index';
import { List } from 'antd';

interface GamesListProps {
    games: GamesListType
}

export function GamesList({ games }: GamesListProps): JSX.Element {
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = games.length;

    const handleChange = (page: number, newPageSize: number) => {
        const totalPages = Math.ceil(totalItems / newPageSize);
        
        if (page === totalPages) {
          return;
        }
        
        setCurrentPage(page);
    };

    return (
        <List
            pagination={{
                current: currentPage,
                position:'both',
                align: 'center',
                onChange: handleChange,
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
