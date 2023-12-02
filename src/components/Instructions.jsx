import React from 'react'
import './Instructions.css'
export default function Instructions() {
  return (
<div className="instructions p-2">
    <div className="flex justify-center">
<p className="text-white">
  `hello`: <code>hello</code>
</p>
<p className="text-white">
  *hello*: <em>hello</em>
</p>
<p className="text-white">
  **hello**: <strong>hello</strong>
</p>
<p className="text-white">
  ***hello***:{" "}
  <strong>
    <em>hello</em>
  </strong>
</p>
<p className="text-white">
  ***:{"  "}
  <span
    style={{
        borderBottom: "1px solid white",
        paddingLeft: "5rem",
    }}
    ></span>
</p>
    </div>
    </div>
  )
}
