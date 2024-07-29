export default function Search({onInputChange}){
    return (<input type="text" className="border-4" onChange={(event) => {
        onInputChange(event);
    }}/>)
}