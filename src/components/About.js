const About = () => {
    return (
        <div className="flex items-center justify-center">
            <a href="#" className="block max-w-2xl p-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">My Food App Project</h5>
                <p>
                    <div className="about-page">
                        <h2 className="font-bold mt-5">About My Food App Project</h2>
                        <p>Welcome to my food app project! As an aspiring developer and food enthusiast, I embarked on this individual journey to bring you a delightful and convenient way to explore and enjoy a variety of cuisines right from your device.</p>

                        <h3 className="font-bold">My Inspiration</h3>
                        <p>This project is a reflection of my passion for both technology and good food. I wanted to challenge myself and create something meaningful that combines my love for coding with my appreciation for culinary experiences.
                            In this app is I'm showcasing Restaurants and thier menu that I fetched from <strong>swiggy's live api</strong> so all the data is real time.</p>

                        <h3 className="font-bold">Learning Through Creation</h3>
                        <p>I designed and developed this app from scratch, embracing the learning process at every step. Through this project, I've honed my coding skills, UI/UX design, and problem-solving abilities. </p>

                        <h3 className="font-bold">A Glimpse Into the Future</h3>
                        <p>As I continue to grow and develop my skills, I have exciting plans to enhance this app further. Here's a sneak peek at some upcoming features:</p>
                        <ul>
                            <li><strong>1. Authentication:</strong> Soon, you'll be able to create a personalized account, ensuring a secure and tailored experience.</li>
                            <li><strong>2. Advanced Restaurant Filtration:</strong> I'm working on refining the restaurant search, allowing you to find your favorite cuisines and dietary options more easily.</li>
                            <li><strong>3. Seamless Cart Functionality:</strong> I'm excited to introduce a user-friendly cart system, making it effortless for you to select and order your desired dishes.</li>
                        </ul>

                        <p>Thank you for visiting this project. Your support and feedback mean a lot to me as I continue to learn and innovate. I invite you to explore the app, discover new flavors, and stay tuned for the exciting updates that lie ahead.</p>

                        <p>Here's to coding, creativity, and a whole lot of deliciousness!</p>
                        <p className="font-bold">Yash Shekhawat</p>
                    </div>
                </p>
            </a>
        </div>
    )
}

export default About;