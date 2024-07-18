import React, { useState } from 'react';
import styles from './styles.module.css';

export default function StudentForm() {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        age: '',
        address: '',
        homeroomClass: '',
        studentId: '',
        favoriteFood: '' // State for the selected grade level
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onSubmit = () => 
        {
            alert('Submitted!')
        }

    return (
        <form className={styles.forms}>
            <label>First name</label>
            <input
                type="text"
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
                className={styles.input}
            />
            <label>Last name</label>
            <input
                type="text"
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
                className={styles.input}
            />
            <label>Age</label>
            <input
                type="text"
                name="age"
                value={formState.age}
                onChange={handleChange}
                className={styles.input}
            />
            <label>Address</label>
            <input
                type="text"
                name="address"
                value={formState.address}
                onChange={handleChange}
                className={styles.input}
            />
            <label>Homeroom class number</label>
            <input
                type="text"
                name="homeroomClass"
                value={formState.homeroomClass}
                onChange={handleChange}
                className={styles.input}
            />
            <label>Student ID</label>
            <input
                type="text"
                name="studentId"
                value={formState.studentId}
                onChange={handleChange}
                className={styles.input}
            />
            <h1>Student's favorite food</h1>
            <div>
                <input
                    type="radio"
                    name="favoriteFood"
                    value="Burger"
                    checked={formState.favoriteFood === 'Burger'}
                    onChange={handleChange}
                />
                Burger
            </div>
            <div>
                <input
                    type="radio"
                    name="favoriteFood"
                    value="Pizza"
                    checked={formState.favoriteFood === 'Pizza'}
                    onChange={handleChange}
                />
                Pizza
            </div>
            <div>
                <input
                    type="radio"
                    name="favoriteFood"
                    value="Fish and chips"
                    checked={formState.favoriteFood === 'Fish and chips'}
                    onChange={handleChange}
                />
                Fish and chips
            </div>
            <input type="submit" value="Submit" onClick={onSubmit}></input>
        </form>
    );
}