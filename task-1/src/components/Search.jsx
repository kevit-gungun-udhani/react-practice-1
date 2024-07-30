export default function Search({ onInputChange }) {
    return (
      <div className=" text-center mt-4">
        <input type="text" className=" bg-violet-50 border-2 border-indigo-200 rounded-lg focus:outline-violet-100 focus:caret-indigo-400" onChange={(e) => {
      onInputChange(e.target.value)
  }} />
      </div>
    );
}