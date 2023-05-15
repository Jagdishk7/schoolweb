import React from "react";
import './SchoolCard.css'

const BoardingSchools = () => {
  return (
    <>
      <main id="page-content" class="main section-wrap">

        <article class="article">
          <div class="content">
            <h1 class="headline">
              Sumati Academy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eaque itaque assumenda iure exercitationem, ad aliquam ipsam dicta voluptatem enim natus libero qui, ea suscipit! Aspernatur cumque reiciendis porro dolore explicabo dolorum tenetur?
            </p>
          </div>

          <figure class="image-wrap">
            <img
              src="assets/schoolImg/sumati.jpg"
              alt="Sleeping cat on a comfy looking blanket"
            />
          </figure>
        </article>

        <article class="article flow">
          <div class="content">
            <h1 class="headline">Delhi Public School</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero provident earum natus consequatur. Optio harum dolorem at delectus reprehenderit magni quas, soluta pariatur, quibusdam ab impedit corrupti, eius sint quos temporibus. Rem, cum!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero provident earum natus consequatur. Optio harum dolorem at delectus reprehenderit magni quas, soluta pariatur, quibusdam ab impedit corrupti, eius sint quos temporibus. Rem, cum!
            </p>
          </div>

          <figure class="image-wrap">
            <img
              src="assets/schoolImg/dps2.jpg"
              alt="A dog sitting behind a banana wearing banana pajamas"
            />
          </figure>
        </article>

        <article class="article flow">
          <div class="content">
            <h1 class="headline">Maria Mata Convent School</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero provident earum natus consequatur. Optio harum dolorem at delectus reprehenderit magni quas, soluta pariatur, quibusdam ab impedit corrupti, eius sint quos temporibus. Rem, cum!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero provident earum natus consequatur. Optio harum dolorem at delectus reprehenderit magni quas, soluta pariatur, quibusdam ab impedit corrupti, eius sint quos temporibus. Rem, cum!
            </p>
          </div>

          <figure class="image-wrap">
            <img
              src="assets/schoolImg/mariamata.jpg"
              alt="A dog sitting behind a banana wearing banana pajamas"
            />
          </figure>
        </article>
      </main>
    </>
  );
};

export default BoardingSchools;
