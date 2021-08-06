import Button from './styled'

export default ({children, variant}) => {
    return (
        <Button variant={variant}>{children}</Button>
    );
}