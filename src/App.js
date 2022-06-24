import "./App.css";
import React from "react";
import { useContext, useState } from "react";
//pages import
import Counter from "./Components/Counter/CounterClass";
import CounterFn from "./Components/Counter/CounterFn";
import BuyStockClass from "./Components/BuyStock/BuyStockClass";
import BuyStockFn from "./Components/BuyStock/BuyStockFn";
import MyReduxCounterFn from "./Components/MyReduxCounter/MyReduxCounterFn";
import MyReduxClass from "./Components/MyReduxCounter/myReduxClass";

import MyReduxClassV1 from "./Components/MyReduxCounter/myReduxClassV1";
//context Import
import CounterContext from "./Context/counterContext";
import { BuyStockContextProvider } from "./Context/BuyStockContext";
import { ReduxCounterProvider } from "./Context/myReduxContext";
// Navigation Counter Imports
import CounterNumber from "./NavDisplay/CounterNumber";
import CounterFnNumber from "./NavDisplay/CounterFnNumber";
import BuyStockNumber from "./NavDisplay/BuyStockNumber";
import BuyStockFnNumber from "./NavDisplay/BuyStockFnNumber";
import MyReduxCounterNumberFn from "./NavDisplay/MyReduxCounterNumberFn";
import MyReduxCounterNumber from "./NavDisplay/MyReduxCounterNumber";
import MyReduxCounterNumberV1 from "./NavDisplay/MyReduxCounterNumberV1";
const pageInfo = [
  {
    pageName: "Counter",
    pageComponent: Counter
  },
  {
    pageName: "CounterFn",
    pageComponent: CounterFn
  },
  {
    pageName: "BuyStockClass",
    pageComponent: BuyStockClass
  },
  {
    pageName: "BuyStockFn",
    pageComponent: BuyStockFn
  },
  {
    pageName: "MyReduxClassV1",
    pageComponent: MyReduxClassV1
  },
  {
    pageName: "MyReduxCounterFn",
    pageComponent: MyReduxCounterFn
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState(pageInfo[1]);
  // const value = useContext(CounterContext);
  const hanldeChangePage = (activePageInfo) => {
    setCurrentPage(activePageInfo);
  };
  const renderCurrentPage = () => {
    const CurPage = currentPage.pageComponent;
    return <CurPage patrick="patrick" />;
  };

  return (
    <div className="App" hello="hello">
      <header className="App__header">
        <nav className="App__header__nav">
          {pageInfo.map((page) => {
            switch (page.pageName) {
              case "Counter":
                return (
                  <a onClick={() => hanldeChangePage(page)}>
                    {page.pageName} <CounterNumber />{" "}
                  </a>
                );
              case "CounterFn":
                return (
                  <a onClick={() => hanldeChangePage(page)}>
                    {page.pageName} <CounterFnNumber />{" "}
                  </a>
                );
              case "BuyStockClass":
                return (
                  <a onClick={() => hanldeChangePage(page)}>
                    {page.pageName} <BuyStockNumber />{" "}
                  </a>
                );
              case "BuyStockFn":
                return (
                  <a onClick={() => hanldeChangePage(page)}>
                    {page.pageName} <BuyStockFnNumber />{" "}
                  </a>
                );
              case "MyReduxCounterFn":
                return (
                  <a onClick={() => hanldeChangePage(page)}>
                    {page.pageName} <MyReduxCounterNumberFn />{" "}
                  </a>
                );
              case "MyReduxCounterV1":
                return (
                  <a onClick={() => hanldeChangePage(page)}>
                    {page.pageName} <MyReduxCounterNumberV1 />{" "}
                  </a>
                );
              default:
                return (
                  <a onClick={() => hanldeChangePage(page)}>{page.pageName} </a>
                );
            }
          })}
        </nav>
      </header>

      {<BuyStockContextProvider>{renderCurrentPage()}</BuyStockContextProvider>}
    </div>
  );
}

export default App;
