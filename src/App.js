import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = 0; 
  }; 
 
  function resetResult(e) { 
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Basit Hesap Makinesi</h1> 
      </div> 
      <form> 
        <p ref={resultRef}>{result}</p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Bir Sayı Giriniz" 
        /> 
        <button onClick={plus}>Toplama</button> 
        <button onClick={minus}>Çıkarma</button>
        <button onClick={times}>Çarpım</button>
        <button onClick={divide}>Bölme</button>
        <button onClick={resetInput}>Girişi Sıfırla</button>
        <button onClick={resetResult}>Sonucu Sıfırla</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 


