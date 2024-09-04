import React from 'react';
import '../home/Home.css';

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        Online Examination System
        <div className="login">
            <a href="#home">Home</a>&nbsp;
            <a href="#about">About Us</a>&nbsp;
            <a href="#services">Services</a>&nbsp;
            <a href="#contact">Contact Us</a>&nbsp;
            <a href="/login">Login</a>
        </div>
      </nav>

      <main id="home">
        <h2>Your Gateway to Online Examinations</h2>
      </main>

      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src="./images/online-exam.jpg" alt="Examination" />
          </div>
          <div className="about-content">
            <h2>About Us</h2>
            <p>Our online examination system provides a reliable and efficient way for educational institutions and organizations to conduct exams remotely. With our platform, users can take tests online in a secure and monitored environment, ensuring fairness and integrity in the examination process.</p>
          </div>
        </div>
      </section>
    
      <section id="services" class="services-section">
  <h2>Services We Offer</h2>
  <div class="services-container">
    <div class="service-card">
      <img src="https://cdn-icons-png.flaticon.com/128/17000/17000237.png" alt="Service 1" />
      <h3>Online Examination</h3>
      <p>Conduct online exams securely and efficiently.</p>
    </div>
    <div class="service-card">
      <img src="https://cdn-icons-png.flaticon.com/128/13841/13841491.png" alt="Service 2" />
      <h3>Result Analysis</h3>
      <p>Analyze exam results and performance trends.</p>
    </div>
    <div class="service-card">
      <img src="https://cdn-icons-png.flaticon.com/128/11725/11725662.png" alt="Service 3" />
      <h3>Efficient Timing Management in Exam</h3>
      <p>Manage and monitor exam timing to ensure fairness.</p>
    </div>
  </div>
</section>


      <section id="contact">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information:</h3>
            <div className='info'>
            <p><strong>Address:</strong><br />123 Exam Street...</p>
            <p><strong>Phone:</strong><br />Main Office: +1 (123) 456-7890</p>
            <p><strong>Email:</strong><br />info@exampleexam.com</p>
            </div>
          </div>
          <div className="feedback">
            <h3>Feedback Form:</h3>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Online Examination System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
