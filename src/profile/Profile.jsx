import React from 'react'
const Profile = ({fullName = "kahina", ...restProps})=>{
    let profileStyle = {
        
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        borderRadius :"15px",
        backgroundColor: '#ECECEC',
        height: "500px",
        width :"500px",
        marginBottom: "30px"
    }
    let buttonStyle ={
        outline: "none",
        padding: '10px 10px',
        borderRadius: '10px',
        backgroundColor: 'purple',
        color:'white',
        border: 'none',
        margin:'10px'
    }
  return (
    <div style={profileStyle}>
        <div><button style={buttonStyle} onClick={() => restProps.alertMyName(`My name is ${fullName} `)}>
            Alert My Name
        </button></div>
            {restProps.children}
            <p>{`hello ${fullName} ,  ${restProps.bio}, ${restProps.profession}`}</p>
    </div>
  )
}
Profile.propTypes = {
    fullName:"String"
   };

export default Profile




