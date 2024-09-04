// import React, { useState, useEffect, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import ExamConfirmationPopup from '../popups/ExamConfirmationPopup';
// import { AuthContext } from '../../context/AuthContext'; // Adjust path as needed

// const StudentExam = () => {
//   const { id } = useParams(); // Exam ID from the URL
//   const { user } = useContext(AuthContext); // Get user from context
//   const navigate = useNavigate(); // Initialize useNavigate
//   const [exam, setExam] = useState(null);
//   const [selectedOptions, setSelectedOptions] = useState({});
//   const [showSubmitPopup, setShowSubmitPopup] = useState(false);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/exams/${id}`)
//       .then(response => {
//         console.log('Fetched exam data:', response.data); // For debugging
//         setExam(response.data);
//       })
//       .catch(error => console.error('Error fetching exam:', error));
//   }, [id]);

//   const handleOptionChange = (questionId, selectedOption) => {
//     setSelectedOptions(prev => ({ ...prev, [questionId]: selectedOption }));
//   };

//   const handleSubmitClick = () => {
//     setShowSubmitPopup(true);
//   };

//   const handleConfirmSubmit = () => {
//     if (!user || !id) {
//       console.error('Student ID or Exam ID is missing');
//       return;
//     }

//     if (!exam || !exam.questions || exam.questions.length === 0) {
//       console.error('No questions found in the exam');
//       return;
//     }

//     const questionsData = exam.questions.map(question => {
//       const selectedOption = selectedOptions[question._id] || null;
//       const correctOption = question.correctAnswer;
//       const isCorrect = selectedOption === correctOption;

//       return {
//         questionId: question._id,
//         questionText: question.questionText,
//         selectedOption: selectedOption,
//         correctOption: correctOption,
//         isCorrect: isCorrect
//       };
//     });

//     const studentExamData = {
//       studentId: user._id, // Use user ID from context
//       examId: id,
//       examTitle: exam.examTitle,
//       questions: questionsData,
//       score: questionsData.filter(q => q.isCorrect).length,
//       attendedAt: new Date()
//     };

//     console.log('Submitting student exam data:', studentExamData); // Debugging the final data

//     axios.post(`http://localhost:5000/api/student-exams/submit`, studentExamData) // Adjusted endpoint
//       .then(response => {
//         console.log('Exam submitted:', response.data);
//         navigate(`/result/${response.data._id}`); // Navigate to the result page with the exam ID
//       })
//       .catch(error => {
//         console.error('Error submitting exam:', error);
//         alert('There was an error submitting the exam. Please try again.'); // User-friendly message
//       });

//     setShowSubmitPopup(false);
//   };

//   if (!exam) return <div>Loading...</div>;

//   return (
//     <div className="student-exam">
//       <h2>{exam.examTitle}</h2>
//       <p>Time Limit: {exam.timeLimit} minutes</p>
//       <form onSubmit={(e) => { e.preventDefault(); handleSubmitClick(); }}>
//         {exam.questions.map(question => (
//           <div key={question._id} className="question-card">
//             <h3>{question.questionText}</h3>
//             {question.options.map((option, index) => (
//               <label key={index} className="option-label">
//                 <input 
//                   type="radio" 
//                   name={question._id} 
//                   value={option}
//                   checked={selectedOptions[question._id] === option}
//                   onChange={() => handleOptionChange(question._id, option)}
//                 />
//                 {option}
//               </label>
//             ))}
//             <button 
//               type="button" 
//               className="reset-btn" 
//               onClick={() => setSelectedOptions(prev => ({ ...prev, [question._id]: '' }))}
//             >
//               Clear Answer
//             </button>
//           </div>
//         ))}
//         <button type="submit" className="submit-btn">Submit Exam</button>
//       </form>

//       {showSubmitPopup && 
//         <ExamConfirmationPopup 
//           message="Are you sure you want to submit the exam?" 
//           onConfirm={handleConfirmSubmit} 
//           onCancel={() => setShowSubmitPopup(false)} 
//         />}
//     </div>
//   );
// };

// export default StudentExam;
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ExamConfirmationPopup from '../popups/ExamConfirmationPopup';
import { AuthContext } from '../../context/AuthContext';
import './StudentExam.css'; // Assuming you'll add CSS for styling

const StudentExam = () => {
  const { id } = useParams(); // Exam ID from the URL
  const { user } = useContext(AuthContext); // Get user from context
  const navigate = useNavigate(); // Initialize useNavigate
  const [exam, setExam] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showSubmitPopup, setShowSubmitPopup] = useState(false);
  const [totalTimeLeft, setTotalTimeLeft] = useState(0); // Total exam time left
  const [questionTimers, setQuestionTimers] = useState({}); // Timers for each question

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/exams/${id}`);
        console.log('Fetched exam data:', response.data); // For debugging
        setExam(response.data);

        // Set total exam time in seconds
        setTotalTimeLeft(response.data.timeLimit * 60);

        // Initialize timers for each question
        const initialQuestionTimers = response.data.questions.reduce((acc, question) => {
          acc[question._id] = response.data.questionLimit * 60; // Set question limit per question in seconds
          return acc;
        }, {});
        setQuestionTimers(initialQuestionTimers);
      } catch (error) {
        console.error('Error fetching exam:', error);
      }
    };

    fetchExam();
  }, [id]);

  useEffect(() => {
    const totalTimer = setInterval(() => {
      setTotalTimeLeft(prevTime => {
        if (prevTime <= 0) {
          handleSubmitClick();
          clearInterval(totalTimer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Set up the beforeunload event listener
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; // Required for the confirmation dialog to appear
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearInterval(totalTimer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const timers = Object.keys(questionTimers).map(questionId => {
      return setInterval(() => {
        setQuestionTimers(prevTimers => {
          const updatedTimers = { ...prevTimers };
          if (updatedTimers[questionId] > 0) {
            updatedTimers[questionId] -= 1;
          }
          return updatedTimers;
        });
      }, 1000);
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, [questionTimers]);

  const handleOptionChange = (questionId, selectedOption) => {
    setSelectedOptions(prev => ({ ...prev, [questionId]: selectedOption }));
  };

  const handleSubmitClick = () => {
    setShowSubmitPopup(true);
  };

  const handleConfirmSubmit = async () => {
    if (!user || !id) {
      console.error('User ID or Exam ID is missing');
      return;
    }

    if (!exam || !exam.questions || exam.questions.length === 0) {
      console.error('No questions found in the exam');
      return;
    }

    const questionsData = exam.questions.map(question => {
      const selectedOption = selectedOptions[question._id] || null;
      const correctOption = question.correctAnswer;
      const isCorrect = selectedOption === correctOption;

      return {
        questionId: question._id,
        questionText: question.questionText,
        selectedOption: selectedOption,
        correctOption: correctOption,
        isCorrect: isCorrect
      };
    });

    const studentExamData = {
      studentId: user._id, // Use user ID from context
      examId: id,
      examTitle: exam.examTitle,
      questions: questionsData,
      score: questionsData.filter(q => q.isCorrect).length,
      attendedAt: new Date()
    };

    console.log('Submitting student exam data:', studentExamData); // Debugging the final data

    try {
      const response = await axios.post(`http://localhost:5000/api/student-exams/submit`, studentExamData);
      console.log('Exam submitted:', response.data);
      navigate(`/result/${response.data._id}`); // Navigate to the result page with the exam ID
    } catch (error) {
      console.error('Error submitting exam:', error);
      alert('There was an error submitting the exam. Please try again.');
    }

    setShowSubmitPopup(false);
  };

  if (!exam) return <div>Loading...</div>;

  return (
    <div className="student-exam">
      <h2>Exam Name : {exam.examTitle}</h2>
      <p>Total Exam Time Left: {Math.floor(totalTimeLeft / 60)}:{totalTimeLeft % 60}</p>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmitClick(); }}>
        {exam.questions.map(question => (
          <div key={question._id} className="question-card">
            <div className="exam-time-limit">Question Time Limit: {Math.floor(questionTimers[question._id] / 60)}:{questionTimers[question._id] % 60}</div>
            <button 
              type="button" 
              className="reset-btn" 
              disabled={questionTimers[question._id] <= 0}
              onClick={() => setSelectedOptions(prev => ({ ...prev, [question._id]: '' }))}
            >
              Clear Answer
            </button>
            <h3>{question.questionText}</h3>
            {/* <p className="timer">Time Left: {Math.floor(questionTimers[question._id] / 60)}:{questionTimers[question._id] % 60}</p> */}
            
            <div className="option-container">
              {question.options.map((option, index) => (
                <label key={index} className="option-label">
                  <input 
                    type="radio" 
                    name={question._id} 
                    value={option}
                    disabled={questionTimers[question._id] <= 0}
                    checked={selectedOptions[question._id] === option}
                    onChange={() => handleOptionChange(question._id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
           
          </div>
        ))}
        <button type="submit" className="submit-btn">Submit Exam</button>
      </form>

      {showSubmitPopup && 
        <ExamConfirmationPopup 
          message="Are you sure you want to submit the exam?" 
          onConfirm={handleConfirmSubmit} 
          onCancel={() => setShowSubmitPopup(false)} 
        />}
    </div>
  );
};

export default StudentExam;



