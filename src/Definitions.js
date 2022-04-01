import React from "react";

export default function Definitions(props) {
  function setExample(definition) {
    if (definition.example) {
      return <div className="example">"{definition.example}"</div>;
    }
  }

  return (
    <div>
      {props.props.definition[0].meanings[props.index].definitions.map(
        function (definition, index) {
          return (
            <div key={index} className="Definition">
              {index + 1}. {definition.definition}
              <div>{setExample(definition)}</div>
            </div>
          );
        }
      )}
    </div>
  );
}
