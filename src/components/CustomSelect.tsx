'use client';

import * as React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export type OptionType = {
  label: string;
  value: string;
};

export type GroupedOption = {
  label: string;
  options: OptionType[];
};

type Props = {
  label: string;
  placeholder: string;
  options: OptionType[] | GroupedOption[];
  defaultValue?: OptionType;
};

const animatedComponents = makeAnimated();

export default function CustomSelect({ label, placeholder, options, defaultValue }: Props) {
  const [selected, setSelected] = React.useState<OptionType | null>(defaultValue || null);

  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <Select
        placeholder={placeholder}
        value={selected}
        onChange={(option) => setSelected(option as OptionType)}
        options={options}
        components={animatedComponents}
        isSearchable
        className="react-select-container text-sm"
        classNamePrefix="react-select"
      />
    </div>
  );
}
