import logo from "./logo.svg";
import "./App.css";
import { NodeService } from "./services/NodeService";

function App() {
  const nodeService = new NodeService();

  // prettier-ignore
  nodeService.getTreeNodes()
  .then((data) => console.log(data)); // ? "data" içerisinde bir json objesi var.

  /*
  * Görev - 1 - Router Kullanımı

  * Senaryo: Biz uygulamada 2 farklı sayfa oluşturmak istiyoruz. Bu sayfaların biri "Home" diğeri ise "Tree" olacak. "Home" sayfasında bir "Tree" componenti olacak. Bu "Tree" componenti "Tree" sayfasında da olacak. Bu sayfalara ait route'ları oluşturup "Home" sayfasına yönlendiren bir link oluşturunuz.
  */

  /*
  * Görev - 2 - Tree Yapısı Kullanımı

  * Senaryo: Bir servisten bize Tree Component ile uyumlu olmayan ancak Tree Component ile sergilenmesi gereken bir json objesi dönmüştür. Ve bizim bu objeyi Tree Component ile uyumlu hale getirmemiz gerekmektedir. (Not: "ItemList" içerisinde sonu belirli olmayan bir şekilde iç içe "ItemList" dizileri bulunmaktadır. public > json > tree.json içerisindeki "ItemList" sayısı artabilir / azalabilir.)
  * Kullanacağımız Tree Component'ı => https://www.primefaces.org/primereact/tree/ 

  ? İpuçları:
  ? "data" içerisinde bir json objesi var.
  ? Bu objenin içerisinde iç içe "ItemList" dizileri var.
  ? "ItemList" yerine "children" isminde dizileri bekliyor.
  ? "DisplayName" yerine "label" isminde bir değer bekliyor.
  
  ? Sizlerden beklentimiz public > json > tree.json dosyasına dokunmadan sadece yukarıdaki "data" objesini
  ? "children" ve "label" isimlerine göre düzenleyerek (veya ekleyerek) Tree Component'ı ile uyumlu hale getirmenizdir.
  */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
