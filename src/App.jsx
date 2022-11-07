import { useState } from "react";
import "./styles.css";

function App() {
  const [grades, setGrades] = useState({ 
    bancoDeDados: {
      studentsAmount: 0,
      averageGrade: 0
    },
    frontEnd: {
      studentsAmount: 0,
      averageGrade: 0
    },
    backEnd: {
      studentsAmount: 0,
      averageGrade: 0
    },
  })
  const [formData, setFormData] = useState({subject: "", grade: ""})
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData, grades)
    const amount = grades.bancoDeDados.studentsAmount + 1
    const average = grades.bancoDeDados.averageGrade
    if (formData.subject == 'database') setGrades({...grades, bancoDeDados: {
      studentsAmount: amount,
      averageGrade: (average + formData.grade) / amount
    }})
    if (formData.subject == 'backend') setGrades({...grades, backEnd: {
      studentsAmount: amount,
      averageGrade: (average + formData.grade) / amount
    }})
    if (formData.subject == 'frontend') setGrades({...grades, frontEnd: {
      studentsAmount: amount,
      averageGrade: (average + formData.grade) / amount
    }})
    console.log(formData, grades)
    // setGrades({...grades, subject. })
  }

  return (
    <div className="container">
      <h1>Média de Alunos por Disciplina</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">
          <select value={formData.subject} onChange={event => setFormData({...formData, subject: event.target.value})}>
            <option selected disabled>
              Selecione uma disciplina
            </option>
            <option value="database">Banco de Dados</option>
            <option value="backend">Desenvolvimento Backend</option>
            <option value="frontend">Desenvolvimento Frontend</option>
            <option value="devops">Devops</option>
          </select>
          <input value={formData.grade} onChange={event => setFormData({...formData, grade: event.target.value})} />
        </div>
        <input type="submit" value="Salvar" />
      </form>

      <div className="container">
        <table border="1" className="line_title">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Quantidade de Alunos</th>
              <th>Média das notas dos alunos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Banco de Dados</td>
              <td>{grades.bancoDeDados.studentsAmount || 0}</td>
              <td>{grades.bancoDeDados.averageGrade || 0}</td>
            </tr>

            <tr>
              <td>Desenvolvimento Frontend</td>
              <td>{grades.frontEnd.studentsAmount || 0}</td>
              <td>{grades.frontEnd.averageGrade || 0}</td>
            </tr>

            <tr>
              <td>Desenolvimento Backend</td>
              <td>{grades.backEnd.studentsAmount || 0}</td>
              <td>{grades.backEnd.averageGrade || 0}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
