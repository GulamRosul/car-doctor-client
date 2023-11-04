import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import axios from "axios";

const Services = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:5000/services")
    //   .then((res) => res.json())
    //   .then((data) => setService(data));
    axios
      .get("http://localhost:5000/services")
      .then((res) => setService(res.data));
  }, []);
  return (
    <div className="mt-4 ">
      <div className="text-center">
        <h3 className="text-3xl text-orange-600 font-semibold"> Services</h3>
        <h2 className="text-5xl text-black font-bold">Our Services Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
