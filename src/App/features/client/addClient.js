import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addClient } from './clientApi';
import { InputText } from 'primereact/inputtext';
import { useNavigate,  } from "react-router-dom"; 

export const AddClient = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const save = async (data) => {
    try {
      const res = await addClient(data);
      alert("הצליח להוסיף משתמש");
      console.log(res);
    } catch (err) {
      alert("לא הצליח להרשם" + err.response.data.message);
      console.log(err);
    }
  };


  return (<>
    <div className="form-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}></div>
    <form onSubmit={handleSubmit(save)} className="form" style={{ textAlign: 'center' ,display:'flex',marginRight:'5px'}} >
      <div className='details' style={{marginRight:'5%',marginLeft:'33%'}}>
       <div className="input-wrapper" style={{ marginBottom: '14px' }}>
          <InputText id="clientFirstName" placeholder='clientFirstName'{...register("clientFirstName", { required: true, minLength: 3 })} style={{ padding: '8px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' }}/>
        {errors.clientFirstName && errors.clientFirstName.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.clientFirstName && errors.clientFirstName.type === "minLength" && (
          <span>clientFirstName must be at least 3 characters long</span>
        )}
        </div>
        <div className="input-wrapper"style={{ marginBottom: '14px' }}>
          <InputText placeholder='clientLastName' {...register("clientLastName", { required: true, minLength: 3 })} style={{ padding: '8px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' }}/>
        {errors.clientLastName && errors.clientLastName.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.clientLastName && errors.clientLastName.type === "minLength" && (
          <span>clientLastName must be at least 8 characters long</span>
        )}
        </div>
        <div className="input-wrapper" style={{ marginBottom: '14px' }}>
          <InputText placeholder='phone'{...register("phone", { required: true, })} style={{ padding: '8px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' }}/>
        {errors.phone && errors.phone.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.phone && errors.phone.type === "minLength" && (
          <span>Invalid phone </span>
        )}
        </div>
        <div className="input-wrapper" style={{ marginBottom: '14px' }}>
          <InputText placeholder='cellPhone'{...register("cellPhone", { required: true, })} style={{ padding: '8px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' }}/>
        {errors.cellPhone && errors.cellPhone.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.cellPhone && errors.cellPhone.type === "minLength" && (
          <span>Invalid cellPhone </span>
        )}
        </div>
        <div className="input-wrapper" style={{ marginBottom: '14px' }}>
          <InputText placeholder='OutComeDisease' {...register("OutComeDisease", { required: true, minLength: 3 })} style={{ padding: '8px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' }}/>
        {errors.OutComeDisease && errors.OutComeDisease.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.OutComeDisease && errors.OutComeDisease.type === "minLength" && (
          <span>OutComeDisease must be at least 8 characters long</span>
        )}
        </div>
        <div className="input-wrapper" style={{ marginBottom: '14px' }}>
          <InputText placeholder='recoveryDisease' {...register("recoveryDisease", { required: true, minLength: 3 })} style={{ padding: '8px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' }}/>
        {errors.recoveryDisease && errors.recoveryDisease.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.recoveryDisease && errors.recoveryDisease.type === "minLength" && (
          <span>recoveryDisease must be at least 8 characters long</span>
        )}
        </div>
        <div className="input-wrapper" style={{ marginBottom: '14px' }}>
          <InputText placeholder='city' {...register("city", { required: true, minLength: 3 })} style={{ padding: '8px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' }}/>
        {errors.city && errors.city.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.city && errors.city.type === "minLength" && (
          <span>city must be at least 8 characters long</span>
        )}
        </div>
        <div className="input-wrapper" style={{ marginBottom: '14px' }}>
          <InputText placeholder='street' {...register("street", { required: true, minLength: 3 })} style={{ padding: '8px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' }}/>
        {errors.street && errors.street.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.street && errors.street.type === "minLength" && (
          <span>street must be at least 8 characters long</span>
        )}
        </div>
        <div className="input-wrapper" style={{ marginBottom: '14px' }}>
          <InputText placeholder='img' {...register("img", { required: true, minLength: 3 })}  style={{ padding: '8px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' }}/>
        {errors.img && errors.img.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.img && errors.img.type === "minLength" && (
          <span>img must be at least 8 characters long</span>
        )}
        </div>
        <div className="input-wrapper" style={{ marginBottom: '14px' }}>
          <InputText placeholder='number' {...register("number", { required: true, minLength: 1 })} style={{ padding: '8px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' }}/>
        {errors.number && errors.number.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.number && errors.number.type === "minLength" && (
          <span>img must be at least 8 characters long</span>
        )}
        </div>
        </div>
        <div className='vaccination' style={{marginRight:'15%'}}>
        <h2>vaccination</h2>
        <ul>
          <li>
        <div className="input-wrapper" style={{ marginBottom: '14px' }}>
          
          <InputText placeholder='dateGet' {...register("dateGet", { required: true, minLength: 1 })} style={{ padding: '8px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' }}/>
        {errors.dateGet && errors.dateGet.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.dateGet && errors.dateGet.type === "minLength" && (
          <span>dateGet must be at least 8 characters long</span>
        )}
        </div>
        <div className="input-wrapper" style={{ marginBottom: '14px' }}>
          <InputText placeholder='manufacturer' {...register("manufacturer", { required: true, minLength: 1 })} style={{ padding: '8px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' }}/>
        {errors.manufacturer && errors.manufacturer.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.manufacturer && errors.manufacturer.type === "minLength" && (
          <span>manufacturer must be at least 8 characters long</span>
        )}
        </div>

        </li>   
        <li>
        <div className="input-wrapper" style={{ marginBottom: '14px' }}>
          <InputText placeholder='dateGet' {...register("dateGet", { required: true, minLength: 1 })} style={{ padding: '8px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' }}/>
        {errors.dateGet && errors.dateGet.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.dateGet && errors.dateGet.type === "minLength" && (
          <span>dateGet must be at least 8 characters long</span>
        )}
        </div>
        <div className="input-wrapper" style={{ marginBottom: '14px' }}>
          <InputText placeholder='manufacturer' {...register("manufacturer", { required: true, minLength: 1 })} style={{ padding: '8px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' }}/>
        {errors.manufacturer && errors.manufacturer.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.manufacturer && errors.manufacturer.type === "minLength" && (
          <span>manufacturer must be at least 8 characters long</span>
        )}
        </div>
         </li>
        <li> 
        <div className="input-wrapper" style={{ marginBottom: '14px' }}>
          <InputText placeholder='dateGet' {...register("dateGet", { required: true, minLength: 1 })} style={{ padding: '8px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' }}/>
        {errors.dateGet && errors.dateGet.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.dateGet && errors.dateGet.type === "minLength" && (
          <span>dateGet must be at least 8 characters long</span>
        )}
        </div>
        <div className="input-wrapper" style={{ marginBottom: '14px' }}>
          <InputText placeholder='manufacturer' {...register("manufacturer", { required: true, minLength: 1 })} style={{ padding: '8px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' }}/>
        {errors.manufacturer && errors.manufacturer.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.manufacturer && errors.manufacturer.type === "minLength" && (
          <span>manufacturer must be at least 8 characters long</span>
        )}
        </div>
        </li>
        <li>
        <div className="input-wrapper" style={{ marginBottom: '14px' }}>
          <InputText placeholder='dateGet' {...register("dateGet", { required: true, minLength: 1 })} style={{ padding: '8px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' }}/>
        {errors.dateGet && errors.dateGet.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.dateGet && errors.dateGet.type === "minLength" && (
          <span>dateGet must be at least 8 characters long</span>
        )}
        </div>
        <div className="input-wrapper" style={{ marginBottom: '14px' }}>
          <InputText placeholder='manufacturer' {...register("manufacturer", { required: true, minLength: 1 })} style={{ padding: '8px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' }}/>
        {errors.manufacturer && errors.manufacturer.type === "required" && (
          <span>This field is required</span>
        )}
        {errors.manufacturer && errors.manufacturer.type === "minLength" && (
          <span>manufacturer must be at least 8 characters long</span>
        )}
        </div>
        </li>  
         </ul>
        </div>
       
      <button type="submit"  style={{ padding: '6px',height: '80px', width: '10%', fontSize: '0.9em', fontWeight: 'bold' ,color: '#00203B',backgroundColor:'#ff0000',marginRight:'1%',marginTop:'10%'}}>add client</button>
      {/* <button onClick={() => navigate(-1)}  style={{ padding: '6px',height: '80px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' ,color: '#00203B',backgroundColor:'#ff0000',marginRight: '10%',marginTop:'10%'}}>back </button>  */}
      </form>
    </>);
};