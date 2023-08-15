import { useState } from 'react';
import './App.scss';
import PDFFile from './PDFFile/PDFFile';
import { pdf } from '@react-pdf/renderer';

function App() {

  const [name, setName] = useState("");

  const generatePdfDocument = async (e) => {
    e.preventDefault();
    const blob = await pdf(<PDFFile name={name} />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  return (
    <div className='Page'>
      <header className='header'>
        <p>Har Ghar Tiranga</p>
        <h1>Certificate Generator</h1>
      </header>
      <main className='main'>
        <form className='form' onSubmit={async (e) => await generatePdfDocument(e)}>
          <input type="text" name="name" placeholder='Enter your name' onInput={(e) => setName(e.currentTarget.value)} value={name} />
          <input type="submit" value="Generate" />
        </form>
      </main>
      <p className="credit">Created by <a href="http://github.com/sahilatahar">Sahil Atahar</a></p>
    </div>
  )
}

export default App