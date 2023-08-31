import { Select as SelectAntd, Typography } from 'antd';
import { useDispatch, gamesActions } from '../../store';

const { Paragraph } = Typography;

type TransformType = 'filter' | 'sort';
type FilterBy = 'platform' | 'category';

interface Option {
    value: string,
    label: string,
}

interface TransformListPorps {
    type: TransformType
    options: Option[],
    filterBy?: FilterBy,
    id?: string,
    defaultOption?: string,
}

export function TransformList(props: TransformListPorps): JSX.Element {

    const dispatch = useDispatch();

    const {
        type,
        options,
        filterBy,
        defaultOption = 'notChosen',
    } = props;

    const title = type === 'filter' ? `Filter by ${filterBy}` : 'Sort by';

    const handleChange = (value: string) => {
        const key = filterBy ? filterBy : 'sort-by';
        if (value === 'notChosen') {
            dispatch(gamesActions.removeQueryParam(key));
        }
        dispatch(gamesActions.addQueryParam([key, value]));
    };

    return (
        <>
            <Paragraph>{title}</Paragraph>
            <SelectAntd
                defaultValue={defaultOption}
                style={{ width: 240 }}
                onChange={handleChange}
                options={options}
            />
        </>
    );
}
