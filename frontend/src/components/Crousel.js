import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Form } from 'react-bootstrap';
import "../CSS/crousel.css";
import { useSelector, useDispatch } from 'react-redux';
import { OnChange } from '../slices/searchSlice';
import biryani from '../Images/biryani.jpeg';
import pizza from '../Images/pizza.jpeg';
import momos from '../Images/momos.jpeg';
import burger from '../Images/burger.jpeg';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    let serachText = useSelector(state => state.search)
    let dispatch = useDispatch();

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const handleSearchChange = (event) => {
        dispatch(OnChange({ serachText: event.target.value }))
    }

    const imagesArray = [biryani, pizza, momos, burger]

    return (
        <div className='crousel'>
            <Carousel activeIndex={index} className='crousel' onSelect={handleSelect} >
                {
                    imagesArray.map((link, index) => {
                        return (
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={link}
                                    alt="First slide"
                                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>

            <Form className='d-flex searchBar' >
                <Form.Control type='search' placeholder='Search for item' className='me-2' aria-label='Search' onChange={handleSearchChange} value={serachText} style={{ backgroundColor: "lightblue" }} />
            </Form>
        </div>
    );
}

export default ControlledCarousel;