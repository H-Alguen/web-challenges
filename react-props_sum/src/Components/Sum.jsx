function Sum({ valueA, valueB }) {
  const result = valueA + valueB;

  return (
    <div>
      <h2>Calculate Sum:</h2>
      <p>
        {valueA} + {valueB} = {result}
      </p>
    </div>
  );
}

export default Sum;
