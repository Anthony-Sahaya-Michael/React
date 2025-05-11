import React, { useState } from "react";
import "./Qualifications.css";

function Qualifications() {
  const [toggleState, setToggleState] = useState(2);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          {/*  */}
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            onClick={() => toggleTab(1)}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  DLL - Distance Education
                </h3>
                <span className="qualification__subtitle">Annamalai University</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/*  */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">MSW - Distance Education</h3>
                <span className="qualification__subtitle">
                  Annamalai University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020-2022
                </div>
              </div>
            </div>
            
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                B.E. in CSE
                </h3>
                <span className="qualification__subtitle">Sasurie Academy of Engineering</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/*  */}

            {/*  */}
          </div>
          
          {/* Experience > */}
          {/*  */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            onClick={() => toggleTab(2)}
          > 
          {/*  */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Senior Associate Technical Trainer</h3>
                <span className="qualification__subtitle">
                iam<strong>Neo</strong>
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> JAN 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/*  */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Senior Technical Trainer</h3>
                <span className="qualification__subtitle">
                  Silicon Software Solutions
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> MAR 2022 - DEC 2022
                </div>
              </div>
            </div>
            {/*  */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Technical Trainer</h3>
                <span className="qualification__subtitle">
                  Freelance 
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> JAN 2019 - FEB 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/*  */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Technical Trainee</h3>
                <span className="qualification__subtitle">
                  BenchMark technologies
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> NOV 2018 - NOV 2018
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualifications;
