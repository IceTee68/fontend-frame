import logo from "./logo.svg";
// import "./App.css";
import "./Style.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "./images/img_avatar3.png";
import Post from "./post.js";

function ComponetDidMount() {
  console.log("componetDidMount");

}



// Use props
const Profile_Componet = (props) => {
  const { nganh, ten} = props;

  return <header>
  <img className="avatar" src={avatar} alt="có thể là ảnh một người" />
  <div>
    <h1 className="name">{ten}</h1>
    <p>{nganh}</p>
  </div>
</header>;
};

const ChungChi_Componet = () => {
  
 return <section className="chung-chi">
    <h2>CHỨNG CHỈ</h2>
    <p>- PHP, JAVASCRIPT, MYSQL</p>
    <label htmlFor="">2016</label>
    <p>- LARAVEL FRAMEWORK, JQUERY, REACT</p>
    <label htmlFor="">2017</label>
    <p>- GIT, LINUS, REDIS</p>
    <label htmlFor="">2018</label>
  </section>

}

;
// Use state
const Skills_Componet = (props) => {
  const {skill_1, skill_2, skill_3} = props;
  const skill1 = {width: skill_1};
  const skill2 = {width: skill_2};
  const skill3 = {width: skill_3};

  

  return <section className="skills">
  <h2>KỸ NĂNG</h2>
  <ul>
    <li>
      <div className="skill_name">Node js</div>
      <div className="skill_prog">
        <span className="nodejs" style={skill1}></span>
      </div>
    </li>
    <li>
      <div className="skill_name">Vue js</div>
      <div className="skill_prog">
        <span className="vuejs" style={skill2}></span>
      </div>
    </li>
    <li>
      <div className="skill_name">PHP</div>
      <div className="skill_prog">
        <span className="php" style={skill3}></span>
      </div>
    </li>
  </ul>
</section>
}

function App() {

  // use state for skill
  const [skill_1, setSkill_1] = useState('');
  const [skill_2, setSkill_2] = useState('');
  const [skill_3, setSkill_3] = useState('');

  const handleClick = (event) => {
    
    const dataSkill_01 = document.getElementById("txtSkill_01").value + '%';
    const dataSkill_02 = document.getElementById("txtSkill_02").value + '%';
    const dataSkill_03 = document.getElementById("txtSkill_03").value + '%';

    setSkill_1(dataSkill_01);
    setSkill_2(dataSkill_02);
    setSkill_3(dataSkill_03);

    // document.querySelector(".nodejs").style.width = dataSkill_01;
    // document.querySelector(".vuejs").style.width = dataSkill_02;
    // document.querySelector(".php").style.width = dataSkill_03;


  };


  return (
    <div>
      {/* <section className="container">
        
      <Profile_Componet nganh="UDPM" ten="Vo Trung Thanh"/>

        <article>
          <section className="contact">
            <label htmlFor="email">thanheshop@gmail.com</label>
            <label htmlFor="phone">0822385538</label>
            <label htmlFor="local">
              Số 1 Trần Phú, thành phố Buôn Ma Thuột
            </label>
          </section>

          <section className="objectives">
            <h2>MỤC TIÊU NGHỀ NGHIỆP</h2>
            <p>
              Mong muốn trở thành một PM lead team 10 nhân sự để nâng cấp các
              sản phẩm chạy nhanh và ổn định hơn cho công ty. Ngoài ra, tôi còn
              mong muốn được làm trong một môi trường chuyên nghiệp, đồng nghiệp
              hòa đồng, phúc lợi tốt.
            </p>
          </section>

          <section className="flex-container">
            
            <Skills_Componet  skill_1={skill_1} skill_2={skill_2} skill_3={skill_3}/>

            <ChungChi_Componet/>

            <section className="education">
              <h2>HỌC VẤN</h2>
              <p className="color-green">CHUYÊN NGÀNH: CÔNG NGHỆ THÔNG TIN</p>
              <p className="color-black">Đại học TOPCV</p>
              <p>10/2012 - 05/2016</p>
              <p>Tốt nghiệp loại Giỏi, điểm trung bình 8.0</p>
            </section>

            <section className="jobs">
              <h2>KINH NGHIỆM LÀM VIỆC</h2>
              <section className="job">
                <p className="color-green">SENIOR DEVELOPER</p>
                <p className="color-black">Công ty TOPCV</p>
                <p>06/2019 - Hiện tại</p>
                <p>Thực hiện các dự án liên quan đến PHP</p>
              </section>

              <section className="job">
                <p className="color-green">JUNIOR DEVELOPER</p>
                <p className="color-black">Công ty LALA</p>
                <p>03/2018 - 06/2019</p>
                <p>Thực hiện các dự án Machine Learning, Big Data</p>
              </section>
            </section>

            <section className="award">
              <h2>GIẢI THƯỞNG</h2>
              <p className="color-green">
                NHÂN VIÊN XUẤT SẮC NĂM CÔNG TY TOPCV
              </p>
              <p>2019</p>
            </section>

            <section className="hobbies">
              <h2>SỞ THÍCH</h2>
              <ul className="color-gray">
                <li>Đọc sách</li>
                <li>Đá bóng</li>
              </ul>
            </section>

            <section className="reference-person">
              <h2>NGƯỜI THAM CHIẾU</h2>
              <p className="color-gray">Anh ... - Trưởng phòng Marketing</p>
            </section>
          </section>
        </article>
      </section> */}
      
      <Post/>

    {/* <div className="form-skills">
    <input
        onChange={handleClick}
        id="txtSkill_01"
        type="number"
        placeholder="nhap so"
      />
      <input
        onChange={handleClick}
        id="txtSkill_02"
        type="number" 
        placeholder="nhap so"
      />

      <input
        onChange={handleClick}
        id="txtSkill_03"
        type="number" 
        placeholder="nhap so"
      /> */}
      {/* <button onClick={handleClick}>change</button> */}
      {/* </div> */}

    
      
      
    </div>
  );
}

export default App;
