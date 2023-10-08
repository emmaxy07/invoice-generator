import './App.css';
import invTemp1 from "../src/assets/inv template.jpg";
import invTemp2 from "../src/assets/inv template.jpg";
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import TableComponent from './components/Table';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputVal, setInputVal] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [tableComponents, setTableComponents] = useState([{ key: 0, isTableShown: false }]);
  const [isPreviewVisible, setIsPreviewVisisble] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [formData, setFormData] = useState({
    fromName: '',
    fromEmail: '',
    fromAddress: '',
    fromCountry: '',
    fromPostalCode: '',
    fromPhone: '',
    fromWebsite: '',
  
    billName: '',
    billEmail: '',
    billAddress: '',
    billCountry: '',
    billPostalCode: '',
    billPhone: '',
    billWebsite: '',
  });

  const addTable = () => {
    setTableComponents(prevTableComponents => [
      ...prevTableComponents,
      { key: prevTableComponents.length, isTableShown: true }
    ]);
  };

  const removeTable = (index) =>{
    setTableComponents(prevTableComponents => prevTableComponents.filter((_, i) => i !== index))
  }

  const toggleTable = (index) => {
    setTableComponents(prevTableComponents => {
      const updatedTableComponents = [...prevTableComponents];
      updatedTableComponents[index].isTableShown = !updatedTableComponents[index].isTableShown;
      return updatedTableComponents;
    });
  };

  function selectImage(invImage){
    setSelectedImage(invImage);
  }

  function handleInputChange(field, value){
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Get the first selected file (image)
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setImageUrl(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };


  const prevInvoice = () =>{
    console.log("preview");
    setIsPreviewVisisble(!isPreviewVisible);
  }

  const closePreview = () => {
    console.log("close preview");
    setIsPreviewVisisble(!isPreviewVisible);
  };
  

  return (
    <div className="App">
      <h1>Choose a template</h1>

      <div className='imgContainer'>
      <img src={invTemp1} className={`${selectedImage === 'invTemp1' ? 'selected' : 'invImage'}`} alt='invoice template one' width="300px" height="400px" onClick={()=>selectImage('invTemp1')} />
      <img src={invTemp2} className={`${selectedImage === 'invTemp2' ? 'selected' : 'invImage'}`} alt='invoice template one' width="300px" height="400px" onClick={()=>selectImage('invTemp2')} />
      </div>

      <section className='invoice-section'>
        { !isPreviewVisible ?
          <> 
        <div className='invoice'>
          
          <input className="invoice-input" value={inputVal} onChange={handleInputChange} type='text' placeholder='Enter Business Name' />

          <div className='invoice-img'>
          <div>{imageUrl && (<img src={imageUrl} width="100px" height='80px' alt='' />)}</div> 
           <label htmlFor='upload' style={{marginLeft: '3px'}}><span>Choose Logo</span></label><input id='upload' type='file' accept="image/*" placeholder='Upload Logo' onChange={handleImageUpload} />
          </div>

          <div className='forms'>
          <form className='from'>
          <h3>From:</h3>
          <div className='form-group'><label>Name</label> <input type='text' placeholder='Name' value={formData.fromName} onChange={(e) => handleInputChange('fromName', e.target.value)} /><br /></div> 
           <div className='form-group'><label>Email</label> <input type='text' placeholder='Email' value={formData.fromEmail} onChange={(e) => handleInputChange('fromEmail', e.target.value)}  /><br /></div>   
           <div className='form-group'><label>Address</label> <input type='text' placeholder='Street' value={formData.fromAddress} onChange={(e) => handleInputChange('fromAddress', e.target.value)} /><br /></div>
           <div className='form-group'><label></label><input type='text' placeholder='City, State, Country' value={formData.fromCountry} onChange={(e) => handleInputChange('fromCountry', e.target.value)}  /><br /> </div>
          <div className='form-group'><label></label><input type='text' placeholder='Postal Code' value={formData.fromPostalCode} onChange={(e) => handleInputChange('fromPostalCode', e.target.value)}  /><br /> </div>
           <div className='form-group'><label>Phone</label> <input type='text' placeholder='(123) 456 789' value={formData.fromPhone} onChange={(e) => handleInputChange('fromPhone', e.target.value)}  /><br /></div>
          <div className='form-group'><label>Website</label> <input type='text' placeholder='https://www.example.com' value={formData.fromWebsite} onChange={(e) => handleInputChange('fromWebsite', e.target.value)}  /></div>
          </form>

          <form className='bill'>
          <h3>Bill To:</h3>
          <div className='form-group'><label>Name</label> <input type='text' placeholder='Name' value={formData.billName} onChange={(e) => handleInputChange('billName', e.target.value)} /><br /></div> 
           <div className='form-group'><label>Email</label> <input type='text' placeholder='Email' value={formData.billEmail} onChange={(e) => handleInputChange('billEmail', e.target.value)} /><br /></div>   
           <div className='form-group'><label>Address</label> <input type='text' placeholder='Street' value={formData.billAddress} onChange={(e) => handleInputChange('billAddress', e.target.value)} /><br /></div>
           <div className='form-group'><label></label><input type='text' placeholder='City, State, Country' value={formData.billCountry} onChange={(e) => handleInputChange('billCountry', e.target.value)} /><br /> </div>
          <div className='form-group'><label></label><input type='text' placeholder='Postal Code' value={formData.billPostalCode} onChange={(e) => handleInputChange('billPostalCode', e.target.value)} /><br /> </div>
           <div className='form-group'><label>Phone</label> <input type='text' placeholder='(123) 456 789' value={formData.billWebsite} onChange={(e) => handleInputChange('billWebsite', e.target.value)} /><br /></div>
          </form>

          <br/>
          <br />
          </div>

          <div className='invoice-border'></div>
          
          <div>
          {tableComponents.map((table, index) => (
            <div key={table.key}>
              <div className='btn-and-table'>
              <div className="svg-btn">
                <button onClick={() => removeTable(index)}>
                  <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
                    <text
                      x="50%"
                      y="70%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fill="black"
                      fontSize="14"
                      fontWeight="bold"
                    >
                      X
                    </text>
                  </svg>
                </button>
              </div>
              <TableComponent
                index={index}
                isTableShown={table.isTableShown}
                toggleTable={toggleTable}
              />
              </div>
            </div>
          ))}
                <div className="plus-btn">
                  <button onClick={addTable}>
                    <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
                      <text
                        x="50%"
                        y="70%"
                        dominantBaseline="middle"
                        textAnchor="middle"         
                        fontSize="14"
                        fontWeight="bold"
                        color="white"
                      >
                        +
                      </text>
                    </svg>
                  </button>
                </div>
        </div>
        </div>
         </> : 
          "here is the pdf preview"
           }

        <div className='actions'>
          <strong>ACTIONS</strong>
          <div className='action-btn'>
          <button className='preview' onClick={()=>{isPreviewVisible ? closePreview() : prevInvoice()}}><strong>{isPreviewVisible ? "BACK TO EDIT" : "PREVIEW INVOICE"}</strong></button>
          <button className='download'><strong>DOWNLOAD PDF</strong></button>
          </div>
        </div>
      </section>

      {isPreviewVisible && (
        <div className='overlay'>
          <div className='invoice-preview'>
            <button className='close-button' onClick={closePreview}>Close</button>
            <Document file="path/to/your/invoice.pdf" onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
