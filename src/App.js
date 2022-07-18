import './App.css';
import Soma from './Soma/Soma';
import Subtracao from './Subtracao/Subtracao';
import Multiplicacao from './Multiplicacao/Multiplicacao';
import Divisao from './Divisao/Divisao';
 

//function BemVindo(props){

//  return <h1>Oi, {props.name}</h1>
//}
//const nome = <BemVindo name="lkfdfh" />

//const BemVindo = (props) => <h3>Bem vindo</h3>

// const Turma = (props) => {
//   return(
//     <div>
//       <Aluno nome={props.nome} nota={props.nota} idade={props.idade} />
//     </div>
//   );
// }

// const Aluno = (props) => {
//   return(
//     <div>
//       <h2>O aluno(a) {props.nome} tirou {props.nota}</h2>
//       <h4>A idade de {props.nome} é {props.idade}</h4>
//     </div>
//   );
// }

// const Usuario = (props) => {
//   return (
//     <div>
//       <Login username={props.username} senha={props.senha} idade={props.idade} email={props.email} />
//     </div>
//   );
// }

// const Login = (props) => {
//   return(
//     <div> 
//       <h1>Usuário {props.username} logado!</h1>
//       <h2>Dados cadastrados</h2>
//       <h4>Username: {props.username}</h4>
//       <h4>Senha: {props.senha}</h4>
//       <h4>Idade: {props.idade}</h4>
//       <h4>Email: {props.email}</h4>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      {/* <Usuario username="Gabriel" senha="senha123" idade="22" email="rogerinho@gmail.com"/> */}
      <Soma a={3} b={3}/>
      <Subtracao a={5} b={3}/>
      <Multiplicacao a={3} b={3}/>
      <Divisao a={10} b={2}/>
    </div>
  );
}

export default App;