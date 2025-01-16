import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { store } from './stores/useCounterStore.ts'

const btn= document.getElementById('change')
btn?.addEventListener('click', () => {
   store.getState().changeTest2Val()
})
store.subscribe((state) => {
  const test2Content = document.getElementById('test2Content')
  if (test2Content) {
      test2Content.innerHTML=state.map.test2.val.join(',')
  }
})
createRoot(document.getElementById('root')!).render(
<App />
)
