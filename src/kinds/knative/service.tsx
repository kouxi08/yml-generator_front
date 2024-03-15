import React, { useState } from 'react';

const PodForm = () => {
  const [serviceName, setServiceName] = useState('');
  const [containersName, setContainersName] = useState('');
  const [containersImage, setContainersImage] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // ここでフォームのデータを処理する
//     console.log('Form submitted:', { serviceName, containersName, containersImage });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h3>metadata</h3>
//       <label>
//         name:
//         <input type="text" name='metadata_name' value={serviceName} onChange={(e) => setServiceName(e.target.value)} />
//       </label>
//       <h3>spec</h3>
//       <p>containers</p>
//       <label>
//         name:
//         <input type="text" name='containers_name' value={containersName} onChange={(e) => setContainersName(e.target.value)} />
//       </label><br />
//       <label>
//         image:
//         <input type="text" name='containers_image' value={containersImage} onChange={(e) => setContainersImage(e.target.value)} />
//       </label>
//       <input type='submit' value="submit" />
//     </form>
//   );
};

export default PodForm;