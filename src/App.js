import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import Form from './components/Form/Form';
import styles from './index.module.scss';
import carImage from './assets/images/car.png';
import planeImage from './assets/images/plane.png';

const initialStateItems = [
        {
            image: planeImage,
            date: 'December 2019',
            departure: 'Warsaw',
            arrival: 'Katowice',
            country: 'Poland',
            link: '',
        },
        {
            image: planeImage,
            date: 'August 2018',
            departure: 'Warsaw',
            arrival: 'Nosy Be',
            country: 'Madagascar',
            link: '',
        },
        {
            image: planeImage,
            date: 'August 2017',
            departure: 'Katowice',
            arrival: 'Milano',
            country: 'Italy',
            link: '',
        },
        {
            image: planeImage,
            date: 'May 2017',
            departure: 'Katowice',
            arrival: 'Dubai',
            country: 'United Arab Emirates',
            link: '',
        },
        {
            image: carImage,
            date: 'March 2017',
            departure: 'Vienna',
            arrival: 'Budapest',
            country: 'Hungary',
            link: '',
        },
        {
            image: carImage,
            date: 'March 2017',
            departure: 'Warsaw',
            arrival: 'Vienna',
            country: 'Austria',
            link: '',
        },
        {
            image: planeImage,
            date: 'September 2016',
            departure: 'Singapore',
            arrival: 'Phuket',
            country: 'Thailand',
            link: '',
        },
        {
            image: planeImage,
            date: 'September 2016',
            departure: 'Bangkok',
            arrival: 'Singapore',
            country: 'Singapore',
            link: '',
        },
        {
            image: planeImage,
            date: 'September 2016',
            departure: 'Warsaw',
            arrival: 'Bangkok',
            country: 'Thailand',
            link: '',
        },
        {
            image: planeImage,
            date: 'April 2016',
            departure: 'Cracow',
            arrival: 'Oslo',
            country: 'Norway',
            link: '',
        },
        {
            image: planeImage,
            date: 'February 2016',
            departure: 'Katowice',
            arrival: 'Amsterdam',
            country: 'Netherlands',
            link: '',
        },
        {
            image: planeImage,
            date: 'September 2015',
            departure: 'Warsaw',
            arrival: 'Ibiza',
            country: 'Spain',
            link: '',
        },
        {
            image: planeImage,
            date: 'October 2014',
            departure: 'Katowice',
            arrival: 'Sousse',
            country: 'Tunisia',
            link: '',
        },
        {
            image: carImage,
            date: 'August 2014',
            departure: 'Katowice',
            arrival: 'Ostrava',
            country: 'Czech Republic',
            link: '',
        },
        {
            image: carImage,
            date: 'February 2012',
            departure: 'Katowice',
            arrival: 'Berlin',
            country: 'Germany',
            link: '',
        },
        {
            image: carImage,
            date: 'July 2010',
            departure: 'Cannes',
            arrival: 'Monte Carlo',
            country: 'Monaco',
            link: '',
        },
        {
            image: carImage,
            date: 'July 2010',
            departure: 'Venice',
            arrival: 'Cannes',
            country: 'France',
            link: '',
        },
        {
            image: carImage,
            date: 'July 2010',
            departure: 'Katowice',
            arrival: 'Venice',
            country: 'Italy',
            link: '',
        },
        {
            image: carImage,
            date: 'July 2008',
            departure: 'Katowice',
            arrival: 'Varna',
            country: 'Bulgaria',
            link: '',
        }
    ];

class App extends React.Component {
        state = {
                items: [...initialStateItems],
        }

        addItem = (e) => {
            e.preventDefault();
            
            const newItem = {
                date: e.target[0].value,
                departure: e.target[1].value,
                arrival: e.target[2].value,
                country: e.target[3].value,
            }

            this.setState(prevState => ({
                items: [newItem, ...prevState.items],
            }));

            e.target.reset();
        }

        render() {
                return(
                        <div className={styles.div}>
                                <ListWrapper 
                                    items={this.state.items} 
                                />
                                <Form 
                                    submitFn={this.addItem}
                                />
                        </div>
                )
        }
}

export default App;