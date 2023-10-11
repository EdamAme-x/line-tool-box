import './App.css';
import Methods from './methods';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [show, setShow] = useState(false);
  const description = () => (<>
    このツールはliff上で動いています。<br />
    liffとは・・? <br />
    LINEが開発した、LINEとWebアプリを繋げる為のライブラリです。<br />
    皆さんご存知、QRコードスキャナーやLINEのゲーム等もこれが利用されています。<br />
    それを用いて、Reactを使用し、このツールを作成しています。 <br />
    基本的には、メッセージ送信、マクロ(OCの場合、ポリは有りません)、mid取得、OCの通報URL作成。。。 etc. <br />
    右上のtwitterマークを押すことで開発者のTwitterアカウントを見ることができます。<br />
    機能追加やバグ修正の要望は適当なツイートのリプにお願いします。 <br />
    <button onClick={() => setShow(!show)} className='close'>閉じる</button>
  </>);

  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <h2 className='text-c2'>良く分からない方は<button onClick={() => setShow(!show)}>こちら</button>をご覧下さい。</h2>
        <Methods />
        {
          show ? (<div className='dialog'>{description()}</div>) : ""
        }
      </div>
      <Footer />
    </>
  );
}

export default App;
