import './App.css';

import FirstExample from "./examples/firstExample";
import SecondExample from "./examples/secondExample";
import ThirdExample from "./examples/thirdExample";
import FourthExample from "./examples/fourthExample";
import FifthExample from './examples/fifthExample';
import SixthExample from "./examples/sixthExample";

import FirstTask from './tasks/firstTask';
import SecondTask from './tasks/secondTask';
import ThirdTask from "./tasks/thridTask";
import FourthTask from "./tasks/fourthTask";
import FifthTask from './tasks/fifthTask';
import SixthTask from "./tasks/sixthTask";
import SeventhTask from "./tasks/seventhTask";
import EightTask from './tasks/eightTask';

function App() {
  return (
    <div className="App row">
      {/*  1 пример*/}
      {/*<FirstExample/>*/}
      {/*  2 пример*/}
      {/*<SecondExample/>*/}
      {/*  3 пример TODO не забыть отклчить materialize*/}
      {/*<ThirdExample/>*/}
      {/*  4 пример TODO не забыть отклчить materialize*/}
      {/*<FourthExample/>*/}
      {/*5 Пример*/}
      {/*<FifthExample/>*/}
      {/*6 Пример*/}
      {/*<SixthExample/>*/}

      {/*1 Задание*/}
      {/*<FirstTask/>*/}
      {/*2 Задание*/}
      {/*<SecondTask/>*/}
        {/*3 Задание*/}
        {/*<ThirdTask/>*/}
        {/*4 Задание*/}
        {/*<FourthTask/>*/}
        {/*5 Задание*/}
        {/*<FifthTask/>*/}
        {/*6 Задание*/}
        {/*<SixthTask/>*/}
        {/*7 Задание*/}
        {/*<SeventhTask/>*/}
        {/*8 Задание*/}
        <EightTask/>
    </div>
  );
}

export default App;
