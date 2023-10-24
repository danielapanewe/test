import Slider from "../../UI/Slider";
import { testimonyslider } from "../../data/data-testimonials";

function Testimonial() {
  return (
    <Slider slides={testimonyslider}/>
  )
}

export default Testimonial