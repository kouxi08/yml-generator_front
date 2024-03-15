import React, { useState, ChangeEventHandler, FormEventHandler } from 'react';
// import hjs from 'highlight.js'
// import parse from 'html-react-parser';
import 'highlight.js/styles/hybrid.css'
import PodForm from './kinds/kubrnetes/pod'

//各サービスの定義(仮)
const manifest_kinds = [
  {name: "kubernetes", kinds:["Pod", "ReplicaSet", "Deployment", "Service", "PV", "PVC", "Ingress"]},
  {name: "Knative", kinds:["Service"]}
];

const Yml = () => {

  const [selectedResource, setSelectedResource] = useState(null);
  const handleResourceClick = (kind: any) => {
    setSelectedResource(kind);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Manifest GENERATOR</h2>
      </header>
      {manifest_kinds.map(({name, kinds})=> (
        <li>
          <a href='#'>{name}</a>
          <ul>
            {kinds.map(kind =>
              <li key={kind}>
                <a href='#' onClick={() => handleResourceClick(kind)}>{kind}</a>
              </li>)}
          </ul>
        </li>
      ))}
       {selectedResource === "Pod" && <PodForm />}
    </div>
  );
}

export default Yml;