import { useState } from 'react';
import { GamesList as GamesListType } from '../../store';
import { GameCard } from '../index';
import { List } from 'antd';

interface GamesListProps {
    games: GamesListType
}

export function GamesList({ games }: GamesListProps): JSX.Element {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageSize, setCurrentPageSize] = useState(10);
    const totalItems = games.length;

    const handleChange = (page: number, newPageSize: number) => {
        const totalPages = Math.ceil(totalItems / newPageSize);
        
        if (page === totalPages) {
          return;
        }
        
        setCurrentPage(page);
    };

    const handlePageSizeChange = (current: number, size: number) => {
        if (size === 50) {
          return;
        }

        setCurrentPageSize(size);
        setCurrentPage(1);
      };

    return (
        <List
            pagination={{
                current: currentPage,
                pageSize: currentPageSize,
                position:'both',
                align: 'center',
                onChange: handleChange,
                onShowSizeChange: handlePageSizeChange
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
