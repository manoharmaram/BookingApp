import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 10px;
font-size: 30px;
`
const Radio = styled.input`
display: none;
`
const Rating = styled.div`
cursor: pointer;
`
export default function Reviews() {
    const admin ="Admin";
    const [inputs, setInputs] = useState("");
    const [msg, setMsg] = useState("")
    const [rate, setRate] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(admin,inputs,msg,rate);
      }
  return (
    <div className='Reviews'>
        <div className='container-review'>
            <div className="row">
                <div className="col-5">
                    <form>
                        <table className='table-review'>
                            <tbody> 
                                <tr >
                                    <td>
                                        <h1>Leave a Review</h1>
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                        <input type='text' placeholder='Review Title' value={inputs} onChange={(e)=>setInputs(e.target.value)}/></td></tr>
                                <tr>
                                    <td>
                                        <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Container>{[...Array(5)].map((item, index) => {
                                            const givenRating = index + 1;
				                            return (
                                                <label>
						                        <Radio type="radio" value={givenRating} onClick={() => {
								                setRate(givenRating);
								                alert(`Are you sure you want to give${givenRating} stars ?`);
							                    }}/>
                                                <Rating>
                                                    <FaStar
                                                        color={
                                                            givenRating < rate || givenRating === rate
                                                                ? "000"
                                                                : "rgb(192,192,192)"
                                                        }/>
                                                </Rating>
					                            </label>);
			                                    })}
		                                </Container>
                                    </td><td>Please Login to leave a review</td></tr>
                                <tr>
                                    <td><input type="submit" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
            <div className="col-1">
            </div>
            <div className="col-5">
            </div>
        </div>
    </div>
  )}
