import React from 'react'

const App = () => {
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <h1>Hello</h1>
               <ol key={relativeList}>
                  <li key={relativeListItem1}>relative1</li>
                  <li key={relativeListItem2}>relative2</li>
               </ol>
    </div>
  )
}

export default App
