import { Carousel } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';


const BootstrapCarousel = () => {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.wbcsd.org/var/site/storage/images/media/images/nature-action2/201159-1-eng-GB/Nature-Action_i1140.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://track2traininginstitute.files.wordpress.com/2021/07/8703e-maxresdefault.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://imageio.forbes.com/blogs-images/imageserve/62e559a2abbf3ce8215398d4/A-massive-pine-forest-in-a-mountain-valley/0x0.jpg?format=jpg&crop=1502,845,x0,y0,safe&width=960"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
}

export default BootstrapCarousel;