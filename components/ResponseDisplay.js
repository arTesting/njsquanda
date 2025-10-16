// file: /components/ResponseDisplay.js
const ResponseDisplay = ({ data, error, loading }) => {
  let content;

  if (loading) {
    content = "Loading...";
  } else if (error) {
    content = `Error: ${error.message}`;
  } else if (data) {
    console.log("Data from OpenAI API in display: ", data.result);

    try {
      const parsed = JSON.parse(data.result);
      content = (
        <>
          <p>
            <b>Interviewer:</b> {parsed.greeting}
          </p>
          <p>
            <b>Your Original Question:</b> {parsed.original_question}
          </p>
          {parsed.question ? (
            <p>
              <b>Question you maybe asked:</b> {parsed.question}
            </p>
          ) : (
            <p>
              <b>Your answer:</b> {parsed.answer}
            </p>
          )}
          <p>
            <b>Explanation:</b> {parsed.explanation}
          </p>
        </>
      );
    } catch (parseError) {
      content = <p>Invalid response: {data.result}</p>;
    }
  } else {
    content = (
      <center>
        <div className="loader"></div>
      </center>
    );
  }

  return (
    <div className="card mt-3">
      <div className="card-body">{content}</div>
    </div>
  );
};

export default ResponseDisplay;
