import { Button } from "antd";
import React from "react";
import { useState } from "react";

export default function IncDec() {
  const [count, setCount] = useState(0);
  const [disableDec, setDisableDec] = useState(true);

  return (
    <div>
      <Button
        disabled={disableDec}
        onClick={() => {
          if (!disableDec) {
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
