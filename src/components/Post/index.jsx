
function Post(props){
  return(
    <div className="post mx-2">
      <div className="img-post"></div>
      <h5>{props.subtitle}</h5>
      <h3>{props.title}</h3>
      <p className="mt-1">
        {props.children}        
      </p>
      <div className="flex pt-2">
        <div className="img-profile"></div>
        <div className="desc-profile  ml-2">
          <h6 className="color-blue">Cleisianne Leite</h6>
          <p>Jan 6, 2023 - 8 min read</p>
        </div>
      </div>
    </div>
  )
}

// Destruturando
// function Post({subtitle, title, children}){
//   return(
//     <div className="post mx-2">
//       <div className="img-post"></div>
//       <h5>{subtitle}</h5>
//       <h3>{title}</h3>
//       <p className="mt-1">
//         {children}        
//       </p>
//       <div className="flex pt-2">
//         <div className="img-profile"></div>
//         <div className="desc-profile  ml-2">
//           <h6 className="color-blue">Cleisianne Leite</h6>
//           <p>Jan 6, 2023 - 8 min read</p>
//         </div>
//       </div>
//     </div>
//   )
// }


export default Post