export const fetchQuiz = () => {
    return async (dispatch) =>{
        try {
        const res = await fetch (
            "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz"
        );
        const data = await res.json();
        dispatch({type : 'FETCH_QUIZ_SUCCESS',payload: data});
        } catch (error) {
            dispatch({type : "FETCH_QUIZ_FAILURE",payload : error.message})
        }
    }
}

export const submitAnswer = (answer) =>{
    return{type : "SUBMIT_ANSWER",payload:answer}
}

   
       
  
