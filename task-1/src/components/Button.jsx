export default function Button({children, onButtonClick}){
    return (
        <>
            <button onClick={onButtonClick}>{children}</button>
        </>
    )
}