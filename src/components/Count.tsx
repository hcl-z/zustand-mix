import { useTrackedStore } from "../stores/useCounterStore";


export function Count() {
  const {increment,decrement,count}=useTrackedStore()
  
  console.log('render----count');
  
  return (
    <>
    <button onClick={increment}>
      +
    </button>
      {count}
    <button onClick={decrement}>
      -
    </button>
    </>
  )
}
