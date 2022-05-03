import React from 'react';

type OptionType = {[key: string]:string};
type Props = { options: OptionType[], defaultValue: string, value:string, onChange:any};
//const Select = ({options, defaultValue}: {options: string, defaultValue: string}): JSX.Element => {

const Select: React.FC<Props> = ({options, defaultValue, value, onChange}) => {
    return (
        <select name='sort' value={value}
        onChange={event => onChange(event.target.value)}>
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