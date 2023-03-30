import React from 'react';

function About() {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              culpa ipsam, quaerat quos omnis explicabo numquam dicta unde quae
              sapiente? Quae a ipsa laboriosam assumenda molestias? Explicabo
              illo ducimus commodi?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Natus, rem nesciunt ex neque similique delectus
              cupiditate. Perspiciatis adipisci, animi culpa minima voluptatibus
              eligendi sequi consectetur omnis eius, accusamus aliquam
              repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Impedit, maiores dicta molestiae temporibus aliquid in esse
              eligendi ratione sequi aut, reprehenderit iure illum? Temporibus
              tenetur recusandae quas magnam sed amet.icta molestiae temporibus
              aliquid in esse eligendi ratione sequi aut, reprehenderit iure
              illum? Temporibus tenetur recusandae quas magnam sed amet.
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/about.jpg"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
