interface FilterSelectProps {
    label: string;
    value: string;
    options?: string[];
    onChange?: (value: string) => void;
}

export const FilterSelect = ({ label, value, options = [], onChange }: FilterSelectProps) => {
    return (
        <select
            className="p-2 text-gray bg-light-gray h-[36px] w-full rounded border border-light-silver-2"
            onChange={(e) => onChange?.(e.target.value)}
            value={value}
        >
            <option value={value}>{`${label}: ${value}`}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    );
}; 