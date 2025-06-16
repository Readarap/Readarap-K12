 Read-A-Rap: Make It Make Sense
Welcome to **Read-A-Rap: Make It Make S Make learning unforgettable with rhythm
**Slogan:**
> Make It Make Sense
## Features
- **Interactive Beatbox**: Tap pads to - **Educational Rap Lyrics**: Scroll th - **Clean, Modern Design**: No clutter- - **Fully Responsive**: Works on deskto
## How to Run Locally
1. Download or clone this repository. 2. Open `index.html` in your web browse 3. Add your own drum sounds in the sou
## Deploying Online
Push any changes to GitHub (`git add - If using Netlify, your site will auto
&copy; 2025 Read- A Rap: Make It Make Se<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Read the Rap | Learn Through Music</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #4361ee;
            --secondary: #3a0ca3;
            --accent: #f72585;
            --light: #f8f9fa;
            --dark: #212529;
            --success: #4cc9f0;
            --warning: #ffd166;
            --beat-1: #ff6b6b;
            --beat-2: #4ecdc4;
            --beat-3: #ffd166;
            --beat-4: #6a0572;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #1a2a6c, #b21f1f, #1a2a6c);
            color: white;
            line-height: 1.6;
            overflow-x: hidden;
            min-height: 100vh;
            background-size: 400% 400%;
            animation: gradientBG 15s ease infinite;
        }
        
        @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        header {
            background: rgba(10, 10, 35, 0.9);
            color: white;
            padding: 1rem 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 4px 20px rgba(0,0,0,0.4);
            backdrop-filter: blur(10px);
            border-bottom: 2px solid var(--accent);
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.8rem;
            font-weight: 700;
            font-family: 'Montserrat', sans-serif;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .logo i {
            color: var(--accent);
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        nav ul {
            display: flex;
            list-style: none;
            gap: 2rem;
        }
        
        nav a {
            color: white;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            padding: 0.5rem 1rem;
            border-radius: 30px;
            font-size: 1.1rem;
        }
        
        nav a:hover, nav a.active {
            background: var(--accent);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(247, 37, 133, 0.4);
        }
        
        .hero {
            background: url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80') center/cover no-repeat;
            height: 85vh;
            display: flex;
            align-items: center;
            position: relative;
            text-align: center;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, rgba(67,97,238,0.85) 0%, rgba(58,12,163,0.85) 100%);
        }
        
        .hero-content {
            position: relative;
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .hero h1 {
            font-size: 4rem;
            font-weight: 800;
            margin-bottom: 1rem;
            text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
            font-family: 'Montserrat', sans-serif;
            line-height: 1.2;
        }
        
        .hero p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .btn {
            display: inline-block;
            background: var(--accent);
            color: white;
            padding: 15px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            font-size: 1.2rem;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            border: none;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(247, 37, 133, 0.4);
        }
        
        .btn:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(247, 37, 133, 0.6);
            background: #ff0676;
        }
        
        .btn-outline {
            background: transparent;
            border: 2px solid white;
            margin-left: 15px;
        }
        
        .btn-outline:hover {
            background: white;
            color: var(--primary);
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            font-family: 'Montserrat', sans-serif;
            position: relative;
            display: inline-block;
            left: 50%;
            transform: translateX(-50%);
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 4px;
            background: var(--accent);
            border-radius: 2px;
        }
        
        section {
            padding: 5rem 5%;
        }
        
        .features {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 4rem 2rem;
            margin: 2rem auto;
            max-width: 1200px;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .feature-card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 2rem;
            text-align: center;
            transition: transform 0.3s ease;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .feature-card:hover {
            transform: translateY(-10px);
            background: rgba(255, 255, 255, 0.15);
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        
        .feature-icon {
            font-size: 3rem;
            margin-bottom: 1.5rem;
            color: var(--accent);
        }
        
        .feature-card h3 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
        }
        
        .grade-levels {
            text-align: center;
            margin-top: 4rem;
        }
        
        .grade-buttons {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        .grade-btn {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 50px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
        }
        
        .grade-btn:hover {
            background: var(--accent);
            transform: scale(1.05);
        }
        
        .tools-section {
            background: rgba(10, 10, 35, 0.9);
            border-top: 3px solid var(--accent);
            border-bottom: 3px solid var(--accent);
        }
        
        .tools-container {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            margin-top: 3rem;
            justify-content: center;
        }
        
        .tool-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            overflow: hidden;
            width: 100%;
            max-width: 550px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            display: flex;
            flex-direction: column;
        }
        
        .tool-header {
            background: var(--primary);
            padding: 1.5rem;
            text-align: center;
        }
        
        .tool-header h3 {
            font-size: 2rem;
            font-family: 'Montserrat', sans-serif;
        }
        
        .tool-body {
            padding: 2rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        
        .beatbox-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
            margin: 1.5rem 0;
        }
        
        .beat-pad {
            background: var(--beat-1);
            border-radius: 10px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            cursor: pointer;
            transition: all 0.1s ease;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            user-select: none;
        }
        
        .beat-pad:nth-child(4n+2) {
            background: var(--beat-2);
        }
        
        .beat-pad:nth-child(4n+3) {
            background: var(--beat-3);
        }
        
        .beat-pad:nth-child(4n+4) {
            background: var(--beat-4);
        }
        
        .beat-pad:hover {
            transform: scale(0.95);
            opacity: 0.9;
        }
        
        .beat-pad.active {
            transform: scale(0.9);
            box-shadow: 0 0 15px rgba(255,255,255,0.7);
        }
        
        .controls {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .control-btn {
            flex: 1;
            padding: 12px;
            border: none;
            border-radius: 8px;
            background: var(--primary);
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .control-btn:hover {
            background: var(--secondary);
            transform: translateY(-3px);
        }
        
        .karaoke-container {
            background: rgba(0,0,0,0.3);
            border-radius: 15px;
            padding: 2rem;
            margin-top: 1.5rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        
        .lyrics {
            background: rgba(0,0,0,0.5);
            border-radius: 10px;
            padding: 1.5rem;
            flex-grow: 1;
            font-size: 1.2rem;
            line-height: 1.8;
            margin-bottom: 1.5rem;
            overflow-y: auto;
            max-height: 200px;
        }
        
        .current-line {
            color: var(--accent);
            font-weight: 700;
            font-size: 1.3rem;
            text-shadow: 0 0 10px rgba(247, 37, 133, 0.7);
        }
        
        .lesson-plans {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            padding: 4rem 2rem;
            margin: 2rem auto;
            max-width: 1200px;
        }
        
        .lesson-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        
        .lesson-card {
            background: rgba(255, 255, 255, 0.08);
            border-radius: 15px;
            overflow: hidden;
            transition: transform 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .lesson-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.3);
        }
        
        .lesson-img {
            height: 200px;
            background-size: cover;
            background-position: center;
        }
        
        .lesson-content {
            padding: 1.5rem;
        }
        
        .lesson-content h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
        }
        
        .lesson-content p {
            margin-bottom: 1.5rem;
            color: #ddd;
        }
        
        .stats {
            display: flex;
            justify-content: space-around;
            text-align: center;
            margin-top: 4rem;
            flex-wrap: wrap;
            gap: 2rem;
        }
        
        .stat-box {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 2rem;
            min-width: 200px;
            backdrop-filter: blur(5px);
        }
        
        .stat-box .number {
            font-size: 3rem;
            font-weight: 700;
            color: var(--accent);
            font-family: 'Montserrat', sans-serif;
        }
        
        .testimonials {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            padding: 4rem 2rem;
            margin: 4rem auto;
            max-width: 1000px;
            text-align: center;
        }
        
        .testimonial {
            background: rgba(255, 255, 255, 0.08);
            border-radius: 15px;
            padding: 2rem;
            margin: 2rem 0;
            position: relative;
        }
        
        .testimonial::before {
            content: '"';
            position: absolute;
            top: -20px;
            left: 20px;
            font-size: 5rem;
            color: var(--accent);
            opacity: 0.3;
            font-family: serif;
        }
        
        .testimonial p {
            font-style: italic;
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
        }
        
        .author {
            font-weight: 700;
            color: var(--accent);
        }
        
        footer {
            background: rgba(0, 0, 0, 0.8);
            padding: 3rem 5%;
            text-align: center;
            border-top: 2px solid var(--accent);
        }
        
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .social-icons {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin: 2rem 0;
        }
        
        .social-icons a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            background: var(--primary);
            border-radius: 50%;
            color: white;
            font-size: 1.5rem;
            transition: all 0.3s ease;
        }
        
        .social-icons a:hover {
            background: var(--accent);
            transform: translateY(-5px);
        }
        
        .copyright {
            margin-top: 2rem;
            color: #aaa;
        }
        
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero p {
                font-size: 1.2rem;
            }
            
            nav ul {
                gap: 0.8rem;
            }
            
            .tools-container {
                flex-direction: column;
            }
            
            .btn {
                padding: 12px 25px;
                font-size: 1rem;
                display: block;
                margin: 10px auto;
                width: 80%;
            }
            
            .btn-outline {
                margin-left: 0;
                margin-top: 15px;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="logo">
            <i class="fas fa-microphone-alt"></i>
            <span>Read the Rap</span>
        </div>
        <nav>
            <ul>
                <li><a href="#" class="active">Home</a></li>
                <li><a href="#">Lessons</a></li>
                <li><a href="#">Beat Lab</a></li>
                <li><a href="#">Rap Along</a></li>
                <li><a href="#">For Teachers</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1>LEARN THROUGH THE POWER OF RAP</h1>
            <p>Transforming K-12 education with rhythm, rhyme, and beatboxing</p>
            <div class="hero-buttons">
                <a href="#" class="btn">Start Learning</a>
                <a href="#" class="btn btn-outline">Teacher Resources</a>
            </div>
        </div>
    </section>

    <section class="features">
        <h2 class="section-title">How It Works</h2>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-book-open"></i>
                </div>
                <h3>Curriculum Aligned</h3>
                <p>All lessons align with K-12 standards in math, science, language arts, and social studies.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-music"></i>
                </div>
                <h3>Original Educational Raps</h3>
                <p>Engaging rap songs designed to teach key concepts through rhythm and rhyme.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-drum"></i>
                </div>
                <h3>Beatbox Integration</h3>
                <p>Create your own beats with our InCreditBox beat maker to accompany lessons.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-microphone"></i>
                </div>
                <h3>Karaoke Style</h3>
                <p>StarMaker karaoke feature helps students practice and perform educational raps.</p>
            </div>
        </div>
        
        <div class="grade-levels">
            <h3>Browse by Grade Level</h3>
            <div class="grade-buttons">
                <button class="grade-btn">Elementary (K-5)</button>
                <button class="grade-btn">Middle School (6-8)</button>
                <button class="grade-btn">High School (9-12)</button>
            </div>
        </div>
    </section>

    <section class="tools-section">
        <h2 class="section-title">Creative Tools</h2>
        <div class="tools-container">
            <div class="tool-card">
                <div class="tool-header">
                    <h3>InCreditBox Beat Maker</h3>
                </div>
                <div class="tool-body">
                    <p>Create your own beats to accompany our educational raps. Perfect for rhythm-based learning!</p>
                    <div class="beatbox-grid">
                        <div class="beat-pad">Kick</div>
                        <div class="beat-pad">Snare</div>
                        <div class="beat-pad">Hi-Hat</div>
                        <div class="beat-pad">Clap</div>
                        <div class="beat-pad">Bass</div>
                        <div class="beat-pad">Cymbal</div>
                        <div class="beat-pad">Perc</div>
                        <div class="beat-pad">Vox</div>
                    </div>
                    <div class="controls">
                        <button class="control-btn">Play Beat</button>
                        <button class="control-btn">Save</button>
                        <button class="control-btn">Clear</button>
                    </div>
                </div>
            </div>
            
            <div class="tool-card">
                <div class="tool-header">
                    <h3>StarMaker Karaoke</h3>
                </div>
                <div class="tool-body">
                    <p>Rap along with our educational tracks. Perfect for practicing fluency and expression!</p>
                    <div class="karaoke-container">
                        <div class="lyrics">
                            <p><span class="current-line">Two plus two is four, that's the math I adore</span><br>
                            Subtract and divide, let me show you inside<br>
                            Fractions and decimals, they're no problem at all<br>
                            With rhythm and flow, watch your knowledge grow tall!</p>
                        </div>
                        <div class="controls">
                            <button class="control-btn"><i class="fas fa-microphone"></i> Start Recording</button>
                            <button class="control-btn"><i class="fas fa-play"></i> Playback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="lesson-plans">
        <h2 class="section-title">Sample Lesson Plans</h2>
        <div class="lesson-grid">
            <div class="lesson-card">
                <div class="lesson-img" style="background-image: url('https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80');"></div>
                <div class="lesson-content">
                    <h3>Math: Multiplication Tables</h3>
                    <p>Master times tables through rhythmic chants and beatbox patterns.</p>
                    <a href="#" class="btn">View Lesson</a>
                </div>
            </div>
            <div class="lesson-card">
                <div class="lesson-img" style="background-image: url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80');"></div>
                <div class="lesson-content">
                    <h3>Science: Photosynthesis</h3>
                    <p>Rap about how plants make food using sunlight and CO2.</p>
                    <a href="#" class="btn">View Lesson</a>
                </div>
            </div>
            <div class="lesson-card">
                <div class="lesson-img" style="background-image: url('https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80');"></div>
                <div class="lesson-content">
                    <h3>History: Civil Rights Movement</h3>
                    <p>Explore key figures and events through powerful spoken word.</p>
                    <a href="#" class="btn">View Lesson</a>
                </div>
            </div>
        </div>
    </section>

    <div class="stats">
        <div class="stat-box">
            <div class="number">250+</div>
            <div>Educational Raps</div>
        </div>
        <div class="stat-box">
            <div class="number">50k+</div>
            <div>Students Reached</div>
        </div>
        <div class="stat-box">
            <div class="number">92%</div>
            <div>Engagement Increase</div>
        </div>
    </div>

    <section class="testimonials">
        <h2 class="section-title">What Teachers Say</h2>
        <div class="testimonial">
            <p>"My students who struggled with reading are now excited to participate. The combination of rhythm and curriculum content has transformed my classroom!"</p>
            <div class="author">- Ms. Johnson, 5th Grade Teacher</div>
        </div>
        <div class="testimonial">
            <p>"The beat maker tool allows students to create their own learning soundtracks. It's incredible to see them internalize math concepts through music."</p>
            <div class="author">- Mr. Davis, Middle School Math</div>
        </div>
    </section>

    <footer>
        <div class="footer-content">
            <div class="logo">
                <i class="fas fa-microphone-alt"></i>
                <span>Read the Rap</span>
            </div>
            <p>Transforming literacy and learning through the power of rhythm and rhyme</p>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-tiktok"></i></a>
            </div>
            <div class="copyright">
                &copy; 2023 Read the Rap. All rights reserved. Solving literacy through rhythm.
            </div>
        </div>
    </footer>

    <script>
        // Beat maker functionality
        const beatPads = document.querySelectorAll('.beat-pad');
        
        beatPads.forEach(pad => {
            pad.addEventListener('mousedown', () => {
                pad.classList.add('active');
                // In a real implementation, this would play a sound
                setTimeout(() => {
                    pad.classList.remove('active');
                }, 150);
            });
            
            pad.addEventListener('touchstart', () => {
                pad.classList.add('active');
                // In a real implementation, this would play a sound
                setTimeout(() => {
                    pad.classList.remove('active');
                }, 150);
            });
        });
        
        // Karaoke functionality
        const recordBtn = document.querySelector('.control-btn:nth-child(1)');
        const playbackBtn = document.querySelector('.control-btn:nth-child(2)');
        
        recordBtn.addEventListener('click', () => {
            if(recordBtn.innerHTML.includes('Start')) {
                recordBtn.innerHTML = '<i class="fas fa-stop"></i> Stop Recording';
                recordBtn.style.background = 'var(--accent)';
            } else {
                recordBtn.innerHTML = '<i class="fas fa-microphone"></i> Start Recording';
                recordBtn.style.background = 'var(--primary)';
            }
        });
        
        playbackBtn.addEventListener('click', () => {
            playbackBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
            setTimeout(() => {
                playbackBtn.innerHTML = '<i class="fas fa-play"></i> Playback';
            }, 3000);
        });
        
        // Animated background
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            document.body.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
        });
    </script>
</body>
</html> Readarap-K12
