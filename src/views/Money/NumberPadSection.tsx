import React, {useState} from 'react';
import {NumberPadWrapper} from './NumberPadSection/NumberPadWrapper';
import {generateOutput} from './NumberPadSection/generateOutput';

type Props = {
  value: number;
  onChange: (value: number) => void;
  onOK?: () => void;
}
const NumberPadSection: React.FC<Props> = (props) => {
  const [output, setOutput] = useState(props.value.toString());
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    if (text === 'OK') {
      if (props.onOK) {
        props.onOK();
        setOutput('0')
      }
      return;
    }
    if ([...'0123456789.', ...['删除', '清空']].includes(text)) {
      const amountNum = generateOutput(text, output);
      setOutput(amountNum);
      props.onChange(Number(amountNum));
    }
  };

  return (
    <NumberPadWrapper>
      <div className="output">{output}</div>
      <div className="pad" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </NumberPadWrapper>
  );
};
export {NumberPadSection};