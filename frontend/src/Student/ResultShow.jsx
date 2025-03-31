import React ,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap
import axios from "axios";
import { useParams } from 'react-router-dom'; 

function ResultCard() {
  const [data, setData] = useState({ student: { name: "", rollno: "", subject: [] } });  
  const [loading ,setLoading]=useState(true);
  const { id } = useParams(); 
  useEffect(()=>{
    axios.get(`http://localhost:4000/teacher/showResult/${id}`)
    .then((res)=>{
      console.log(res.data);
      setData(res.data)
      setLoading(false)
    })
    .catch((e)=>{
      console.log(e);
    })
  },[])
  if (loading) {
    return <h2 className="text-center">Loading...</h2>;    
  }

  if (!data) {
    return <h2 className="text-center">No Data Found!</h2>;
  }

  const totalMarks = data.subject?.reduce((acc, sub) => acc + sub.mark, 0) || 0;
  return (
   
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-4">
          <h2>Name: <span >{data.student.name}</span></h2>
          <h3>Roll No: <span>{data.student.rollno}</span></h3>
        </div>
      </div>

      {/* Table Section */}
      <div className="row">
        <div className="col-8">
          <table className="table  text-center">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {data.student.subject.map((sub,index)=>(
              <tr key={index}>
                <td>{sub.name}</td>
                <td>{sub.mark}</td>
                <td>{sub.mark >= 90 ? "A+" : sub.mark >= 75 ? "A" : sub.mark >= 50 ? "B" : "C"}</td>
              
              </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Total --
                </td>
                <td>
                  {totalMarks}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default ResultCard;
