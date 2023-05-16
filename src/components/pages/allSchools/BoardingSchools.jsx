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
            Shiv Shakti Gurukulam
            </h1>
            <p>
            A boarding school is a school where students live and sleep. Some boarding schools have day students who go home at the end of the school day. If the school costs money, they don't have to pay as much money. A person who stays at a boarding school is called a "boarder".

            </p>
          </div>

          <figure class="image-wrap">
            <img
              src="assets/boardingSchools/ssg.jpg"
              alt="Shiv Shakti Gurukulam"
            />
          </figure>
        </article>
        <article class="article">
          <div class="content">
            <h1 class="headline">
            Edify School
            </h1>
            <p>
            A boarding school is a school where students live and sleep. Some boarding schools have day students who go home at the end of the school day. If the school costs money, they don't have to pay as much money. A person who stays at a boarding school is called a "boarder".
            </p>
          </div>

          <figure class="image-wrap">
            <img
              src="assets/boardingSchools/edify.jpg"
              alt="Edify School"
            />
          </figure>
        </article>

        <article class="article flow">
          <div class="content">
            <h1 class="headline">Delhi Public School</h1>
            <p>
            A boarding school is a school where students live and sleep. Some boarding schools have day students who go home at the end of the school day. If the school costs money, they don't have to pay as much money. A person who stays at a boarding school is called a "boarder".
            </p>
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
            <h1 class="headline">Jugraj Academy</h1>
            <p>
            A boarding school is a school where students live and sleep. Some boarding schools have day students who go home at the end of the school day. If the school costs money, they don't have to pay as much money. A person who stays at a boarding school is called a "boarder".
            </p>
          </div>

          <figure class="image-wrap">
            <img
              src="assets/boardingSchools/jugraj.jpg"
              alt="Jugraj Academy"
            />
          </figure>
        </article>
      </main>
    </>
  );
};

export default BoardingSchools;
