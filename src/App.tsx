import React, { useState, ChangeEventHandler, FormEventHandler } from 'react';
// import hjs from 'highlight.js'
// import parse from 'html-react-parser';
import 'highlight.js/styles/hybrid.css'


const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const metadata_name= form.get("metadata_name") || "";
    const containers_name= form.get("containers_name") || "";
    const containers_image= form.get("containers_image") || "";
    alert(`metadata_name: ${metadata_name} containers_name: ${containers_name} containers_image: ${containers_image}`);
  };


//各サービスの定義(仮)
const manifest_kinds = [
  {name: "kubernetes", kinds:["Pod", "ReplicaSet", "Deployment", "Service", "PV", "PVC", "Ingress"]},
  {name: "Knative", kinds:["Service"]}
];


const Yml = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Manifest GENERATOR</h2>
      </header>
      {manifest_kinds.map(({name, kinds})=> (
        <li>
          <a href='#'>{name}</a>
          <ul>
            {kinds.map(kind => <li key={kind}><a href='#'>{kind}</a></li>)}
          </ul>
        </li>
      ))}
      {/* とりあえずpodの入力項目をベタ書き */}
    </div>
  );
}

export default Yml;