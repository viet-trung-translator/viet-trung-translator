import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('');

  const handleTranslate = async () => {
    try {
      const res = await axios.post('https://libretranslate.de/translate', {
        q: text,
        source: "vi",
        target: "zh",
        format: "text"
      });
      setTranslated(res.data.translatedText);
    } catch (err) {
      setTranslated("Lỗi khi dịch.");
    }
  };

  return (
    <div style={{ padding: 50 }}>
      <h1>Dịch tiếng Việt sang Trung</h1>
      <textarea rows="5" cols="50" value={text} onChange={e => setText(e.target.value)} />
      <br />
      <button onClick={handleTranslate}>Dịch</button>
      <h3>Kết quả:</h3>
      <div>{translated}</div>
    </div>
  );
}