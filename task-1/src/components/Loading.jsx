import { ThreeDots } from 'react-loader-spinner';
export default function Loading() {
  return (
    <div className=" bg-stone-700 flex items-center justify-center">
      <ThreeDots
        visible={true}
        height="120"
        width="120"
        color="rgb(139 92 246)"
        radius="16"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}