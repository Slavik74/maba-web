import {React, useState} from 'react';
import { Form, FormElement } from '@progress/kendo-react-form';
import { Input, NumericTextBox } from '@progress/kendo-react-inputs';
import { Label } from "@progress/kendo-react-labels";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { Button } from "@progress/kendo-react-buttons";
import { DropDownList, AutoComplete } from '@progress/kendo-react-dropdowns';
import { identifyCalibratedItem } from '../../data/identifyCalibratedItem';
import SignWeb from '../../components/SignForm/SignWeb';
import { Formik } from 'formik';
import './OvenForm.css'

      /*Components of Date */
      const DatePickerInput = (fieldRenderProps) => {

        return (
          <div>
           <DatePicker defaultValue={fieldRenderProps.dateValue} style={{width: "150px",}} format="dd/MM/yyyy"></DatePicker>
          </div>
        );
      };
     

function OvenForm(range) {
    //const [ form, setForm ] = useState({})
    const [openSignForm, setOpenSignForm] = useState(false);
 
    // //To update the state of form
    // const setField = (field, value) => {
    //     setForm({
    //       ...form,
    //       [field]: value
    //     })

    const handleCancelSignForm = () => {
      setOpenSignForm(false);
    };

    const OpenSignForm = () =>{
      setOpenSignForm(true);
    }

    function SigImageCallback1(str) {
       range.range.CalibratorSignature = str;
    }
    return (
        <div>
            <div className='card'>
                <Formik 
                initialValues={{
                    CalibrationLocation: range.range.CalibrationLocation,
                    lastName: '',
                    email: '',
                  }}>
                <Form 
                    // onSubmit={handleSubmit}Missing script: "start"
                    render={(formRenderProps) => 
                      (
                        <FormElement
                        style={{
                            maxWidth: 450,
                        }}>

                        <fieldset className={"k-form-fieldset"}>
                            <legend className={"k-form-legend"}>
                            <h2>?????????? ????????</h2> 
                            </legend>
                            <div className="mb-3">
                                 <Label>?????????? ??????????</Label> 
                                 <Input id="CalibrationLocation" name='CalibrationLocation' ></Input>
                            </div>
                            <div className="mb-3">
                                  <Label>???????? ???????????? ???? ????????????</Label> 
                                  <Input value={range.range.certificateNum}></Input>
                            </div>
                            <div className="mb-3">
                                  <Label>??????????</Label>
                                  <DatePickerInput dateValue={range.range.Date ? range.range.Date : new Date()}></DatePickerInput>

                            </div>
                            <div className="mb-10">
                                  <Label>???? ?????????? ????????????:&nbsp;</Label>
                                   <Input style={{width: "220px",}} value={range.range.CalibratorName}/>
                              <div className='div-sign'> 
                              <Button onClick={OpenSignForm} themeColor={"primary"}>...</Button> 
                                  <img src={range.range.CalibratorSignature ? "data:image/png;base64," + range.range.CalibratorSignature : ''} className='img-sign' alt='' />  
                              </div>
                            </div>
                            <div className="mb-3">
                              <legend className={"k-form-legend"}>
                                 <br/>
                              </legend>
                            </div>  
                            <div className="mb-3">
                                  <Label>???? ??????????:</Label> 
                                 <DropDownList style={{width: "200px",}} value={range.range.CustomerName}></DropDownList>
                            </div>
                            <div className="mb-3">
                                  <Label>?????????? ??????????:</Label> 
                                  <Input value={range.range.CustomerAddress}></Input>
                            </div>
                            <div className="mb-3">
                                  <Label>?????????? ?????????? ??????????????:</Label> 
                                  <AutoComplete style={{width: "300px",}}
                                      data={identifyCalibratedItem} // placeholder="e.g. Denmark"
                                    />
                            </div>
                            <div className="mb-3">
                                  <Label>????????:</Label> 
                                  <Input style={{width: "210px",}} value={range.range.Manufacturer}></Input>
                            </div>
                            <div className="mb-3">
                                  <Label>?????? :</Label> 
                                  <Input style={{width: "210px",}} value={range.range.Model}></Input>
                            </div>
                            <div className="mb-3">
                                  <Label>???? ????????????:</Label> 
                                  <Input style={{width: "210px",}} value={range.range.SerialNo}></Input>
                            </div>
                            <div className="mb-3">
                                  <Label>???????? ????????:</Label> 
                                  <Input style={{width: "210px",}} value={range.range.ContrllerManufacturer}></Input>
                            </div>
                            <div className="mb-3">
                                  <Label>?????? ????????:</Label> 
                                  <Input style={{width: "210px",}} value={range.range.ContrllerModel}></Input>
                            </div>
                            <div className="mb-3">
                                  <Label>?????? ????????:</Label> 
                                  <Input style={{width: "210px",}} value={range.range.ContrllerType}></Input>
                            </div>
                          <div className="mb-5">
                            <Label> ???????? ??????????:</Label>    
                           
                               <div className='temperture'>????????????????</div> 

                                   <div className='temperture'> 
                                      <NumericTextBox className='temperture' style={{width: "90px",}} value={range.range.MeasurementRangeMin}></NumericTextBox>
                                   </div>
                                   <div className='temperture'> 
                                       <NumericTextBox className='temperture' style={{width: "90px",}} value={range.range.MeasurementRangeMax}></NumericTextBox>
                                   </div>
                                   
                              
                            </div>
                            <div className="mb-3">
                                  <Label>?????????? ??????????:</Label> 
                                  <Input style={{width: "210px",}} value={range.range.Resolution}></Input>
                            </div>
                            <div className="mb-5">
                              <Label>?????? ????????:</Label>
                              <div>
                              <div className='temperture'> 
                                      <NumericTextBox className='temperture' style={{width: "90px",}} value={range.range.AccuracyLevelMin}></NumericTextBox>
                                   </div>
                                   <div className='temperture'> 
                                       <NumericTextBox className='temperture' style={{width: "90px",}} value={range.range.AccuracyLevelMax}></NumericTextBox>
                                   </div>
                              </div>
                            </div>
                            <div className="mb-3">
                                  <Label>?????????? ?????????????????? ????????????????:</Label> 
                                 <DropDownList style={{width: "200px",}} value={range.range.VisualAndFunctionalInspection}></DropDownList>
                            </div>
                            <div className="mb-3">
                                  <Label>?????????? ??????????:</Label>
                                  <DatePickerInput dateValue={range.range.CalibrationDate ? range.range.CalibrationDate : null}></DatePickerInput>

                            </div>
                            <div className="mb-3">
                                  <Label>?????????? ?????????? ?????????? ??????:</Label>
                                  <DatePickerInput dateValue={null}></DatePickerInput>

                            </div>

                            <div className="mb-3">
                              <Label>???????????????? ???????? ??????????:</Label>
                              <div className='temperture'> 
                                      <NumericTextBox className='temperture' style={{width: "90px",}} value={range.range.EnvironmentalConditionsTemperatureMin}></NumericTextBox>
                                   </div>
                                   <div className='temperture'> 
                                       <NumericTextBox className='temperture' style={{width: "90px",}} value={range.range.EnvironmentalConditionsTemperatureMax}></NumericTextBox>
                               </div>
                            </div>
                            <div className="mb-3">
                              <legend className={"k-form-legend"}>
                                <br/>
                              </legend>
                            </div> 
                            <div className="mb-3">
                                  <h4>?????????? ??????????</h4>  
                            </div>
                            <div className="mb-3">
                                  <Label>???? ??????????:</Label>
                                  <DropDownList style={{width: "200px",}} value={range.range.ProcedureNo}></DropDownList>
                            </div>
                            { <div className="mb-3">
                                <h4>?????????? ?????????? ??????????</h4> 
                                  <AutoComplete style={{width: "300px",}} value={range.range.CalibrationProcessDescription}
                                       placeholder="Checked by placing T/C???"

                                    />
                            </div>  }
                      </fieldset>
                        {/* <div className="k-form-buttons">
                            <button
                            type={"submit"}
                            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                            disabled={!formRenderProps.allowSubmit}>
                            Submit
                            </button>
                        </div> */}
          
                        </FormElement>
                      )}/></Formik>
                 {openSignForm && (
                 <SignWeb signData={range.range.CalibratorSignature} parentCallback={ SigImageCallback1 } closeSignWeb={handleCancelSignForm}  ></SignWeb>
         
          )}
              
                </div>
        </div>
    );
}

export default OvenForm;