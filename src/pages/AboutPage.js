import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article className="title">
          <h2>Our Story</h2>
          <div className="underline"></div>
          <p>
            Adipisicing sit sunt ad est ad fugiat aute fugiat labore. Aliqua
            ullamco aliquip aliqua aliquip consequat do ex. In velit Lorem culpa
            esse eiusmod elit ea ad nulla. Ipsum proident dolor nisi eiusmod
            aute aliqua dolor aliqua.Minim cupidatat sunt et labore do Lorem
            deserunt et nulla. Et qui officia cillum qui et sint ea officia.
            Officia veniam minim ut anim. Labore cupidatat tempor do ea est.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
