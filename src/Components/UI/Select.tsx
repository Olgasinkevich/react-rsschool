import React from 'react';

type OptionType = {[key: string]:string};
type Props = { options: OptionType[], defaultValue: string, value:string, onChange:any};

const Select: React.FC<Props> = ({options, defaultValue, value, onChange}) => {
    return (
        <select name='sort' value={value}
        onChange={event => onChange(event.target.value)} className="search sorting border-home-page" >
            <option value='' disabled selected>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                {option.name}
            </option>
         )}

        </select>
    );
};

export default Select;