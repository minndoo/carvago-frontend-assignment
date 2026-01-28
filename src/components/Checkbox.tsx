type CheckboxProps = {
    id: string;
    label: string;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    checked?: boolean
}

export const Checkbox = ({id, label, checked, onClick}: CheckboxProps) => {
    const handleOnClick = (event: React.MouseEvent<HTMLInputElement>) => onClick?.(event);

    return <label htmlFor={id}><input id={id} type="checkbox" onClick={handleOnClick} checked={checked} />{label}</label>;
}