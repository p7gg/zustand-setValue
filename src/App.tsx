import { useEffect, useState } from 'react';
import { useStore } from './store';

export function App() {
  const layoutAlignment = useStore((store) => store.state.layout.alignment);
  const updateState = useStore((state) => state.updateState);

  const [input, setInput] = useState(layoutAlignment);

  useEffect(() => {
    console.log('🚀 ~ layoutAlignment', layoutAlignment);
  }, [layoutAlignment]);

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.currentTarget.value)} />
      <button onClick={() => updateState('state.layout.alignment', input)}>
        Update Version
      </button>
    </div>
  );
}
