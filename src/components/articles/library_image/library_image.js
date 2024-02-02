// import React, { useEffect, useState } from "react";
// import storage from "../../../firebaseConfig"; 
// const LibraryImage = () => {
//     const [imageUrls, setImageUrls] = useState([]);

//     useEffect(() => {
//       // Đường dẫn đến thư mục "images" trong Firebase Storage
//       const folderPath = "images/";
  
//       // Tạo tham chiếu đến Firebase Storage cho thư mục "images"
//       const storageRef = storage.storage().ref(folderPath);
  
//       // Lấy danh sách tất cả các tệp tin trong thư mục "images"
//       storageRef.listAll().then((result) => {
//         // Duyệt qua danh sách các tệp tin và lấy URL của chúng
//         const promises = result.items.map((item) => item.getDownloadURL());
        
//         // Đợi tất cả các promises hoàn thành
//         Promise.all(promises).then((urls) => {
//           setImageUrls(urls);
//         });
//       });
//     }, []);
  
//     return (
//       <div>
//         {imageUrls.map((url, index) => (
//           <img key={index} src={url} alt={`Image ${index}`} />
//         ))}
//       </div>
//     );
// };

// export default LibraryImage;