import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaGlobe, FaRupeeSign, FaCalendar, FaClock, FaList, FaCaretDown } from 'react-icons/fa';

function InputField({ id, heading, placeholder, icon, required, hasCaretDown, isLast }) {
  const inputContainerStyle = {
    display: 'flex',
    backgroundColor: id === 11 ?  '#2c3968' :'white',
    borderRadius: '6px',
    padding: '6px',
    width: '1100px',
    marginBottom:  '10px',
    position: 'relative',
  };

  const inputStyle = {
    border: 'none',
    flex: 1,
    marginLeft: '8px',
    textAlign: id === 11 ? 'center' : 'left', // Center the text for the "Add lead" input
    backgroundColor: id === 11 ? '#2c3968' : 'transparent', // Set background color to #2c3968 for "Add lead" input
    color: id === 11 ? 'white' : 'black', // Set text color to white for "Add lead" input
    
  };

  const iconStyle = {
    color: '#318CE7',
  };

  const requiredStyle = {
    color: 'red',
    marginRight: '4px',
  };

  const caretDownStyle = {
    position: 'absolute',
    top: '50%',
    right: '8px',
    color: '#318CE7',
  };

  const textareaStyle = {
    border: 'none',
    flex: 1,
    marginLeft: '8px',
    resize: 'vertical', 
  };

  return (
    <div>
      <h6 className="heading" style={{ marginTop: isLast ? '28px' : '0px' }}>
        {heading} {required && <span style={requiredStyle}>*</span>}
      </h6>
      <div style={inputContainerStyle}>
        <span className="input-icon" style={iconStyle}>
          {icon}
        </span>
        {id === 10 ? ( // Use a text area for id 10
          <textarea
            id={`exampleInput${id}`}
            placeholder={placeholder}
            className="form-control"
            rows={4} 
            style={textareaStyle}
          />
        ) : (
        
          <input
            type="text"
            id={`exampleInput${id}`}
            placeholder={placeholder}
            className="form-control"
            style={inputStyle}
          />
        )}
        {hasCaretDown && <FaCaretDown style={caretDownStyle} />}
      </div>
      {id === 4 && (
        <iframe
          title="Google Map"
          width="1100"
          height="200"
          frameBorder="0"
          style={{ border: 0, marginTop: '10px' }}
          src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(
            placeholder
          )}&key=AIzaSyA9p95oZ_wq2axnsVn23I9eXjfr-XIrF3Y`}
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}


function Main() {
  return (
    <>
      <div style={{ backgroundColor: '#e3f2fd', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
        <div className="container" style={{ maxWidth: '1000px', padding: '20px', marginLeft: '50px' }}>
          <InputField id={1} heading="Lead name" placeholder="Enter lead name" icon={<FaUser />} required={true} />
          <InputField id={2} heading="Email ID" placeholder="Example@anyemail.com" icon={<FaEnvelope />} required={true} />
          <InputField id={3} heading="Phone number" placeholder="+91880078863" icon={<FaPhone />} required={true} />
          <InputField id={4} heading="Address" placeholder="Gurugram, India" icon={<FaGlobe />} />
          <InputField id={5} heading="Sale value" placeholder="50,00,000" icon={<FaRupeeSign />} />
          <InputField id={6} heading="Date" placeholder="29 August 2023" icon={<FaCalendar />} />
          <InputField id={7} heading="Time" placeholder="20:21pm" icon={<FaClock />} />
          <InputField id={8} heading="Options" placeholder="Select option" icon={<FaList />} hasCaretDown={true} />
          <InputField id={9} heading="Products" placeholder="" icon={<FaList />} hasCaretDown={true} />
          <InputField id={10} heading="Note" placeholder="Enter note" isLast={true} marginTop="20px" />
          <InputField id={11}  placeholder="Add lead" isLast={true} marginTop="1000px"/>
          </div>
      </div>
    </>
  );
}

export default Main;
