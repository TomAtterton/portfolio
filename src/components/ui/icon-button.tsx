interface Props {
    icon: string;
    onClick: () => void;
    className?: string;
    disabled?: boolean;

}


const IconButton = ({
                        icon, onClick, className, disabled
                    }: Props) => {
    return (
        <button
            className={`icon-button ${className}`}
            // onClick={onClick}
            disabled={disabled}
        >
            <i className={`material-icons`}>{icon}</i>
        </button>
    );
}

export default IconButton;
