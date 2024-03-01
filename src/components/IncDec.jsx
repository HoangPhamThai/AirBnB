import { Button } from "antd";
import React from "react";
import { useState } from "react";

export default function IncDec({ initValue=0, onChanged }) {
  const [count, setCount] = useState(initValue);
  const [disableDec, setDisableDec] = useState(true);

  return (
    <div>
      <Button
        disabled={disableDec}
        onClick={() => {
          if (!disableDec) {
            onChanged(count - 1);
            setCount(count - 1);
            if (count === 1) {
              setDisableDec(true);
            }
          }
        }}
      >
        -
      </Button>
      <span className="mx-3">{count}</span>

      <Button
        onClick={() => {
          onChanged(count + 1);
          setCount(count + 1);
          if (disableDec) {
            setDisableDec(false);
          }
        }}
      >
        +
      </Button>
    </div>
  );
}
