import { useState } from 'react';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Card from "../UI/Card";
import Button from '../UI/Button';
function AddUser(props) {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    function addUserHandler(event) {
        event.preventDefault();
        if (enteredAge.trim().length === 0 || enteredUserName.trim().length === 0 || +enteredAge < 1) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age"
            });
            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredAge('');
        setEnteredUserName('');
    };

    function ageChangeHandler(event) {
        setEnteredAge(event.target.value);
    };



    function userNameChangeHandler(event) {
        setEnteredUserName(event.target.value);
    };
    function errorHandler(){
        setError(null);
    }
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />
            }            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" >Username</label>
                    <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler}></input>
                    <label htmlFor="age">Age(in years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );

};

export default AddUser;