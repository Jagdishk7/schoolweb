import React from "react";
import './SchoolCard.css'

const BoardingSchools = () => {
  return (
    <>
    <h1 className='page-heading'>Boarding Schools</h1>
      <main id="page-content" class="main section-wrap">

        <article class="article">
          <div class="content">
            <h1 class="headline">
              Sumati Academy
            </h1>
            <p>
            The school comes with an uncompromising commitment. It aims to achieve specific, measurable, observable and quantifiable results among all aspirants/students. Because the School has a vision to provide value based education to young minds and provide a dynamic learning environment.
However, the School aegis for every student which strives for excellence through active learning and education. Moreover, the School has the core committed faculty which has come from accomplished backgrounds with vast experience.

            </p>
          </div>

          <figure class="image-wrap">
            <img
              src="assets/schoolImg/sumati.jpg"
              alt="Sumati Academy"
            />
          </figure>
        </article>

        <article class="article flow">
          <div class="content">
            <h1 class="headline">Delhi Public School</h1>
            <p>
            Delhi Public School, Chhatarpur (Madhya Pradesh) aims to deliver balanced educational and personality skills within a safe, stimulating environment for each child to grow to the greatest potential.            </p>

          </div>

          <figure class="image-wrap">
            <img
              src="assets/schoolImg/dps2.jpg"
              alt="Delhi Public School"
            />
          </figure>
        </article>

        <article class="article flow">
          <div class="content">
            <h1 class="headline">Maria Mata Convent School</h1>
            <p>
            Maria Mata Convent High School also known as Maria Mata Convent High School. The school was established in 1979. Maria Mata Convent High School is a Co-Ed school affiliated to Central Board of Secondary Education (CBSE) . It is managed by Satna Diocesan Society.            </p>
          </div>

          <figure class="image-wrap">
            <img
              src="assets/schoolImg/mariamata.jpg"
              alt="Maria Mata Convent School"
            />
          </figure>
        </article>
      </main>
    </>
  );
};

export default BoardingSchools;
