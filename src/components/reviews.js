import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";


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
const Containerrow = styled.div`
display: flex;
margin: auto ;
`
export default function Reviews() {
    const [rate, setRate] = useState(0);

    // const admin = "Admin";
    const [allReview, setReview] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");

    const addReview = (e) => {
        console.log(e.preventDefault());
        
        let newReview = {
            title  : newTitle,
            description: newDescription
        };

        let updatedReview=[...allReview];
        updatedReview.push(newReview)
        setReview(updatedReview);

                if (!newReview) {
            alert("please write review");
            return;
        }
    }


    return (
        <div className='Reviews'>
            <div className='container-review'>
                <Containerrow className="row">
                    <div className="col-5">
                        <form>
                            <h1>Leave a Review</h1>
                            <input
                                type='text'
                                placeholder='Review Title'
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)} /><br/>
                            <textarea value={newDescription} onChange={e => setNewDescription(e.target.value)} />
                                    <Container>
                                        {[...Array(5)].map((item, index) => {
                                            const givenRating = index + 1;
                                            return (
                                                <label>
                                                    <Radio
                                                        type="radio"
                                                        value={givenRating}
                                                        onClick={() => {
                                                            setRate(givenRating);
                                                            // alert(
                                                            // 	`Are you sure you want to give
                                                            // 	${givenRating} stars ?`
                                                            // );
                                                        }}
                                                    />
                                                    <Rating>
                                                        <FaStar
                                                            color={
                                                                givenRating < rate || givenRating === rate
                                                                    ? "000"
                                                                    : "rgb(192,192,192)"
                                                            }
                                                        />
                                                    </Rating>
                                                </label>
                                            );
                                        })}
                                    </Container>Please Login to leave a review
                            <button onClick={(e) => addReview(e)}>Submit</button>

                        </form>
                    </div>

                    <div className="col-1"></div>
                    <div className="col-5">
                       
{allReview.map((item,index)=>{
    return(
        <div key={index}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        </div>
    )
})}

                        
                      
                    </div>
                </Containerrow>
            </div>

        </div>
    )
}
