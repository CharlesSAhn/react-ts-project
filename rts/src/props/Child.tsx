interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
}


export const Child = ({ color, onClick }: ChildProps) => {
    return <div>
        { color }
        <button onClick={onClick}>Click me</button>
    </div>
};

export const ChildAsFC:  React.FC<ChildProps> = ({ color, onClick }) => {
    return <div>
        { color }
    <button onClick={onClick}>Click me</button>
</div>
};


// ```
// All react components can optionally provide these properties:
// - propTypes
// - displayName
// - defaultProps
// - contextTypes

// by using the React.FC ->
// - Child will be a react function component
// - Child might have properties assigned to it like 'propTypes' and 'contextTypes'
// - Child will receive props of the ChildProps.
// ```