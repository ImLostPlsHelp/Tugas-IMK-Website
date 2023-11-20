import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <div className="div">
        <div className="overlap">
          <p className="text-wrapper">Take student experience to the next level</p>
          <p className="p">
            Beragam fitur dan konten yang dirancang untuk memaksimalkan kemampuan belajar pengguna dan meningkatkan
            peluang sukses mereka dalam ujian masuk perguruan tinggi.
          </p>
        </div>
        <div className="overlap-group">
          <div className="frame">
            <div className="logo">
              <div className="study-smart">
                Study <br />
                Smart
              </div>
              <img className="logo-clean" alt="Logo clean" src="/img/logo-clean-1.svg" />
            </div>
          </div>
          <div className="text-wrapper-2">Home</div>
          <div className="text-wrapper-3">Program Belajar</div>
          <div className="group">
            <div className="div-wrapper">
              <Link to="/login" className="text-wrapper-4">
              <div className="text-wrapper-4">Login / Register</div>
              </Link>
            </div>
          </div>
          <div className="search-bar">
            <img className="icon-search-outline" alt="Icon search outline" src="/img/icon-search-outline.png" />
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="overlap-group-wrapper">
              <div className="overlap-3">
                <div className="overlap-4">
                  <p className="text-wrapper-5">Created with love by thecreation.design</p>
                  <div className="rectangle" />
                  <p className="text-wrapper-6">© 2023 Copyright | All Rights Researved.</p>
                </div>
                <div className="group-2">
                  <div className="overlap-group-2">
                    <div className="group-3">
                      <div className="logo-wrapper">
                        <div className="logo-2">
                          <div className="text-wrapper-7">Study Smart</div>
                          <img className="logo-clean" alt="Logo clean" src="/img/logo-clean-1-1.svg" />
                        </div>
                      </div>
                      <p className="text-wrapper-8">
                        Dengan kombinasi konten berkualitas tinggi, alat pengukuran kemajuan, dan dukungan konseling,
                        platform ini merupakan mitra belajar yang kuat bagi mereka yang bercita-cita masuk perguruan
                        tinggi dengan sukses.
                      </p>
                    </div>
                    <div className="group-4">
                      <div className="instagram" />
                      <img className="vector" alt="Vector" src="/img/vector.svg" />
                      <img className="x-twitter" alt="X twitter" src="/img/x-twitter.svg" />
                    </div>
                  </div>
                </div>
                <div className="group-5">
                  <div className="text-wrapper-9">Support</div>
                  <div className="text-wrapper-10">Contact Us</div>
                </div>
                <div className="group-6">
                  <div className="text-wrapper-9">About SS</div>
                  <div className="group-7">
                    <div className="text-wrapper-11">Company Information</div>
                    <div className="text-wrapper-12">Resources</div>
                    <div className="text-wrapper-13">Our Success</div>
                    <div className="text-wrapper-14">Meet The Experts</div>
                  </div>
                </div>
                <div className="group-8">
                  <div className="text-wrapper-9">My Account</div>
                  <div className="group-9">
                    <div className="text-wrapper-11">Sign In</div>
                    <div className="text-wrapper-12">Monitor Progress</div>
                    <div className="text-wrapper-13">Compare Success</div>
                    <div className="text-wrapper-14">My Topics</div>
                  </div>
                </div>
                <div className="group-10">
                  <div className="text-wrapper-9">Artikel</div>
                  <p className="text-wrapper-15">Dapatkah informasi terbaru terkait UTBK dan beasiswa</p>
                  <div className="group-11">
                    <div className="overlap-5">
                      <div className="text-wrapper-16">Email address</div>
                      <div className="group-12">
                        <div className="overlap-group-3">
                          <div className="text-wrapper-17">Subscribe</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-2" />
          </div>
        </div>
        <img className="paket-belajar" alt="Paket belajar" src="/img/paket-belajar.png" />
        <div className="group-13">
          <div className="overlap-6">
            <div className="group-14">
              <div className="overlap-group-4">
                <div className="text-wrapper-18">Start Now</div>
              </div>
            </div>
            <div className="text-wrapper-19">How It Works</div>
            <img className="img" alt="Group" src="/img/group-1000002834.svg" />
            <div className="question-traced-wrapper">
              <img className="question-traced" alt="Question traced" src="/img/question-2-traced.svg" />
            </div>
            <div className="notepad-traced-wrapper">
              <img className="notepad-traced" alt="Notepad traced" src="/img/notepad-1-traced.svg" />
            </div>
            <img className="group-15" alt="Group" src="/img/group-1000002833.svg" />
            <div className="text-wrapper-20">Sign Up</div>
            <div className="text-wrapper-21">Get access</div>
            <div className="text-wrapper-22">Practice questions</div>
            <div className="text-wrapper-23">Get Result</div>
            <p className="text-wrapper-24">
              Montes vivamus curae quisque et primis pretium nullam. Congue dis convallis eget ipsum cubilia ante.
            </p>
            <p className="text-wrapper-25">Access to question bank of over 2000 questions</p>
            <p className="text-wrapper-26">
              Prepare for the MLA exam in multiple modes of revision and track your progress with your personalised
              dashboard
            </p>
            <p className="compare-your-results">compare your results with your peers&#39; with advanced analytics</p>
          </div>
        </div>
        <div className="testimoni-alumni">
          <div className="testi-alumni">
            <div className="overlap-group-5">
              <div className="bambang-sugeni-ilmu-wrapper">
                <p className="bambang-sugeni-ilmu">
                  <span className="span">
                    Bambang Sugeni
                    <br />
                  </span>
                  <span className="text-wrapper-27">Ilmu Politik - Universitas Indonesia</span>
                </p>
              </div>
              <p className="text-wrapper-28">
                “Materi berkualitas, try out yang mirip dengan ujian sebenarnya, pemantauan kemajuan, dan dukungan
                konseling telah membuat persiapan saya lebih efisien dan efektif. Fleksibilitas belajar juga sangat
                membantu.”
              </p>
            </div>
          </div>
          <div className="testi-alumni-2">
            <div className="overlap-group-5">
              <div className="jafri-maulana-ilmu-wrapper">
                <p className="jafri-maulana-ilmu">
                  <span className="span">
                    Jafri Maulana
                    <br />
                  </span>
                  <span className="text-wrapper-27">Ilmu Komunikasi - Universitas Gadjah Mada</span>
                </p>
              </div>
              <p className="text-wrapper-29">
                “Study Smart telah membuktikan nilainya dalam perjalanan saya masuk PTN. Materi pembelajaran yang
                disajikan dengan baik dan bantuan konseling yang tersedia membantu saya mengatasi setiap tantangan.”
              </p>
            </div>
          </div>
          <div className="testi-alumni-3">
            <div className="overlap-7">
              <p className="materi-yang">
                “Materi yang berkualitas dan simulasi ujian yang realistis benar-benar mempersiapkan saya dengan baik.
                Terima kasih, Study Smart!&#34;
              </p>
              <div className="salma-nur-prima-wrapper">
                <p className="salma-nur-prima">
                  <span className="span">
                    Salma Nur Prima
                    <br />
                  </span>
                  <span className="text-wrapper-27">Teknik Informatika - Universitas Padjadjaran</span>
                </p>
              </div>
            </div>
          </div>
          <div className="testi-alumni-4">
            <div className="overlap-8">
              <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-31.svg" />
              <div className="user-profile" />
              <p className="ahmad-sutego-STEI">
                <span className="span">
                  Ahmad Sutego
                  <br />
                </span>
                <span className="text-wrapper-27">STEI - Institut Teknologi Bandung</span>
              </p>
              <p className="materi-pembelajaran">
                “Materi pembelajaran yang disajikan dengan baik dan bantuan konseling yang tersedia membantu saya
                mengatasi setiap tantangan. Saya sangat puas dengan hasilnya!&#34;
              </p>
            </div>
          </div>
        </div>
        <p className="text-wrapper-30">Check our editions to suit your needs</p>
      </div>
    </div>
  );
};
