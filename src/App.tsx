import { useState } from 'react';
import { Button } from '@/components/ui/button.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button onClick={() => setCount(pv => pv + 1)}>
        Render count: {count}
      </Button>
    </div>
  )
}

export default App
