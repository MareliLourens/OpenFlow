import React, { useState, useEffect } from "react";
import style from "./Style.Questions.module.scss";
import NavBarComponent from "../../components/NavBar-Component/Component.NavBar";
import QuestionComponent from "../../components/QuestionBox-Component/Component.QuestionBox.jsx";

const QuestionsRoute = () => {
  const [formData, setFormData] = useState({
    subject: "",
    description: "",
    author: "",
  });

  const [questions, setQuestions] = useState([]);

  const { subject, description, author } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the form data to your backend API here and update the questions list.
    // You may use Axios, Fetch, or any other library to make the API call.
    // After a successful response, update the questions state with the new data.
    try {
      const response = await fetch('/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setQuestions(data.questions); // Assuming your API returns the updated list of questions
      }
    } catch (error) {
      console.error('Error while submitting the form:', error);
    }
  };

  // Fetch the initial list of questions when the component mounts
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch('/api/questions');
        if (response.ok) {
          const data = await response.json();
          setQuestions(data.questions);
        }
      } catch (error) {
        console.error('Error while fetching questions:', error);
      }
    }
    fetchQuestions();
  }, []);

  return (
    <div className={style.main}>
      <div className={style.content}>
        <NavBarComponent />
        <h1 className={style.heading}> Questions </h1>
       
            <QuestionComponent/>
 
        </div>
      </div>
  );
};

export default QuestionsRoute;
