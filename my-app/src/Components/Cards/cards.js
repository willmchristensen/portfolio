import './cards.css'
import { useState } from 'react';
import {NavLink} from 'react-router-dom';

const Cards = () => {
    const [sideBar, showSideBar] = useState(true);
    const handleClick = () => {
        showSideBar(!sideBar)
    }
    const dynamicSideBar = sideBar ? 'sidebar' : 'hidden-button';
    const button = sideBar ? 'hidden-button' : 'not-hidden-button';
    return (
        <>
            {/* ---------------------------------PROJECTS--------------------------------- */}
            <div className="header">
                <h1>will christensen</h1>
                <div className='img-container'>
                <img className="profile-pc" src="https://lh3.googleusercontent.com/lfCFaj10pCQ8Xbb7PQIqMNte81LLZ06xBM963IuWNB9nCGMBJvJVMa8E3W7EYexQckoPRb77HHEmlGf0fg9ix0fXn2TlbzNbsWLXsyw4CWFnGWniUJHO8hoTUIDRxEAUXFiS5lbYMt2Xb0ByrIYporFqS-yE93ydOVzeQW8tjfx9nvmPOGWleePVQkI-qGVJJnNcbjC8GGNs0pJMjn2NaFrsLxN6Br1h_tx5M0Bx9h6eaS756Wv3FOhQVeA6ugapCalMDVP3WB-pK7iP1cctxzqeOYpzumDv5nqsGklv8hI-CLmi63SXT_BZo_vsy320pLEO6y-chN47majL1HKkZmhTgJq_HHVjci3vLLmZo7fQcM7P_VhmFkVaYH2rM5p2rgBdLreoBQ-7S0iSdSmTf3taAuuPcxnWAKzZafbWQbsSVrBaoGXrUwAUodSAWoIsNf0telRr3IbA0oUiGDP-BTAt7C_25U4haxOKRVfhLrirdipbk0G6EOAXvvZLYy28fp4RikKZtJSZjoLhSlP8BEDQIi-NYOQ30eU2TBUrxt6cKLn38K04Z6B52dztBrOTFK3vkCDT2PkgXa0Iwfabfmh_mrk3Eg0PNfbvaSdwQZA7NRzYgfFl48oV4W70oE0AhilKzrIV7fKf2LtVSI4Hwjpsqaq4h_T6t2qas8se9ATRF-BflKOrxTYDxJ1MQOZ7MKzrxNm__UoNxgMd1-mj_Cz2RBWCNg3GPzoN9L7LXtuksv-n5KOgeDzbRlEBI4ATGfqz9WfUDtDc2vkA14iIvbS9z7WjtUdcJ1VKUO7OZWX_OFOKouWK2CM-gb1Z7BcDnMa4gWSrGnNU9ajS2RlTOzU_V8z43vTTNXjzUYQGI3FX0GJG_7jd4nQwbYhDVAs-wVHPw_4bZKRv_c7L3mnNh--QT3xkjeSOVlKqv_t3cVntxBZsXteFxCV66eQ1gG5yH8mdpa2_x0wRBGNErz_-WQ=w1019-h1359-s-no?authuser=0" alt="" />
            </div>
            </div>
            <div className="about-me">
                <h2>about me</h2>
                <p>
                    My experience in customer experience, marketing, and operations provides a distinct vantage point when approaching new challenges. With a Bachelor of Science in Agricultural Business from California Polytechnic University, I have gained valuable skills in transportation and logistics, quality assurance, inventory management, sales and marketing, and account management. My technical proficiencies include CSS3, HTML5, JavaScript, React, SQL, Python, and Java, which I have further developed through formal education at App Academy, Bitwise Industries, and Foothill College.

                    My genuine passion for creating sincere connections with others sets me apart. By combining my technical expertise with my extensive experience in customer service and marketing, I can effectively bridge the communication gap between developers and end users. With my strong background in customer experience, marketing, and operations, technical prowess, and genuine passion for connecting with people, I am confident in my ability to build valuable relationships and deliver impactful solutions that meet the needs and exceed end users' expectations.

                    Beyond my professional pursuits, I actively engage in various hobbies such as mixing music, gardening, hiking, golfing, yoga, cooking, and climbing.
                    
                    I can be contacted by email at: willmchristensen@gmail.com
                </p>
            </div>

            <h1>projects</h1>
            <div className="cards-container">
                <div className="project-images">
                    <img src="https://lh3.googleusercontent.com/JKLgf35ad8rJ3JjmrrlrUPzxB_dIYk_HezZwBvzKCObG3cEtusQPVXK8hbqGg2qbfL7a_F_ZwvvY-H9_up5s-Re1j0RVZ4usQgDZzQEsCrEJiTeawfF8_tYsuGlq2m5qlxJci4bgvZ6FYXLenXQjZIwhEMno_dW15TcjumV_T3WTpACsphw38khOQ2Ga9N0Mv99oFU2ZmWW76hXbBAMlNFQ6Vhynqs9NNCjqjiG-K8IHr5STrwQiyXP2w6_1pSNvTK8yx19ANp4BD5lHaUXPRcpZI6sorXigmTs8k358VXAs9-0W4r1FQBmQcMp-IjF0QOnkvceHJXWaTYUczJGo1b6Qo9uIvE9vDb56eA9mRCb0hEHVQu1h5_M4jCXaL3QEAlQwAEPDRyIQaQNyNMAkpqccVlDiaK8dZKLskpzlhMHK8CM-3gMEiQvagPgT52UFhSrl40A9DfqrawqPoCN00Mpx4CAvOzuM6-H2LbIp73USG31bA37QfO_GI8VqvUkAelef9uKjuFmWZqsiHO5y65dFtR4qZWh19C7jrwiDUszNLky4qH8cmwXw-VI3OUvhLHY59X0dYTDsWdxRw3gLz-XSD7Bq19vsxOpL8kEsFv88DWH-lX_hvNzETPPfQm-2BrLPVxHTCs0TcT_GuTY44eUwYjGjFhhdefcOv_e7i8-rtRLsUM4zTWMrC6Wf-3MRrXrx5D5ak1nW8nuEFh8oyIecaDToo5wMRyXOfhg3mE9DswqcgT3WogHllv1URFbKjuxzfmaoI8cBbE0eSRVDq5V6VxIPIJv_aa_d6O1Hg3ezH0RjEg_MSPA5Jdksl_JHEw8umE9_D89klsHm-P_jk5Qzg-m9dEjJkuOwiXrz03RF9HKZ80pXfGaRbdV1BP1IDS24VHAbZTEXPISO6N5m3NkBj4GmkkNW-wNSf3_Apg8_oyeNd9GkhSCrnGM2QCjiJbm-wTx537cWeqhBLgG8zg=w1260-h1343-s-no?authuser=0" alt="" />
                    <img src="https://lh3.googleusercontent.com/IWBj8L2iAj7hNUcrdqfn_h8CMMYiUBjryikYo1nQuLNk-B0W8GqxrZb9RQeyWBgcikicfATEeyPUKO3QJqCUQTDP4kP0X3OWKaLSW5efKGyZwFHjfRRcXeROqC2eE3drKvVr2DsYm9_dJg4PDRYNogkvkO__VUz0r1awW_zrF-0eCUeGbz0_jt447pqATXbkohcBrr9gUb9jeuhpijnszsObRz2y_qLfT25iajmc0JT3i8oEk-02k5lpdTgu9qFBQoVKM9B1fYhT5Uf9Is9Yl6o2i1gMsds9MFgBvPFomcL2qixKPnSHXl5d76GTBNa5s1Sj9XeVhxHDgWgxhkqZk7jQVIJMd_i37XGwUUDxtrnpY9uN92spEiG6WKz0pSt3m6UPni5lB9e6To5aVBYIjOMadh99_uGNk4t6LRO35786jJcZx-8BOuO4buXAcj9NDx5H1_NkGqE4v8J5cKcTco53uCHrc21pYFiq6O_fgSsR-MpvxPVVm4Bk3Beo0U_yfnS76LRFeC331vjPHsA0ipm1P8X0j-n8fX8363e_orNryZtgiKTVWjse-TzMBF6u3R_9Zdh4XczAA2493lBCK_GT_cudH1zzMyBNZiA_47kWQ7Rrvdqsk_-8-Fbm7chW-OkfywuQLGuVHDpOX9RhWNgoW40wHHZjXByXVBRGsX5fZHTR1Nzfbhb-UsKhbSpNXrgq5b9M-XKqLd2yRHHTu2mDajBBHDL4JCZf245seKPOkJJzi8zLFKQhhY3FQsKsBBvicw4OqxPTMKk-k_7Y9YHFkNo3RDv5dx65o52RCeYNUxIyc_g8p882Okclz6Bn6vVuhcezV0Dj8SZ1cnyLp8dWqg5dXdNJlT-UZgMElBLumfkK8-rfZ8rF9w-_8sepIxtcPBJ5C_8rmRzQ2FPowudvzr7odyoP8PSKA8ak55PLKk6BzTHVol1d7ZQiA7ejP7Kqt4xV6SPDrz3L2i9G5Q=w1278-h1358-s-no?authuser=0" alt="" />
                    <img src="https://lh3.googleusercontent.com/sefSqNJs1zzUX0RlgOiIp7dUkw11vattnA29inCAanoewSWQM6gmT80RztYjni1QYu3S86l3OcYSIKZdjfW9n3R4RTRqFitjcyPSK7Lvv6ycpzjTsYpTOK54GFtQpSr5FFALIZQWDV7FomAbEp29c_PxitAFGKb96XseX_nDO3FsNCt6cHS10wm8DH50DVPHr5DZo-pOsUziVuVBlWP_5lFJ5afwjDhSr_EQcJ7iXMtlN2oTAkb0n2F4CNOHoG-Vth2VIR4jDOySzMvk8RFZliuVDiDYyAv_Ne1aOlOfILyczOg_PReTxAcpwhf_1WQ_4v0xewGSKRkepV-1qGtnw2ZA74ciDBUcdJf8-LraaOcqStMxjsZNGxXHO-BPVU01Xn8XI9vayjSYoX_TL0-2_wD2FNBAV18aGmh1Jw6XtsrirFQoDTghve7BI7t8_kCZ3zrWDaGYgMWmkrF7FVXujsDblSJKUpyFaio22gYP1TeAK5bhVB8MYfUEhAwWnnb0iBexkiIdKzAIvtT9iQQxpuG6PnYCE3H7V0uIJyKddsmTZjke8yxZY9N0914W63Sy4tlBDjTARO0BRco9ZggHT7Nua2Wzri_lkOy1w3Du9Wa5NC4Z-UYhOFDHHx41Q7ixLD0ubKYOYrra_xc9MtvJL-jm-LWmjtAGfY4982jfl-uqbzaVtH-sIdt2ew_1TVx5f2cVjjoQ-7YSPbfzH88xZRSvGYB6nUDo9umQRhlFcM7_2pE1i35_fJtva6Oips_xFbLbICeogQov7O-cBXVRurejHruZP7ZitdIaHGk5VFcbwIqQd2RVmUG3TQLz2T99eFfJS2BFBLk6qtEIAAUbJZJBr_VWP75dcALVkaua7S-pjW-MDqqwNhq8PJfnJU1VuXLs5OSER2D7q40L6GeL6tkkAFv0an7tXtKDQcchNHx3HyudXsm-5SDYHKFz6xy_sUA3Doti8Al0KeBG0NAkaA=w1278-h888-s-no?authuser=0" alt="" />
                </div>
                
                <a 
                    href='https://sharebnb-wpig.onrender.com/'
                    className="card"
                >
                        <div className="img">
                            <span>Sharebnb</span>
                        </div>
                        <div className="card-content">
                            <p>Airbnb clone.</p>
                        </div>
                </a>
                <a 
                    href='https://query-bhy5.onrender.com'
                    className="card">
                        <div className="img">
                            <span>Query</span>
                        </div>
                        <div className="card-content">
                            <p> Quora clone.</p>
                        </div>
                </a>
                <a 
                    href='https://mu-zfwi.onrender.com'
                    className="card">
                        <div className="img">
                            <span>Mu</span>
                        </div>
                        <div className="card-content">
                            <p>Resident advisor clone.</p>
                        </div>
                </a>
            </div>

            <div className="header">
                <h1>Contact Me</h1>
            </div>
            <div className="cards-container">
                <ul>
                    <li>Email: willmchristensen@gmail.com</li>
                    <li>Phone Number: 559-284-4414</li>
                    <li><a href="https://docs.google.com/document/d/1u8rULmGGkga0h7qKgC56gOraWr6Egk_aSDluzh5oh44/edit?usp=drive_link">Resume</a></li>
                    <li><a href="https://github.com/willmchristensen">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/will-christensen-85531317a/">linkedin</a></li>
                </ul>
            </div>
            <div className="cards-container">
                <h3>skills</h3>
                <ul>
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>SQL</li>
                </ul>
            </div>
        </>
    )
}

export default Cards;
